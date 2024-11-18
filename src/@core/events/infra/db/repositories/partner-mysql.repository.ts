import { EntityManager } from '@mikro-orm/mysql';
import { IPartnerRepository } from 'src/@core/events/domain/repositories/partner-repository.interface';
import { Partner, PartnerId } from 'src/@core/events/entities/partnert.entity';

export class PartnerMysqlRepository implements IPartnerRepository {
  constructor(private entityManager: EntityManager) {}
  async add(entity: Partner): Promise<void> {
    this.entityManager.persist(entity);
  }
  async findById(id: PartnerId | string): Promise<Partner> {
    return this.entityManager.findOne(Partner, {
      id: typeof id === 'string' ? new PartnerId(id) : id,
    });
  }

  async findAll(): Promise<Partner[]> {
    return this.entityManager.find(Partner, {});
  }
  async delete(entity: any): Promise<void> {
    this.entityManager.remove(entity);
  }
}
