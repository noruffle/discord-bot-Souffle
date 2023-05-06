import { ClientEvents, Awaitable } from 'discord.js';

import { EventKeys, EventProps } from './';

export type EventExec<T extends EventKeys> = 
  (props: EventProps, ...args: ClientEvents[T]) => Awaitable<unknown>