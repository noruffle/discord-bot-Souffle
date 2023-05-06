import { EventExec, EventKeys } from '../';

export interface Event<T extends EventKeys> {
  id: T
  exec: EventExec<T>
}