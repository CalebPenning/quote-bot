import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const apiBaseUrl = process.env.API_BASE_URL as string

export default async function getAllKeywords() {
	const { data } = await axios.get(`${apiBaseUrl}/keywords`)
	return data
}
