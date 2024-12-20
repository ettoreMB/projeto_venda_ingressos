import { Entity } from 'src/@core/commom/domain/entity';
import Uuid from 'src/@core/commom/domain/value-objects/uuid.vo';

type EventSpotConstructorProps = {
  id?: EventSpotId | string;
  location: string;
  is_reserved: boolean;
  is_published: boolean;
};

export class EventSpotId extends Uuid {}

export class EventSpot extends Entity {
  id: EventSpotId;
  location: string | null;
  is_reserved: boolean;
  is_published: boolean;

  constructor(props: EventSpotConstructorProps) {
    super();
    this.id =
      typeof props.id === 'string'
        ? new EventSpotId(props.id)
        : (props.id ?? new EventSpotId());
    this.location = props.location ?? null;
    this.is_reserved = props.is_reserved;
    this.is_published = props.is_published;
  }

  static create() {
    return new EventSpot({
      location: null,
      is_reserved: false,
      is_published: false,
    });
  }

  changeLocation(location: string) {
    this.location = location;
  }

  publish() {
    this.is_published = true;
  }

  unPublish() {
    this.is_published = false;
  }

  markAsReserved() {
    this.is_reserved = true;
  }

  toJSON() {
    return {
      id: this.id,
      location: this.location,
      is_reserved: this.is_reserved,
      is_published: this.is_published,
    };
  }
}
