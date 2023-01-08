import { SpotifyIcon } from "@/shared/assets/spotifyIcon";
import { SideButton } from "@/shared/ui/buttons";
import { Resizable } from "re-resizable"
import { useState } from "react"
import { bottomActions, topActions } from "./config";
import '@/shared/assets/fonts/CircularStdBold.ttf'
import '@/shared/assets/fonts/CircularStdBook.ttf'
import { Link } from "react-router-dom";
import { PlaylistItem, useGetPersonalPlaylistsQuery } from "@/shared/api";
export const Sidebar = () => {
	const [state, setState] = useState({ width: 300});
	const {data, isFetching} = useGetPersonalPlaylistsQuery({})
	return (
		<Resizable
		className='bg-black hover:border-r-[1px] border-r-[#b1b1b1ab] flex flex-col sidebar'
		size={{ width: state.width, height: '100%'}}
		maxWidth={300}
		minWidth={120}
		enable={{top: false, bottomLeft: false, right: true}}
		onResizeStop={(e, direction, ref, d) => {
			setState({
			  width: state.width + d.width,
			})}}>
				<div className="px-6 pt-6">
					<Link to='/' className="flex items-center mb-6 gap-1">
						<SpotifyIcon fill="white" length={40}/>
						<h2 className="text-[25px]">Spotify</h2>
					</Link>
					<div className="font-[CircularStdBold] pb-3 border-b-[1px] border-[#282828ab]">
						<div className="mb-7 flex flex-col gap-1">
							{topActions.map(({Icon, label}) => {
								return <div key={label}>
										<SideButton label={label} Icon={Icon}/>
									</div>
							})}
						</div>
						<div className="flex flex-col gap-1">
							{bottomActions.map(({Icon, label}) => {
								return <div key={label}>
										<SideButton label={label} Icon={Icon}/> 
									</div>
							})}
						</div>
					</div>
				</div>
				<div className=" scrollbar overflow-x-hidden scrollbar-thumb-[#4d4d4d] scrollbar-w-3">
					<ul className="flex flex-col gap-3 h-[calc(100vh-448px)] px-6 pb-6 pt-3">
					{data?.items.map((playlist:PlaylistItem) => {
						return (
							<Link to={`/playlist/${playlist.id}`}  className='text-gray font-book text-sm hover:text-white transition-colors duration-150 '>
								<li key={playlist.id} className="overflow-x-hidden overflow-ellipsis whitespace-nowrap">
									{playlist.name}
								</li>
							</Link>
						)
					})}
					</ul>
				</div>
	 </Resizable>
	)
}