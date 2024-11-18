/* eslint-disable @typescript-eslint/no-empty-object-type */
import { IRepository } from 'src/@core/commom/domain/repository-interface';
import { Partner } from '../../entities/partnert.entity';

export interface IPartnerRepository extends IRepository<Partner> {}
