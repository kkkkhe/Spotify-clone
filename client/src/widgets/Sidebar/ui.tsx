import { SpotifyIcon } from "@/shared/assets/spotifyIcon";
import { SideButton } from "@/shared/ui/buttons";
import { Resizable } from "re-resizable"
import { useEffect, useState } from "react"
import { bottomActions, topActions } from "./config";
import '@/shared/assets/fonts/CircularStdBold.ttf'
import { useLoaderData } from "react-router-dom";
export const Sidebar = () => {
	const [state, setState] = useState({ width: 300});
	const data = useLoaderData()
	useEffect(() => {
		console.log('effect')
	}, [])
	return (
		<Resizable
		className='bg-black hover:border-r-[1px] border-x-gray-300 p-5 flex flex-col'
		size={{ width: state.width, height: '100%'}}
		maxWidth={300}
		minWidth={120}
		enable={{top: false, bottomLeft: false, right: true}}
		onResizeStop={(e, direction, ref, d) => {
			setState({
			  width: state.width + d.width,
			})}}>
				<div className="flex items-center mb-5 gap-1">
					<SpotifyIcon fill="white" length={32}/>
					<h2 className="text-[20px]">Spotify</h2>
				</div>
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
				<div>
					
				</div>
	 </Resizable>
	)
}