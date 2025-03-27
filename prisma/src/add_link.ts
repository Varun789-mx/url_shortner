import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

interface urlprop {
	original_url: string;
	short_url: string;
}
const prop: urlprop = {
	original_url: "Random.xyx",
	short_url: "xefsfaga"
}

async function main(prop: urlprop) {
	await prisma.linkTable.create({
		data: {
			original_url: prop.original_url,
			short_url: prop.short_url
		}
	}).then(async () => {
		await prisma.$disconnect()
		console.log("Query ran succesfully")
	}).catch(async (e) => {
		await prisma.$disconnect()
		console.log(e)
	})
}

main(prop)
export default main