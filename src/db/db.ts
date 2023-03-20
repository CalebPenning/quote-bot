import postgres from "postgres"
import dotenv from "dotenv"

dotenv.config()
const DB_URL = process.env.DB_URL as string

const sql = postgres(DB_URL)

export default sql
