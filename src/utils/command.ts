import { 
  CommandExec,
  CommandMeta,
  CommandCategory,
  Command
} from '../command';

export function command(meta: CommandMeta, exec: CommandExec): Command {
  return {
    meta,
    exec,
  }
}

export function category( name: string, commands: Command[]): CommandCategory {
  return {
    name, 
    commands
  }
}