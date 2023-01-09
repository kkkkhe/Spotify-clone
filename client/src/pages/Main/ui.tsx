import { GridCards } from "@/entities/grid-cards"
import { useGetPersonalPlaylistsQuery } from "@/shared/api"
import { onResize } from "@/shared/lib/on-resize"
import { MainLayout } from "@/shared/ui/Layouts"
import { Sidebar } from "@/widgets/Sidebar"
import { useCallback, useState } from "react"
import { useResizeDetector } from "react-resize-detector"

export const Main = () => {
	const [elems, setElems] = useState()
	const {data, isLoading} = useGetPersonalPlaylistsQuery({limit: 9})
	  console.log(1983 + 251)
	const { width, ref } = useResizeDetector({
		handleHeight: false,
		onResize: (width) => onResize(width, setElems)
	  });
	return (
		<MainLayout Sidebar={Sidebar}>
			<div ref={ref} className="px-8 py-6 w-full">
				<GridCards data={data?.items} title={'Your Playlists'} elems={elems}/>
			</div>
		</MainLayout>
	)
}