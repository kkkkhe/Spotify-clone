import { getPlaylists, useGetPersonalPlaylistsQuery } from "@/shared/api"
import { MainLayout } from "@/shared/ui/Layouts"
import { Sidebar } from "@/widgets/Sidebar"
import { useEffect } from "react"

export const Main = () => {
	const arr = new Array(300).fill(0)
	const code = window.location.href.split('code=')[1]
	const test = useGetPersonalPlaylistsQuery({})
	return (
		<MainLayout Sidebar={Sidebar}>
			<div>
				{arr.map((item, id) => {
					return (
						<div key={id}>
							{id}
						</div>
					)
				})}
			</div>
		</MainLayout>
	)
}