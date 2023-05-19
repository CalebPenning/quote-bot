import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const apiBaseUrl = process.env.API_BASE_URL as string

export default async function getAllQuotes() {
	try {
	const { data } = await axios.get(`${apiBaseUrl}/quotes`)
	return data
	} catch(e) {
		console.error(e)
	}
}
