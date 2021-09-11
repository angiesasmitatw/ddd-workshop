import { Item } from './item';

type Event = {
  eventName: string;
  item: Item
}


export class DomainEvent {
  static events: Event[]

  static apply(eventName: string, item: Item) {
    this.events.push({ eventName, item });
  }
}
