import { GridCards } from "@/entities/grid-cards"
import { useGetFeaturedPlaylistsQuery, useGetPersonalPlaylistsQuery } from "@/shared/api"
import { onResize } from "@/shared/lib/on-resize"
import { MainLayout } from "@/shared/ui/Layouts"
import { Sidebar } from "@/widgets/Sidebar"
import { useState } from "react"
import { useResizeDetector } from "react-resize-detector"

export const Main = () => {
	const [elems, setElems] = useState()
	const {data:personalPlaylists, isLoading} = useGetPersonalPlaylistsQuery({limit: 9})
	const {data:featuredPlaylists} = useGetFeaturedPlaylistsQuery({limit:9})
	console.log(personalPlaylists)
	const { width, ref } = useResizeDetector({
		handleHeight: false,
		onResize: (width) => onResize(width, setElems)
	  });
	return (
		<MainLayout Sidebar={Sidebar}>
			<div ref={ref} className="px-8 py-6 w-full flex flex-col gap-14">
				<GridCards data={personalPlaylists?.items} title={'Your Playlists'} elems={elems}/>
				<GridCards data={featuredPlaylists?.playlists?.items} title={'Featured Playlists'} elems={elems}/>
			</div>
		</MainLayout>
	)
}