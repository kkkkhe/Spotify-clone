export interface BaseAuthResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

export type PlaylistResponse = {
  href: string;
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
  items: PlaylistItem[];
};

interface PlaylistItem {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  owner: Owner;
  primary_color: any;
  public: boolean;
  snapshot_id: string;
  tracks: { href: string; total: number };
  type: string;
  uri: string;
}

interface Owner {
  display_name: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  type: string;
  uri: string;
}
