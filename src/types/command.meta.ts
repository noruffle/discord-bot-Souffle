import { SlashCommandBuilder } from 'discord.js';

export type CommandMeta = 
  SlashCommandBuilder |
  Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">