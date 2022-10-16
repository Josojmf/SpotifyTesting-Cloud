// deno-lint-ignore-file no-unused-vars require-await ban-unused-ignore
import {searchByAlbum,searchAlbumsByArtist,searchArtist} from "./resolvers.ts"
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { Application,Router  } from "https://deno.land/x/oak@v11.1.0/mod.ts";

await config({export: true, safe: true,path: "../.env"});
const app = new Application();
const router = new Router();
const port = parseInt(Deno.env.get("PORT")!);

router.get("/", async (ctx) => {ctx.response.body="This is my spotify test app routes : /search"});
router.get("/searchArtist/:name", searchArtist);
router.get("/searchAlbumsByArtist/:name", searchAlbumsByArtist);
router.get("/searchAlbum/:name", searchByAlbum);

app.use(router.routes());
console.log(`Server running on port ${port}`);
await app.listen({ port: port });