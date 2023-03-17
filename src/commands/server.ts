import { SlashCommandBuilder } from "discord.js"
import type { RepliableInteraction } from "discord.js"

module.exports = {
	data: new SlashCommandBuilder()
		.setName("server")
		.setDescription("Provides information about the server"),
	async execute(interaction: RepliableInteraction) {
		await interaction.reply(
			`This server is ${interaction?.guild?.name} and has ${interaction?.guild?.memberCount} members.`
		)
	},
}
