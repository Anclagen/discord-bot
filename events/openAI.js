require("dotenv").config();
const { Events } = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = {
  name: Events.MessageCreate,
  execute: async function (message) {
    if (message.content.startsWith("Troll bot")) {
      try {
        // Use the OpenAI API to generate a response
        const response = await openai.createCompletion({
          prompt: `${message.content}`,
          model: "text-davinci-003",
          max_tokens: 250,
        });
        // Send the response
        console.log(response);
        await message.channel.send(response.data.choices[0].text);
      } catch (err) {
        console.error(err);
        await message.channel.send("An error occurred while trying to generate a response.");
      }
    }
  },
};
