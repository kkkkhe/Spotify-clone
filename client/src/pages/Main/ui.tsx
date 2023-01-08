import { GridCards } from "@/entities/grid-cards"
import { useGetPersonalPlaylistsQuery } from "@/shared/api"
import { MainLayout } from "@/shared/ui/Layouts"
import { Sidebar } from "@/widgets/Sidebar"

export const Main = () => {
	const arr = new Array(300).fill(0)
	const {data, isLoading} = useGetPersonalPlaylistsQuery({limit: 4})
	return (
		<MainLayout Sidebar={Sidebar}>
			<div className="px-8 py-6">
				<GridCards data={data?.items} title={'Your Playlists'}/>
			</div>
		</MainLayout>
	)
}