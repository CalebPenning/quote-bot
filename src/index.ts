import * as dotenv from "dotenv"
import { Client, Events, GatewayIntentBits, Collection } from "discord.js"
import fs from "fs"
import path from "path"
import keywords from "./data/keywords"

// expose environment variables
dotenv.config()
const token = process.env.DISCORD_TOKEN

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
})

client.commands = new Collection()

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter((file) => file.endsWith(".js"))

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)

	if ("data" in command && "execute" in command) {
		client.commands.set(command.data.name, command)
	} else
		console.log(
			`[WARNING]: The command at ${filePath} is missing a required "data" or "execute" property.`
		)
}

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
})

client.on(Events.MessageCreate, async (message) => {
	if (!message.content) return

	for (let keyword of keywords) {
		if (message.content.toLowerCase().includes(keyword)) {
			await client.commands.get("sneaky").execute(message)
			return
		}
	}
})

client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return
	const command = client.commands.get(interaction.commandName)

	if (!command) return

	try {
		await command.execute(interaction)
	} catch (err: unknown) {
		console.error(err)
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({
				content: "There was an error contacting Sneaky!",
				ephemeral: true,
			})
		} else {
			await interaction.reply({
				content: "There was an error while executing this command!",
				ephemeral: true,
			})
		}
	}
})

client.login(token)
