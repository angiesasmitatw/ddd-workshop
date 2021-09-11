import { Item } from './item';

type Event = {
  eventName: string;
  item: Item
}

export interface IEventAction {
  apply(evtName: string, item: Item): void;
}


export class DomainEvent {
  static events: Event[]

  static apply(eventName: string, item: Item) {
    this.events.push({ eventName, item });
  }
}

export class AddEvent implements IEventAction {
  apply(evtName: string, item: Item): void {
    //TODO: put the add operation here
    // OK
    DomainEvent.apply(evtName, item);
  }
}

export class removeEvent implements IEventAction {
  apply(evtName: string, item: Item): void {
    //TODO: put remove operation here
    DomainEvent.apply(evtName, item);
  }
}
