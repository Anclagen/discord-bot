const { SlashCommandBuilder } = require("discord.js");
const DadJokes = require("dadjokes-wrapper");
const dj = new DadJokes();

// DOCS https://openbase.com/js/dadjokes-wrapper

module.exports = {
  data: new SlashCommandBuilder().setName("joke").setDescription("A funny joke"),
  async execute(interaction) {
    return dj
      .randomJoke()
      .then((res) => interaction.reply(res))
      .catch((err) => console.error(err));
  },
};
