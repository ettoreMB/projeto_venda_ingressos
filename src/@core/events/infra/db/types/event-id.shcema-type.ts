/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityProperty, Platform, Type } from '@mikro-orm/core';
import { EventId } from 'src/@core/events/entities/event.entity';

export class EventIdSchemaType extends Type<EventId, string> {
  convertToDatabaseValue(
    valueObject: EventId | undefined | null,
    platform: Platform,
  ): string {
    return valueObject instanceof EventId
      ? valueObject.value
      : (valueObject as string);
  }

  //não funciona para relacionamentos
  convertToJSValue(value: string, platform: Platform): EventId {
    return new EventId(value);
  }

  getColumnType(prop: EntityProperty, platform: Platform) {
    return `varchar(36)`;
  }
}
