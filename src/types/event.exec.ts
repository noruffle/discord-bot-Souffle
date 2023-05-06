import { ClientEvents, Awaitable } from 'discord.js';

import { EventProps } from './interface/props';
import { EventKeys } from './';

export type EventExec<T extends EventKeys> = 
  (props: EventProps, ...args: ClientEvents[T]) => Awaitable<unknown>