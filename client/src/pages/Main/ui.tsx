import { GridCards } from "@/entities/grid-cards"
import { useGetFeaturedPlaylistsQuery, useGetPersonalPlaylistsQuery } from "@/shared/api"
import { onResize } from "@/shared/lib/on-resize"
import { MainLayout } from "@/shared/ui/Layouts"
import { Sidebar } from "@/widgets/Sidebar"
import { useState } from "react"
import { useResizeDetector } from "react-resize-detector"




export const Main = () => {
	const [elems, setElems] = useState()
	const {data:personalPlaylists, isLoading: personalLoading} = useGetPersonalPlaylistsQuery({limit: 10})
	const {data:featuredPlaylists, isLoading:featureLoading} = useGetFeaturedPlaylistsQuery({limit:10})
	const { width, ref } = useResizeDetector({
		handleHeight: false,
		onResize: (width) => onResize(width, setElems)
	  });
	return (
		<MainLayout Sidebar={Sidebar}>
			<div ref={ref} className="w-full flex flex-col gap-14 px-8 py-6 max-w-[2100px]">
				<GridCards data={personalPlaylists?.items} title={'Your Playlists'} elems={elems} link={'me/playlists'} isLoading={personalLoading}/>
				<GridCards data={featuredPlaylists?.playlists?.items} title={'Featured Playlists'} elems={elems} link={'browse/featured-playlists'} isLoading={featureLoading}/>
			</div>
		</MainLayout>
	)
}