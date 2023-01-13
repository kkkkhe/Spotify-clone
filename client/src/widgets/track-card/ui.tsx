import { useGetPlaylistQuery } from "@/shared/api"
import { useParams } from "react-router-dom"

export const TrackCard = ({tracks}:any) => {
	console.log(tracks)
	return (
		<div>
			{tracks?.map(({added_at, track}:any) => {
				return (
					<div key={track.id} className="px-6 py-2 text-gray text-sm grid grid-cols-[25px,6fr,4fr,3fr,minmax(20px,50px)] items-center">
						<span className="text-base">#</span>
						<span>TITLE</span>
						<span>ALBUM</span>
						<span>DATA ADDED</span>
						<span>time</span>
				</div>
				)
			})}
		</div>
	)
}