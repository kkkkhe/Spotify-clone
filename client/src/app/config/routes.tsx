import { CollectionPlaylists } from "@/pages/Collections"
import { Main } from "@/pages/Main"
import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import { Guard, WithAuth } from "./protectedRoutes"
import { RouteOptions } from "./types"

const Authentication = lazy(() => import('@/pages/Authentication'))
const Playlist = lazy(() => import('@/pages/Playlist'))
export enum AppRoutes {
	MAIN = "main",
	AUTHENTICATION = 'authentication',
	COLLECTION_PLAYLISTS = 'collection_playlists',
	Playlist = 'playlist'
}


export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.AUTHENTICATION]: '/login',
	[AppRoutes.COLLECTION_PLAYLISTS]: '/collection/playlists',
	[AppRoutes.Playlist]: '/playlist/:id'
}

export const routes: Record<AppRoutes, RouteOptions> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		Element: <WithAuth><Main /></WithAuth>,

	},
	[AppRoutes.AUTHENTICATION]: {
		path: RoutePath.authentication,
		Element: <Guard><Authentication /></Guard>
	},
	[AppRoutes.COLLECTION_PLAYLISTS]: {
		path: RoutePath.collection_playlists,
		Element: <CollectionPlaylists/>
	},
	[AppRoutes.Playlist]: {
		path: RoutePath.playlist,
		Element: <Playlist/>
	}
}

export const router = createBrowserRouter(
	Object.values(routes).map(({path, Element, loader}:RouteOptions) => ({path, element: Element, loader}))
);