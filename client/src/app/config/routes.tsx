import { Main } from "@/pages/Main"
import { getPlaylists } from "@/shared/api"
import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import { Guard, WithAuth } from "./protectedRoutes"
import { RouteOptions } from "./types"
const Authentication = lazy(() => import('@/pages/Authentication'))
export enum AppRoutes {
	MAIN = "main",
	AUTHENTICATION = 'authentication'
}


export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.AUTHENTICATION]: '/login'
}

export const routes: Record<AppRoutes, RouteOptions> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		Element: <WithAuth><Main /></WithAuth>,
		loader: getPlaylists

	},
	[AppRoutes.AUTHENTICATION]: {
		path: RoutePath.authentication,
		Element: <Guard><Authentication /></Guard>
	}
}

export const router = createBrowserRouter(
	Object.values(routes).map(({path, Element, loader}:RouteOptions) => ({path, element: Element, loader}))
);