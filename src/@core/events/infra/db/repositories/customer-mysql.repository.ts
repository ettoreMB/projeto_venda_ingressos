import { EntityManager } from '@mikro-orm/mysql';
import { ICustomerRepository } from 'src/@core/events/domain/repositories/customer-repository.interface';
import {
  Customer,
  CustomerId,
} from 'src/@core/events/entities/customer.entity';

export class CustomerMySQlRepository implements ICustomerRepository {
  constructor(private entityManager: EntityManager) {}

  async add(entity: Customer): Promise<void> {
    this.entityManager.persist(entity);
  }
  async findById(id: string | CustomerId): Promise<Customer> {
    return this.entityManager.findOne(Customer, {
      id: typeof id === 'string' ? new CustomerId(id) : id,
    });
  }
  async findAll(): Promise<Customer[]> {
    return this.entityManager.find(Customer, {});
  }
  async delete(entity: Customer): Promise<void> {
    await this.entityManager.remove(entity);
  }
}
