import { getPlaylists } from "@/shared/api"
import { MainLayout } from "@/shared/ui/Layouts"
import { Sidebar } from "@/widgets/Sidebar"
import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

export const Main = () => {
	// useEffect(() => {
	// 	getPlaylists()
	// }, [])
	const data = useLoaderData()
	console.log(data)
	// console.log(data)
	return (
		<MainLayout Sidebar={Sidebar}>
			<button>
				click
			</button>
		</MainLayout>
	)
}