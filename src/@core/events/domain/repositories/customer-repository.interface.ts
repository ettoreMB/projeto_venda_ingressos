import { IRepository } from 'src/@core/commom/domain/repository-interface';
import { Customer } from '../../entities/customer.entity';

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface ICustomerRepository extends IRepository<Customer> {}
