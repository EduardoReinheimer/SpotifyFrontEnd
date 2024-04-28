export const UrlsConfig = {
  services: {
    spotify: {
      auth: {
        clientCredentials: "https://accounts.spotify.com/api/token",
      },
      search: {
        searchForItem:
          "https://api.spotify.com/v1/search?q={searchTerms}&type={searchType}",
      },
    },
  },
};

//TODO: Add as env variables
export const EnvVariables = {
  client_credentials: {
    client_id: process.env.SPOTIFY_CLIENT_ID ?? "",
    client_secret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
  },
};
