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
  async function addlink(prop:urlprop) {
      try {
      const client = await insertlink(prop);
      }catch(e) {
          console.log(e)
      }
 }

interface shortenurl { 
	url:string;
}

function generateshort() {
	let short = ''
	const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	for (let i = 0; i < 8; i++) {
		short += str.charAt(Math.floor(Math.random() * str.length))
	}
	return short;
}
export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		if(request.method === 'POST' && url.pathname === '/shorten') { 
			try { 
				const original_url:shortenurl = new await request.json()
				if(!original_url) { 
				 return new Response(JSON.stringyfy({Error:"Url is not provided"},{
					status:400,
					headers:{"Content-Type":"application/json"}
					},
				 ))
				}
				const short_url = generateshort();
				const new_url = await addlink({
					original_url:original_url.url,
					short_url:short_url
				});
				if(!new_url) { 
					return new Response(JSON.stringify({Error:"Unable to add url to db"},{
						status:500,
						headers:{"Content-Type":"applicaton/json"},
					} )
							   )
				}
				return new Response(JSON.stringify({shorten_url:short_url},{headers:{"Content-Type":"application/json"},}))
				
			}catch(e) { 
				return new Response(JSON.stringify({Error:e},{
						status:500,
						headers:{"Content-Type":"application/json"}
				
						})
						   )
			}

		
		}
	}
}satisfies ExportedHandler<Env>				
			  	

