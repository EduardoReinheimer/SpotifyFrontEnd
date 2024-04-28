import { ESearchType } from "@/entities/services/spotify/search/ESearchType";
import { GetBearerToken } from "@/services/spotify/auth/ClientCredentials";
import { SearchForItem } from "@/services/spotify/search/SearchForItem";
import { TTokenResponse } from "@/entities/services/spotify/auth/TTokenResponse";

export default function HomeContainer() {
  const auth = GetBearerToken();
  auth.then((response: TTokenResponse | string) => {
    const data = SearchForItem(
      "Hungria",
      ESearchType.Artist,
      (response as TTokenResponse).access_token
    );
  });

  return (
    <>
      <h1>Aquí va tener busqueda</h1>
    </>
  );
}
