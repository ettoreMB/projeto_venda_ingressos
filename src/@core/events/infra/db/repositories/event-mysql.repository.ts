import { EntityManager } from '@mikro-orm/mysql';
import { IEventRepository } from 'src/@core/events/domain/repositories/event-repository.interface';
import { Event, EventId } from 'src/@core/events/entities/event.entity';

export class EventMysqlRepository implements IEventRepository {
  constructor(private entityManager: EntityManager) {}

  async add(entity: Event): Promise<void> {
    this.entityManager.persist(entity);
  }

  async findById(id: EventId | string): Promise<Event> {
    return this.entityManager.findOne(Event, {
      id: typeof id === 'string' ? new EventId(id) : id,
    });
  }
  async findAll(): Promise<Event[]> {
    return this.entityManager.find(Event, {});
  }
  async delete(entity: Event): Promise<void> {
    this.entityManager.remove(entity);
  }
}
