import { Event } from '../event/event.interface';
import ready from './ready.event';
import interactionCreate from './interaction.create';

const events: Event<any>[] = [
  ready,
  interactionCreate
]

export default events