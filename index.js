const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const triggerWord = "meow";   // change this
const responseWord = "meow"; // change this
const triggerWord2 = "cat"
const responseWord2 = "meow"


client.once("ready", () => {
  console.log("Bot is online!");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes(triggerWord)) {
    message.channel.send(responseWord);
  }
   if (message.content.toLowerCase().includes(triggerWord2)) {
    message.channel.send(responseWord2);
  }
});

client.login(process.env.TOKEN);
