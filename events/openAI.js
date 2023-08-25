require("dotenv").config();
const { Events } = require("discord.js");
const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

module.exports = {
  name: Events.MessageCreate,
  execute: async function (message) {
    const triggerWords = ["troll bot", "TROLL BOT", "Bot", "bot", "BOT", "Troll Bot", "Troll bot"];
    triggerWords.forEach(async (word) => {
      if (message.content.startsWith(word)) {
        try {
          // Use the OpenAI API to generate a response
          const response = await openai.completions.create({
            model: "text-davinci-003",
            prompt: message.content,
            max_tokens: 250,
          });
          // Send the response
          await message.channel.send(response.choices[0].text);
        } catch (err) {
          //console.error(err);
          await message.channel.send(`An error occurred while trying to generate a response. ${err}`);
        }
      }
    });
  },
};
