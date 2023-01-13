import { useGetPlaylistQuery } from "@/shared/api"
import { PlayButton } from "@/shared/ui/buttons"
import { MainLayout } from "@/shared/ui/Layouts"
import { PlaylistPreview } from "@/widgets/playlist-preview"
import { Sidebar } from "@/widgets/Sidebar"
import { useLocation, useParams } from "react-router-dom"
import { WatchSvg } from "./assets"

const Playlist = () => {
	const {id} = useParams()
	const {data: playlist, isLoading} = useGetPlaylistQuery({playlist_id:id, limit: 25})
	console.log(playlist)
	return (
		<MainLayout Sidebar={Sidebar}>
			<PlaylistPreview url={playlist?.images[0].url}
			name={playlist?.name}
			owner={playlist?.owner.display_name}
			total={playlist?.tracks.total}
			type={playlist?.type}
			description={playlist?.description}
			/>
			<div className="h-[1000px] relative px-8 py-6 before:content-[''] before:-z-[1] before:w-full before:h-[200px] before:bg-gradient-to-b before:from-[#515861] before:to-[#1b1c1d] before:absolute before:left-0 before:top-0">
				<div className="mb-4">
					<PlayButton size={56}/>
				</div>
				<div className="border-b-[1px] border-white border-opacity-50 mb-5">
					<div className="px-6 py-2 text-gray text-sm grid grid-cols-[25px,6fr,4fr,3fr,minmax(20px,50px)] items-center">
						<span className="text-base">#</span>
						<span>TITLE</span>
						<span>ALBUM</span>
						<span>DATA ADDED</span>
						<span><WatchSvg/></span>
					</div>
				</div>
				
			</div>
		</MainLayout>
	)
}

export default Playlist