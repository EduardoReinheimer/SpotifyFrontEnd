//Here will be the requests
import { UrlsConfig } from "@/config/config";
import { ESearchType } from "@/entities/services/spotify/search/ESearchType";
import axios from "axios";

export function SearchForItem(
  searchTerms: string,
  searchType: ESearchType,
  token: string
) {
  let url = UrlsConfig.services.spotify.search.searchForItem
    .replace("{searchTerms}", searchTerms)
    .replace("{searchType}", searchType);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      //FIXME; HARDCODED
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(config)
    .then((response: any) => {
      console.log(JSON.stringify(response?.data));
    })
    .catch((error: any) => {
      console.log(error);
    });
}
