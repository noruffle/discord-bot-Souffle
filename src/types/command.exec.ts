import { Awaitable } from 'discord.js';

import { CommandProps } from './interface/props/command.props.interface';

export type CommandExec = (props: CommandProps) => Awaitable<unknown>