import { sessionModel } from "@/entities/session"
import { SpotifyIcon } from "@/shared/assets/spotifyIcon"
import { useAction, useAppSelector } from "@/shared/lib/redux-hooks"
import { useEffect } from "react"
export const Authentication = () => {
	const code = window.location.href.split('code=')[1]
	const login = useAction(sessionModel.thunk.sessionThunk)
	const isAuthed = useAppSelector(sessionModel.selector.isAuthed)
	let ignore = false
	useEffect(() => {
		if(code && !ignore){
			login(code)
			ignore = true
		}
	}, [])
	return (
		<div className="w-full h-screen bg-black flex items-center justify-center">
			<div className="flex flex-col items-center">
				<SpotifyIcon />
				<a className="text-white font-semibold bg-green p-3 rounded-[50px] flex items-center justify-center text-[15px]" href={`http://localhost:5000/login`}>
					Login with Spotify
				</a>
			</div>
		</div>
	)
}