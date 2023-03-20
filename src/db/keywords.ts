import sql from "./db"

export default async function getAllKeywords() {
	const keywords = await sql`select * from keywords`
	return keywords
}
