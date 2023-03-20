import { SlashCommandBuilder } from "discord.js"
import type { RepliableInteraction } from "discord.js"
import sql from "../db/db"

module.exports = {
	data: new SlashCommandBuilder()
		.setName("sneaky")
		.setDescription("Replies with a random sneaky quote"),

	async execute(interaction: RepliableInteraction) {
		const quotes = await sql`select * from quotes`
		const randomIdx = Math.floor(Math.random() * quotes.length)
		await interaction.reply(quotes[randomIdx])
	},
}
