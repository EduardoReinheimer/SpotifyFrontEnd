import { stringify } from "querystring";
import axios from "axios";
import { EnvVariables, UrlsConfig } from "@/config/config";
import { TTokenResponse } from "@/entities/services/spotify/auth/TTokenResponse";

export async function GetBearerToken() {
  try {
    let formData = stringify({
      grant_type: "client_credentials",
      client_id: EnvVariables.client_credentials.client_id,
      client_secret: EnvVariables.client_credentials.client_secret,
    });

    let config = {
      maxBodyLength: Infinity,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const { status, data } = await axios.post<TTokenResponse>(
      UrlsConfig.services.spotify.auth.clientCredentials,
      formData
    );

    console.log(JSON.stringify(data, null, 4));

    console.log(status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
