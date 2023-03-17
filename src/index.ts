import * as dotenv from "dotenv"
import { Client, Events, GatewayIntentBits } from "discord.js"

// expose environment variables
dotenv.config()

const token = process.env.DISCORD_TOKEN

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
})

client.login(token)
