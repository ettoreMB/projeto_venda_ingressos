/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityProperty, Platform, Type } from '@mikro-orm/core';
import { CustomerId } from 'src/@core/events/entities/customer.entity';

export class CustomerIdSchemaType extends Type<CustomerId, string> {
  convertToDatabaseValue(
    valueObject: CustomerId | null | undefined,
    platform: Platform,
  ): string {
    return valueObject instanceof CustomerId ? valueObject.value : '';
  }

  convertToJSValue(value: string, platform: Platform): CustomerId {
    return new CustomerId(value);
  }

  getColumnType(prop: EntityProperty, platform: Platform): string {
    return `varchar(36)`;
  }
}
