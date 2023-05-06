import {
  SlashCommandBuilder
} from 'discord.js';
import {
  command
} from '../../utils';

const meta = new SlashCommandBuilder()
  .setName('200')
  .setDescription('Ping the bot for a response.')
  .addStringOption((option) => 
    option
      .setName('message')
      .setDescription('Provide the bot message to responde it')
      .setMinLength(1)
      .setMaxLength(2000)
      .setRequired(false)  
  )

export default command(meta, ({ interaction }) => {
  const message = interaction.options.getString('message')

  return interaction.reply({
    ephemeral: true,
    content: message ?? "Pong!"
  })
})