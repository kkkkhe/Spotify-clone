import { Callback } from "@/pages/Callback"
import { Main } from "@/pages/Main"
import { lazy } from "react"
import { ReactNode } from "react"
import { Guard, WithAuth } from "./protectedRoutes"
const Authentication = lazy(() => import('@/pages/Authentication'))
export enum AppRoutes {
	MAIN = "main",
	CALLBACK = 'callback',
	AUTHENTICATION = 'authentication'
}


export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.CALLBACK]: '/callback',
	[AppRoutes.AUTHENTICATION]: '/login'
}
//<WithAuth><Main /></WithAuth>
export const routes: Record<AppRoutes, { Element: ReactNode, path: string }> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		Element: <WithAuth><Main /></WithAuth>
	},
	[AppRoutes.CALLBACK]: {
		path: RoutePath.callback,
		Element: <WithAuth><Callback /></WithAuth>
	},
	[AppRoutes.AUTHENTICATION]: {
		path: RoutePath.authentication,
		Element: <Guard><Authentication /></Guard>
	}
}