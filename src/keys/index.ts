import { KeyToken } from '../key/key.token.interface';

export const keys: KeyToken = {
  clientToken: process.env.CLIENT_TOKEN!,
  testGuild: process.env.GUILD!
}