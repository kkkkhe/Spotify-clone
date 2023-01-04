import { Callback } from "@/pages/Callback"
import { Main } from "@/pages/Main"
import { ReactNode } from "react"

export enum AppRoutes {
	MAIN = "main",
	CALLBACK = 'callback',
}


export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.CALLBACK]: '/callback'
}

export const routes: Record<AppRoutes, { Element: ReactNode, path: string }> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		Element: <Main />
	},
	[AppRoutes.CALLBACK]: {
		path: RoutePath.callback,
		Element: <Callback />
	}
}