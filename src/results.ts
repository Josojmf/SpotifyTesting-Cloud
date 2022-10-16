// deno-lint-ignore-file ban-types
export type Artist={
    external_urls: Object[],
    followers: Object[],
    genres: string[],
    href: string,
    id: string,
    images: Object[],
    name: string,
    popularity: number,
    type: string,
    uri: string
}

export type Album = {
  album_type: string;
  artists: Artist[];
  available_markets?: string[];
  external_urls: Object[];
  href: string;
  id: string;
  images: Object[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export type AlbumResponse ={
  albums:{
    href: string,
    items: Album[],
  }
}

export type ArtistResponse ={
  artists:{
    href: string,
    items: Artist[],
  }
}

/*
 artists: {
    href: "https://api.spotify.com/v1/search?query=artist%3Aeminem&type=artist&locale=*&offset=0&limit=20",
    items: [
      {
        external_urls: [Object],
        followers: [Object],
        genres: [Array],
        href: "https://api.spotify.com/v1/artists/7dGJo4pcD2V6oG8kP0tJRR",
        id: "7dGJo4pcD2V6oG8kP0tJRR",
        images: [Array],
        name: "Eminem",
        popularity: 91,
        type: "artist",
        uri: "spotify:artist:7dGJo4pcD2V6oG8kP0tJRR"
      },

  albums: {
    href: "https://api.spotify.com/v1/search?query=artist%3Aeminem&type=album&locale=*&offset=0&limit=20",
    items: [
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/2cWBwpqMsDJC1ZUwz813lo",
        id: "2cWBwpqMsDJC1ZUwz813lo",
        images: [Array],
        name: "The Eminem Show",
        release_date: "2002-05-26",
        release_date_precision: "day",
        total_tracks: 20,
        type: "album",
        uri: "spotify:album:2cWBwpqMsDJC1ZUwz813lo"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/3HNnxK7NgLXbDoxRZxNWiR",
        id: "3HNnxK7NgLXbDoxRZxNWiR",
        images: [Array],
        name: "Kamikaze",
        release_date: "2018-08-31",
        release_date_precision: "day",
        total_tracks: 13,
        type: "album",
        uri: "spotify:album:3HNnxK7NgLXbDoxRZxNWiR"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/6t7956yu5zYf5A829XRiHC",
        id: "6t7956yu5zYf5A829XRiHC",
        images: [Array],
        name: "The Marshall Mathers LP",
        release_date: "2000-05-23",
        release_date_precision: "day",
        total_tracks: 18,
        type: "album",
        uri: "spotify:album:6t7956yu5zYf5A829XRiHC"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/47BiFcV59TQi2s9SkBo2pb",
        id: "47BiFcV59TQi2s9SkBo2pb",
        images: [Array],
        name: "Recovery",
        release_date: "2010-06-18",
        release_date_precision: "day",
        total_tracks: 17,
        type: "album",
        uri: "spotify:album:47BiFcV59TQi2s9SkBo2pb"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/4otkd9As6YaxxEkIjXPiZ6",
        id: "4otkd9As6YaxxEkIjXPiZ6",
        images: [Array],
        name: "Music To Be Murdered By",
        release_date: "2020-01-17",
        release_date_precision: "day",
        total_tracks: 20,
        type: "album",
        uri: "spotify:album:4otkd9As6YaxxEkIjXPiZ6"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/0vE6mttRTBXRe9rKghyr1l",
        id: "0vE6mttRTBXRe9rKghyr1l",
        images: [Array],
        name: "The Slim Shady LP",
        release_date: "1999-02-23",
        release_date_precision: "day",
        total_tracks: 20,
        type: "album",
        uri: "spotify:album:0vE6mttRTBXRe9rKghyr1l"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/0U6ldwLBEMkwgfQRY4V6D2",
        id: "0U6ldwLBEMkwgfQRY4V6D2",
        images: [Array],
        name: "Revival",
        release_date: "2017-12-15",
        release_date_precision: "day",
        total_tracks: 19,
        type: "album",
        uri: "spotify:album:0U6ldwLBEMkwgfQRY4V6D2"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/3vOgbDjgsZBAPwV2M3bNOj",
        id: "3vOgbDjgsZBAPwV2M3bNOj",
        images: [Array],
        name: "The Marshall Mathers LP2",
        release_date: "2013-11-05",
        release_date_precision: "day",
        total_tracks: 16,
        type: "album",
        uri: "spotify:album:3vOgbDjgsZBAPwV2M3bNOj"
      },
      {
        album_type: "compilation",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/5qENHeCSlwWpEzb25peRmQ",
        id: "5qENHeCSlwWpEzb25peRmQ",
        images: [Array],
        name: "Curtain Call: The Hits (Deluxe Edition)",
        release_date: "2005-12-06",
        release_date_precision: "day",
        total_tracks: 24,
        type: "album",
        uri: "spotify:album:5qENHeCSlwWpEzb25peRmQ"
      },
      {
        album_type: "single",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/1rfORa9iYmocEsnnZGMVC4",
        id: "1rfORa9iYmocEsnnZGMVC4",
        images: [Array],
        name: "Just Lose It",
        release_date: "2004-01-01",
        release_date_precision: "day",
        total_tracks: 2,
        type: "album",
        uri: "spotify:album:1rfORa9iYmocEsnnZGMVC4"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/7MZzYkbHL9Tk3O6WeD4Z0Z",
        id: "7MZzYkbHL9Tk3O6WeD4Z0Z",
        images: [Array],
        name: "Relapse: Refill",
        release_date: "2009-05-15",
        release_date_precision: "day",
        total_tracks: 29,
        type: "album",
        uri: "spotify:album:7MZzYkbHL9Tk3O6WeD4Z0Z"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/3MKvhQoFSrR2PrxXXBHe9B",
        id: "3MKvhQoFSrR2PrxXXBHe9B",
        images: [Array],
        name: "Music To Be Murdered By - Side B (Deluxe Edition)",
        release_date: "2020-12-18",
        release_date_precision: "day",
        total_tracks: 36,
        type: "album",
        uri: "spotify:album:3MKvhQoFSrR2PrxXXBHe9B"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/3aTuW4BtsyyyyQa9LKqj8n",
        id: "3aTuW4BtsyyyyQa9LKqj8n",
        images: [Array],
        name: "Curtain Call 2",
        release_date: "2022-08-05",
        release_date_precision: "day",
        total_tracks: 35,
        type: "album",
        uri: "spotify:album:3aTuW4BtsyyyyQa9LKqj8n"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/6EzbFdrwvWpnpUjzrR57aU",
        id: "6EzbFdrwvWpnpUjzrR57aU",
        images: [Array],
        name: "The Eminem Show (Expanded Edition)",
        release_date: "2022-05-26",
        release_date_precision: "day",
        total_tracks: 38,
        type: "album",
        uri: "spotify:album:6EzbFdrwvWpnpUjzrR57aU"
      },
      {
        album_type: "single",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/07d5gKKyeWA07kZ3b91UBa",
        id: "07d5gKKyeWA07kZ3b91UBa",
        images: [Array],
        name: "When I'm Gone",
        release_date: "2005-01-01",
        release_date_precision: "day",
        total_tracks: 2,
        type: "album",
        uri: "spotify:album:07d5gKKyeWA07kZ3b91UBa"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/03lYYd9IOnxoacrLOvoPJa",
        id: "03lYYd9IOnxoacrLOvoPJa",
        images: [Array],
        name: "Eminem Presents The Re-Up",
        release_date: "2006-01-01",
        release_date_precision: "day",
        total_tracks: 23,
        type: "album",
        uri: "spotify:album:03lYYd9IOnxoacrLOvoPJa"
      },
      {
        album_type: "single",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/25zSh5FAL8kUh8z7ivwBH6",
        id: "25zSh5FAL8kUh8z7ivwBH6",
        images: [Array],
        name: "Venom (Music From The Motion Picture)",
        release_date: "2018-09-21",
        release_date_precision: "day",
        total_tracks: 1,
        type: "album",
        uri: "spotify:album:25zSh5FAL8kUh8z7ivwBH6"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/6DN7GcZF1HywzrkGN6Eeqk",
        id: "6DN7GcZF1HywzrkGN6Eeqk",
        images: [Array],
        name: "The Marshall Mathers LP2 (Deluxe)",
        release_date: "2013-11-05",
        release_date_precision: "day",
        total_tracks: 21,
        type: "album",
        uri: "spotify:album:6DN7GcZF1HywzrkGN6Eeqk"
      },
      {
        album_type: "album",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/1kTlYbs28MXw7hwO0NLYif",
        id: "1kTlYbs28MXw7hwO0NLYif",
        images: [Array],
        name: "Encore (Deluxe Version)",
        release_date: "2004-11-12",
        release_date_precision: "day",
        total_tracks: 23,
        type: "album",
        uri: "spotify:album:1kTlYbs28MXw7hwO0NLYif"
      },
      {
        album_type: "single",
        artists: [Array],
        available_markets: [Array],
        external_urls: [Object],
        href: "https://api.spotify.com/v1/albums/6F4ObGnJwwV5W4uLFHnNoT",
        id: "6F4ObGnJwwV5W4uLFHnNoT",
        images: [Array],
        name: "From The D 2 The LBC (with Snoop Dogg)",
        release_date: "2022-06-24",
        release_date_precision: "day",
        total_tracks: 1,
        type: "album",
        uri: "spotify:album:6F4ObGnJwwV5W4uLFHnNoT"
      }
    ],
    limit: 20,
    next: "https://api.spotify.com/v1/search?query=artist%3Aeminem&type=album&locale=*&offset=20&limit=20",
    offset: 0,
    previous: null,
    total: 87
  }
  {
 
}*/