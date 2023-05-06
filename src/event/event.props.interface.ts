import { Client } from 'discord.js';
import { LoggerFunction } from '../logger/logger.function';

export interface EventProps {
  client: Client
  log: LoggerFunction
}