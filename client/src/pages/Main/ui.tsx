import { GridCards } from "@/entities/grid-cards"
import { sessionModel } from "@/entities/session"
import { useGetFeaturedPlaylistsQuery, useGetPersonalPlaylistsQuery } from "@/shared/api"
import { onResize } from "@/shared/lib/on-resize"
import { useAction, useAppSelector } from "@/shared/lib/redux-hooks"
import { MainLayout } from "@/shared/ui/Layouts"
import { Footer } from "@/widgets/Footer"
import { Sidebar } from "@/widgets/Sidebar"
import { useEffect, useState } from "react"
import { useResizeDetector } from "react-resize-detector"




export const Main = () => {
	const [elems, setElems] = useState()
	const {data:personalPlaylists, isLoading: personalLoading} = useGetPersonalPlaylistsQuery({limit: 10})
	const {data:featuredPlaylists, isLoading:featureLoading} = useGetFeaturedPlaylistsQuery({limit:10})
	const test = useAppSelector(sessionModel.selector.test)
	const setTest = useAction(sessionModel.actions.setTest)
	const { width, ref } = useResizeDetector({
		handleHeight: false,
		onResize: (width) => onResize(width, setElems)
	  });
	return (
		<MainLayout Sidebar={Sidebar} Footer={Footer}>
			
			<div ref={ref} className="w-full flex flex-col gap-14 px-8 py-6 max-w-[2100px]">
				<GridCards data={personalPlaylists?.items} title={'Your Playlists'} elems={elems} link={'me/playlists'} isLoading={personalLoading}/>
				<GridCards data={featuredPlaylists?.playlists?.items} title={'Featured Playlists'} elems={elems} link={'browse/featured-playlists'} isLoading={featureLoading}/>
			</div>
		</MainLayout>
	)
}