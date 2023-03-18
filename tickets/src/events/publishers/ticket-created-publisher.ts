import { Publisher, Subjects, TicketCreatedEvent } from '@ticketssa/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
