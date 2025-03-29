/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import insertlink from "../../prisma/src/add_link"
interface urlprop {
	original_url: string;
	short_url: string;
}
async function addlink(prop: urlprop) {
	try {
		const client = await insertlink(prop);
		return client;
	} catch (e) {
		console.log(e)
	}
	return null
}

interface shortenurl {
	url: string;
}

async function generateshort() {
	let short = ''
	const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	for (let i = 0; i < 8; i++) {
		short += str.charAt(Math.floor(Math.random() * str.length))
	}
	return short;
}
export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url)
		if (request.method === 'POST' && url.pathname === '/shorten') {
			try {
				const original_url: shortenurl = await request.json();
				const short_url = await generateshort();
				const new_url = await addlink({
					original_url: original_url.url,
					short_url: short_url
				});
				if (!new_url) {
					return new Response(JSON.stringify({ error: "Error in creating db" }), {
						status: 400,
						headers: { "Content-Type": "application/json" }
					});
				}
				return new Response(JSON.stringify({ short_url: short_url }), {
					status: 500,
					headers: {
						"Content-Type": "application/json"
					}
				})


			} catch (e) {
				return new Response(JSON.stringify({ Error: e }), {
					status: 400,
					headers: { 'Content-Type': 'application/json' },

				})
			}
		}
		else {
			return new Response(JSON.stringify({ Error: "Request type is not post" }), {
				status: 400,
				headers: { 'Content-Type': "application/json" }
			})
		}
	}
} satisfies ExportedHandler<Env>



