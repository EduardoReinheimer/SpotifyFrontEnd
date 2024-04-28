//Here will be the requests
import { AppConfig } from "@/config/config";
import { ESearchType } from "@/entities/services/spotify/search/ESearchType";
import axios from "axios";

export function SearchByText(searchTerms: string, searchType: ESearchType) {
  let url = AppConfig.services.spotify.search
    .replace("{searchTerms}", searchTerms)
    .replace("{searchType}", searchType);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url,
    headers: {
    //FIXME; HARDCODED
      Authorization:
        "Bearer BQCOVEyQLWZNCb60wh2JRTgWmFhaNOY4ACrPW-wneZXgSg92MMQDb1XE537xVsHpaLqZhNgGwBf0lnCGqKTlPVm35hOubM8_bpLuz_drfaTPOmpxBqA",
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
