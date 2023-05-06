import { CommandExec, CommandMeta } from '../';

export interface Command {
  meta: CommandMeta
  exec: CommandExec
}