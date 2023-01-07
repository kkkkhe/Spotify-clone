import { SpotifyIcon } from "@/shared/assets/spotifyIcon";
import { SideButton } from "@/shared/ui/buttons";
import { Resizable } from "re-resizable"
import { useState } from "react"
import { bottomActions, topActions } from "./config";
import '@/shared/assets/fonts/CircularStdBold.ttf'
import '@/shared/assets/fonts/CircularStdBook.ttf'
import { Link, useLoaderData } from "react-router-dom";
import { PlaylistItem } from "@/shared/api";
export const Sidebar = () => {
	const [state, setState] = useState({ width: 300});
	const data:any = useLoaderData()
	return (
		<Resizable
		className='bg-black hover:border-r-[1px] border-r-[#b1b1b1ab] p-5 flex flex-col sidebar'
		size={{ width: state.width, height: '100%'}}
		maxWidth={300}
		minWidth={120}
		enable={{top: false, bottomLeft: false, right: true}}
		onResizeStop={(e, direction, ref, d) => {
			setState({
			  width: state.width + d.width,
			})}}>
				<Link to='/' className="flex items-center mb-5 gap-1">
					<SpotifyIcon fill="white" length={32}/>
					<h2 className="text-[20px]">Spotify</h2>
				</Link>
				<div className="font-[CircularStdBold] pb-3 border-b-[1px] border-[#282828ab]">
					<div className="mb-5">
						{topActions.map(({Icon, label}) => {
							return <div key={label}>
								<SideButton label={label} Icon={Icon}/>
							</div>
						})}
					</div>
					{bottomActions.map(({Icon, label}) => {
						return <div key={label}>
								<SideButton label={label} Icon={Icon}/> 
							</div>
					})}
				</div>
				<div className="flex flex-col gap-5 h-[calc(100vh-385px)] pt-3 scrollbar scrollbar-thumb-[#4d4d4d] scrollbar-w-3">
					{data?.items.map((playlist:PlaylistItem) => {
						return (
							<Link to={`/playlist/${playlist.id}`} key={playlist.id} className='text-gray font-book text-sm hover:text-white transition-colors duration-150'>
								{playlist.name}
							</Link>
						)
					})}
				</div>
	 </Resizable>
	)
}