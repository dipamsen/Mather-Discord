const { Client } = require("discord.js");
const client = new Client()
const Math = require("mathjs")
require("dotenv").config();
const app = require("express")()

let botToken = process.env.DISCORD_BOT_TOKEN
let serverID = process.env.SERVER_ID
let channelID = process.env.CHANNEL_ID

app.get('/', (req, res) => {
  console.log("FU")
  res.send("HEEEY")
})

client.once('ready', () => {
  console.log("READY.")
})

client.login(botToken);

app.listen(process.env.PORT, () => console.log("ready"))

client.on("message", (message) => {
  if (message.author.id == client.user.id) return
  if (message.content.startsWith("!m")) {
    let eqn = message.content.split(/\s+/);
    eqn.shift();
    try {
      let res = Math.evaluate(eqn.join(" "))
      message.channel.send(res)
    } catch (e) { }
  }
})

// client.on("messageReactionAdd", (reaction, user) => {
//   reaction.message.channel.send(reaction.emoji.name)
// })