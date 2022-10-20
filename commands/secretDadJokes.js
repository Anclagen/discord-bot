const { SlashCommandBuilder } = require("discord.js");
const DadJokes = require("dadjokes-wrapper");
const dj = new DadJokes();

// DOCS https://openbase.com/js/dadjokes-wrapper

module.exports = {
  data: new SlashCommandBuilder().setName("secret-joke").setDescription("A funny joke, just for you!"),
  async execute(interaction) {
    return dj
      .randomJoke()
      .then((res) => interaction.reply({ content: res, ephemeral: true }))
      .catch((err) => console.error(err));
  },
};
