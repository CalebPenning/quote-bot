import { SlashCommandBuilder } from "discord.js"
import type { RepliableInteraction } from "discord.js"
import sneakyQuotes from "../data/sneaky"

module.exports = {
	data: new SlashCommandBuilder()
		.setName("sneaky")
		.setDescription("Replies with a random sneaky quote"),

	async execute(interaction: RepliableInteraction) {
		const randomIdx = Math.floor(Math.random() * sneakyQuotes.length)
		await interaction.reply(sneakyQuotes[randomIdx])
	},
}
