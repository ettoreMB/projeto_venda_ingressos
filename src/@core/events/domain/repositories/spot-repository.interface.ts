/* eslint-disable @typescript-eslint/no-empty-object-type */
import { IRepository } from 'src/@core/commom/domain/repository-interface';
import { SpotReservation } from '../../entities/spot-reservation.entity';

export interface ISpotRepository extends IRepository<SpotReservation> {}
