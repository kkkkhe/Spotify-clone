import { useGetPlaylistQuery } from "@/shared/api"
import { PlayButton } from "@/shared/ui/buttons"
import { MainLayout } from "@/shared/ui/Layouts"
import { PlaylistPreview } from "@/widgets/playlist-preview"
import { Sidebar } from "@/widgets/Sidebar"
import { TrackCard } from "@/widgets/track-card"
import { Fragment, useState } from "react"
import { useResizeDetector } from "react-resize-detector"
import { useLocation, useParams } from "react-router-dom"
import { WatchSvg } from "./assets"
import { onTrackResize } from "./lib"

const Playlist = () => {
	const {id} = useParams()
	const [grids, setGrids] = useState<string>()
	const {data: playlist, isLoading} = useGetPlaylistQuery({playlist_id:id})
	const { width, ref } = useResizeDetector({
		handleHeight: false,
		onResize: (width) => onTrackResize(width, setGrids)
	  });
	return (
		<MainLayout Sidebar={Sidebar}>
			<PlaylistPreview url={playlist?.images[0].url}
			name={playlist?.name}
			owner={playlist?.owner.display_name}
			total={playlist?.tracks.total}
			type={playlist?.type}
			description={playlist?.description}
			/>
			<div className="relative px-8 py-6 before:content-[''] before:-z-[1] before:w-full before:h-[200px] before:bg-gradient-to-b before:from-[#515861] before:to-[#121212] before:absolute before:left-0 before:top-0">
				<div className="mb-4">
					<PlayButton size={56}/>
				</div>
				<div ref={ref} className="border-b-[1px] border-white border-opacity-50 mb-5 max-w-[2100px]">
					<div className={`px-6 py-2 text-gray text-sm grid ${grids} items-center`}>
						<span className="text-base text-end pr-5">#</span>
						<span className="">TITLE</span>
						<span className={`${(width && width < 536) && 'hidden'}`}>ALBUM</span>
						<span className={`${(width && width < 791) && 'hidden'}`}>DATA ADDED</span>
						<span><WatchSvg/></span>
					</div>
				</div>
				<div className="max-w-[2100px]">
					{playlist?.tracks?.items.map(({added_at, track}:any, id:number) => {
						return (
							<Fragment key={id}>
								<TrackCard width={width} grids={grids} added_at={added_at} id={id} track={track}/>
							</Fragment>
						)
					})}
				</div>
			</div>
		</MainLayout>
	)
}

export default Playlist