export interface RootObject {
  artists: Artists;
}

export interface Artists {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface Item {
  external_urls: Externalurls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Followers {
  href?: any;
  total: number;
}

export interface Externalurls {
  spotify: string;
}
