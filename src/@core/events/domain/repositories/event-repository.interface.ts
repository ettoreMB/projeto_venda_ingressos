/* eslint-disable @typescript-eslint/no-empty-object-type */
import { IRepository } from 'src/@core/commom/domain/repository-interface';
import { Event } from '../../entities/event.entity';

export interface IEventRepository extends IRepository<Event> {}
