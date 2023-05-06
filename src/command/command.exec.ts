import { Awaitable } from 'discord.js';

import { CommandProps } from './command.props.interface';

export type CommandExec = (props: CommandProps) => Awaitable<unknown>