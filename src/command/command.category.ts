import { Command } from "./command.interface"

export interface CommandCategory {
  name: string
  commands: Command[]
}