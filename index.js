const Discord = require("discord.js");
const client = new Discord.Client()
const Math = require("mathjs")

require("dotenv").config();

let botToken = process.env.DISCORD_BOT_TOKEN
let serverID = process.env.SERVER_ID
let channelID = process.env.CHANNEL_ID

client.once('ready', () => {
  console.log("READY.")
})

client.login(botToken);


client.on("message", (message) => {
  if (message.author.id == client.user.id) return
  if (message.content.startsWith("!m")) {
    let eqn = message.content.split(/\s+/);
    eqn.shift();
    try {
      let res = Math.evaluate(eqn.join(" "))
      message.channel.send(res)
    } catch { }
  }
})

// client.on("messageReactionAdd", (reaction, user) => {
//   reaction.message.channel.send(reaction.emoji.name)
// })