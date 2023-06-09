import { Client, GatewayIntentBits } from 'discord.js';
import { registerEvents } from '../utils';
import { keys } from '../keys';

import events from '../events';

const Souffle = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ]
})

registerEvents(Souffle, events)

Souffle.login(keys.clientToken)
  .catch((err) => {
    console.error("[Login Error]", err)
    process.exit(1)
  })