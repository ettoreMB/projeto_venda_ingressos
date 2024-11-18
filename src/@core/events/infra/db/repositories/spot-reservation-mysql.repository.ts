import { EntityManager } from '@mikro-orm/mysql';
import { ISpotRepository } from 'src/@core/events/domain/repositories/spot-repository.interface';
import { EventSpotId } from 'src/@core/events/entities/event-spot';
import { SpotReservation } from 'src/@core/events/entities/spot-reservation.entity';

export class SpotMysqlRepository implements ISpotRepository {
  constructor(private entityManager: EntityManager) {}

  async add(entity: SpotReservation): Promise<void> {
    this.entityManager.persist(entity);
  }

  async findById(id: EventSpotId | string): Promise<SpotReservation> {
    return this.entityManager.findOne(SpotReservation, {
      id: typeof id === 'string' ? new EventSpotId(id) : id,
    });
  }

  async findAll(): Promise<SpotReservation[]> {
    return this.entityManager.find(SpotReservation, {});
  }
  async delete(entity: SpotReservation): Promise<void> {
    this.entityManager.remove(entity);
  }
}
