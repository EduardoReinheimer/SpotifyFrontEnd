import { ESearchType } from "@/entities/services/spotify/search/ESearchType";
import { SearchByText } from "@/services/spotify/search/searches";

export default function HomeContainer() {
  const data = SearchByText("Hungria", ESearchType.Artist);

  return (
    <>
      <h1>Aquí va tener busqueda</h1>
    </>
  );
}
