import { Callback } from "@/pages/Callback"
import { Main } from "@/pages/Main"
import { getPlaylists } from "@/shared/api"
import { $api } from "@/shared/api/http"
import { lazy } from "react"
import { ReactNode } from "react"
import { createBrowserRouter } from "react-router-dom"
import { Guard, WithAuth } from "./protectedRoutes"
const Authentication = lazy(() => import('@/pages/Authentication'))
export enum AppRoutes {
	MAIN = "main",
	AUTHENTICATION = 'authentication'
}


export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.AUTHENTICATION]: '/login'
}

export const routes: Record<AppRoutes, { Element: ReactNode, path: string }> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		Element: <WithAuth><Main /></WithAuth>
	},
	[AppRoutes.AUTHENTICATION]: {
		path: RoutePath.authentication,
		Element: <Guard><Authentication /></Guard>
	}
}

export const router = createBrowserRouter(Object.values(routes).map(({path, Element, loader}:any) => ({path, element: Element, loader})));