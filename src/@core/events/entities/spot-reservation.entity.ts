import { AggregateRoot } from 'src/@core/commom/domain/aggregate-root';
import { CustomerId } from './customer.entity';
import { EventSpotId } from './event-spot';

export type SpotReservationConstructorProps = {
  spot_id: EventSpotId | string;
  reservation_date: Date;
  customer_id: CustomerId | string;
};

export type CreateSpotReservationCommand = {
  spot_id: EventSpotId | string;
  customer_id: CustomerId | string;
};

export class SpotReservation extends AggregateRoot {
  spot_id: EventSpotId;
  reservation_date: Date;
  customer_id: CustomerId;

  constructor(props: SpotReservationConstructorProps) {
    super();
    this.spot_id =
      props.spot_id instanceof EventSpotId
        ? props.spot_id
        : new EventSpotId(props.spot_id);
    this.reservation_date = props.reservation_date;
    this.customer_id =
      props.customer_id instanceof CustomerId
        ? props.customer_id
        : new CustomerId(props.customer_id);
  }

  static create(command: CreateSpotReservationCommand) {
    const spotReservation = new SpotReservation({
      spot_id: command.spot_id,
      customer_id: command.customer_id,
      reservation_date: new Date(),
    });

    return spotReservation;
  }

  changeReservation(customer_id: CustomerId) {
    this.customer_id = customer_id;
    this.reservation_date = new Date();
  }

  toJSON() {
    return {
      spot_id: this.spot_id.value,
      customer_id: this.customer_id.value,
      reservation_date: this.reservation_date,
    };
  }
}
