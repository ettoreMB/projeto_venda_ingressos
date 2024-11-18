/* eslint-disable @typescript-eslint/no-empty-object-type */
import { IRepository } from 'src/@core/commom/domain/repository-interface';
import { Order } from '../../entities/order.entity';

export interface IOrderRepository extends IRepository<Order> {}
