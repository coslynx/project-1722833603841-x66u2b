const { SlashCommandBuilder } = require('discord.js');
const { musicService } = require('../services/musicService');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('nowplaying')
    .setDescription('Displays information about the currently playing song.'),
  async execute(interaction) {
    const currentSong = musicService.getCurrentSong();

    if (!currentSong) {
      return interaction.reply('There is no song currently playing.');
    }

    const songInfo = `Now Playing: ${currentSong.title} by ${currentSong.artist}`;

    await interaction.reply(songInfo);
  },
};