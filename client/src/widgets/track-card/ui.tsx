import { msToMin } from "@/shared/lib/ms-to-min"
import { PlayTrackButton } from "@/shared/ui/buttons"
import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import './style.css'
const months = ['dec.','jan.', 'feb.', 'mar.', 'apr.', 'may.', 'jul.', 'aug.', 'sep.', 'oct.', 'nov.']
interface TrackCard {
	width?: number
	grids?: string
	track: any
	id:number
	added_at:string
}
export const TrackCard = ({width, grids, track, id,added_at}:TrackCard) => {
	const [hoveredBtn, hover] = useState<boolean>(false)
	return (
		<div>
			<div onMouseEnter={() => hover(true)} onMouseLeave={() => hover(false)} className={`px-6 py-2 w-full hover:bg-[#3a3c3e] rounded-[5px] text-gray text-sm grid ${grids} items-center`}>
				{hoveredBtn ? <span className="pr-5 text-base text-end inline-flex items-center justify-end"><PlayTrackButton/></span> : <span className="text-base text-end pr-5">{id + 1}</span>}
				<div className="flex gap-2 items-center pr-5 text-start">
					<div className="w-10 h-10">
						<img className="w-full h-full" src={track?.album?.images[0].url} alt="" />
					</div>
					<div className="flex flex-col gap-y-1 ">
						<span className="text-white w-full flex gap-1 overflow-hidden text-ellipsis test">{track?.name}</span>
						<span className="flex gap-1 overflow-hidden text-ellipsis test">
							{track?.artists?.map(({name,id}:{name:string,id:string}) => {
								return (
									<Fragment key={id}>
										<Link to={`/artist/${id}`} className='text-[14px] hover:text-white hover:underline after:[&:not(:last-child)]:content-[","]'>
											<span className=''>{name}</span>
										</Link>
									</Fragment>
								)
							})}
						</span>
					</div>
				</div>
				<span className={`overflow-hidden text-ellipsis whitespace-nowrap pr-5 text-start ${(width && width < 536) && 'hidden'}`}>
					<Link className="hover:text-white hover:underline" to={`/album/${track?.album?.id}`}>{track?.album?.name}</Link>
				</span>
				<div className={`gap-1 pr-5 text-start flex ${(width && width < 791) && 'hidden'}`}>
					<span>{new Date('2022-04-03T07:02:34Z').getDate()}</span>
					<span>{months[new Date(added_at).getMonth()]}</span>
					<span>{new Date(added_at).getFullYear()} y.</span>
				</div>
				<span className="text-start">{msToMin(track?.duration_ms)}</span>
			</div>
		</div>
	)
}