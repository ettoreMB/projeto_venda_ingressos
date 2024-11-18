/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityProperty, Platform, Type } from '@mikro-orm/core';
import { EventSectionId } from 'src/@core/events/entities/event-section';

export class EventSectionIdSchemaType extends Type<EventSectionId, string> {
  convertToDatabaseValue(
    valueObject: EventSectionId | undefined | null,
    platform: Platform,
  ): string {
    return valueObject instanceof EventSectionId
      ? valueObject.value
      : (valueObject as string);
  }

  //não funciona para relacionamentos
  convertToJSValue(value: string, platform: Platform): EventSectionId {
    return new EventSectionId(value);
  }

  getColumnType(prop: EntityProperty, platform: Platform) {
    return `varchar(36)`;
  }
}
