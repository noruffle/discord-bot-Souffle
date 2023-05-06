import {
  Client,
  ChatInputCommandInteraction,
  SlashCommandBuilder
} from 'discord.js';

import { LoggerFunction } from '../logger/logger.function';

export interface CommandProps {
  interaction: ChatInputCommandInteraction
  client: Client
  log: LoggerFunction
}