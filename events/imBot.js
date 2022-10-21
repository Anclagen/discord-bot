const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  once: true,
  execute(message) {
    const triggerWords = {
      imDad: ["I'm ", "Im ", "im ", "i'm "],
      shutUp: ["poke", "prod"],
    };
    triggerWords.imDad.forEach((word) => {
      if (message.content.startsWith(word)) {
        const content = message.content;
        const split = content.split(" ");
        message.reply("Hi, " + split[1].charAt(0).toUpperCase() + split[1].slice(1) + ". I'm Troll Bot!");
      }
    });
  },
};
