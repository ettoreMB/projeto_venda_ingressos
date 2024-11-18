import { EntityManager } from '@mikro-orm/mysql';
import { IOrderRepository } from 'src/@core/events/domain/repositories/order-repository.interface';
import { Order, OrderId } from 'src/@core/events/entities/order.entity';

export class OrderMySqlRepository implements IOrderRepository {
  constructor(private entityManager: EntityManager) {}

  async add(entity: Order): Promise<void> {
    this.entityManager.persist(entity);
  }
  async findById(id: OrderId | string): Promise<Order> {
    return this.entityManager.findOne(Order, {
      id: typeof id === 'string' ? new OrderId(id) : id,
    });
  }

  async findAll(): Promise<Order[]> {
    return this.entityManager.find(Order, {});
  }
  async delete(entity: Order): Promise<void> {
    this.entityManager.remove(entity);
  }
}
