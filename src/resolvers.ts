// deno-lint-ignore-file no-unused-vars
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
await config({ export: true, safe: true, path: "../.env" });
import { Artist, Album, AlbumResponse, ArtistResponse } from "./results.ts";
import { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const Bearer = Deno.env.get("BEARER");
export const searchArtist = async (ctx: Context) => {
  const artistName = ctx.request.url.pathname.split(":")[1];

  const response = await fetch(
    `https://api.spotify.com/v1/search?type=artist&query=artist:${artistName}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Bearer}`,
      },
    }
  );
  const data = (await response.json()) as ArtistResponse;
  ctx.response.body = {
    name:data.artists.items[0].name,
    id:data.artists.items[0].id,
    followers:data.artists.items[0].followers,
    popularity:data.artists.items[0].popularity,
    genres:data.artists.items[0].genres,
    href:data.artists.items[0].href,
    uri:data.artists.items[0].uri,
    type:data.artists.items[0].type,
    external_urls:data.artists.items[0].external_urls,

  } 
};

export const searchAlbumsByArtist = async (ctx: Context) => {
  const artistName = ctx.request.url.pathname.split(":")[1];

  const response = await fetch(
    `https://api.spotify.com/v1/search?type=album&query=artist:${artistName}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Bearer}`,
      },
    }
  );
  const data = (await response.json()) as AlbumResponse;
  const albums = data.albums.items as Album[];
  albums.map((album) => {
    delete album.available_markets;
    return album.artists;
  });
  ctx.response.body = {
    //return only album names and artists
    albums: albums.map((album) => {
      return {
        name: album.name,
        id: album.id,
        href: album.href,
        uri: album.uri,
        type: album.type,
        total_tracks: album.total_tracks,
        artists: album.artists
      };
    }),
  };
};

export const searchByAlbum = async (ctx: Context) => {
  const albumName = ctx.request.url.pathname.split(":")[1];
  const response = await fetch(
    `https://api.spotify.com/v1/search?type=album&query=album:${albumName}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Bearer}`,
      },
    }
  );
  const data = (await response.json()) as AlbumResponse;
  const albums = data.albums.items as Album[];
  albums.map((album) => {
    delete album.available_markets;
    return album.artists;
  });

  ctx.response.body = {
    albums: albums.map((album) => {
      return {
        name: album.name,
        id: album.id,
        href: album.href,
        uri: album.uri,
        type: album.type,
        total_tracks: album.total_tracks,
        artists: album.artists
      };
    }),
  };
};
