import { REST, Routes } from "discord.js"
import * as dotenv from "dotenv"
import fs from "fs"
import path from "path"

dotenv.config()
const clientId = process.env.DISCORD_CLIENT_ID as string
const token = process.env.DISCORD_TOKEN as string
const guildId = process.env.DISCORD_GUILD_ID as string

const commands = []

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter((file) => file.endsWith(".js"))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	commands.push(command.data.toJSON())
}

const rest = new REST({ version: "10" }).setToken(token)

;(async () => {
	try {
		console.log(
			`Started refreshing ${commands.length} application (/) commands.`
		)

		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{
				body: commands,
			}
		)

		console.log(
			`Successfully reloaded ${
				(data as typeof commands).length
			} application (/) commands.`
		)
	} catch (err) {
		console.error(err)
	}
})()
