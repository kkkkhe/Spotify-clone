import { HomeSvg, LikeSvg, MediaLibrary, PlaylistSvg, SearchSvg } from "./assets";

export const topActions = [
	{label: "Home", Icon: HomeSvg, link: '/'},
	{label: "Search", Icon: SearchSvg, link: '/search'},
	{label: "Your Library", Icon: MediaLibrary, link: '/collection/playlists',}
]

export const bottomActions = [
	{label: "Create Playlist", Icon: PlaylistSvg, link: '/'},
	{label: "Liked Songs", Icon: LikeSvg, link: '/tracks'},
]