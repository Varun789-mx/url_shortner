import insertlink from "../../prisma/src/add_link"
interface urlprop {
    original_url: string;
    short_url: string;
}
const prop: urlprop = {
	original_url: "Random.xyx",
	short_url: "xefsfaga"
}
async function addlink(prop:urlprop) {
    try {
    const client = await insertlink(prop);
    }catch(e) { 
        console.log(e)
    }
}
addlink(prop);