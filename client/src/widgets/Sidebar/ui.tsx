import { SpotifyIcon } from "@/shared/assets/spotifyIcon";
import { SideButton } from "@/shared/ui/buttons";
import { Resizable } from "re-resizable"
import { memo, useState } from "react"
import { bottomActions, topActions } from "./config";
import { Link } from "react-router-dom";
import { PlaylistItem, useGetPersonalPlaylistsQuery } from "@/shared/api";
export const Sidebar = memo(() => {
	const [state, setState] = useState({ width: 300});
	const {data, isFetching} = useGetPersonalPlaylistsQuery({})
	return (
		<Resizable
		className='bg-black hover:border-r-[1px] border-r-[#b1b1b1ab] flex flex-col sidebar'
		size={{ width: state.width, height: '100%'}}
		maxWidth={300}
		minWidth={120}
		maxHeight={'100%'}
		enable={{top: false, bottomLeft: false, right: true}}
		onResizeStop={(e, direction, ref, d) => {
			setState({
			  width: state.width + d.width,
			})}}>
				<div className="px-6 pt-6">
					<Link to='/' className="flex items-center mb-6 gap-1">
						<SpotifyIcon fill="white" length={40}/>
						<h2 className="font-bold text-[25px]">Spotify</h2>
					</Link>
					<div className="pb-3 border-b-[1px] border-[#282828ab]">
						<div className="mb-7 flex flex-col gap-1">
							{topActions.map(({Icon, label, link}) => {
								return <div key={label}>
										<SideButton label={label} Icon={Icon} link={link}/>
									</div>
							})}
						</div>
						<div className="flex flex-col gap-1">
							{bottomActions.map(({Icon, label, link}) => {
								return <div key={label}>
										<SideButton label={label} Icon={Icon} link={link}/> 
									</div>
							})}
						</div>
					</div>
				</div>
				<div className=" scrollbar overflow-x-hidden scrollbar-thumb-[#4d4d4d] scrollbar-w-3">
					<ul className="flex flex-col gap-3 h-[calc(100vh-448px)] px-6 pb-6 pt-3">
					{data?.items.map((playlist:PlaylistItem) => {
						return (
							<Link key={playlist.id} to={`/playlist/${playlist.id}`}  className='text-gray  hover:text-white transition-colors duration-150'>
								<li  className="overflow-hidden font-medium text-sm overflow-ellipsis whitespace-nowrap">
									{playlist.name}
								</li>
							</Link>
						)
					})}
					</ul>
				</div>
	 </Resizable>
	)
})