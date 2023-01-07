import { sessionModel } from "@/entities/session"
import { SpotifyIcon } from "@/shared/assets/spotifyIcon"
import { useAction, useAppSelector } from "@/shared/lib/redux-hooks"
import { useEffect } from "react"
export const Authentication = () => {
	const code = window.location.href.split('code=')[1]
	const login = useAction(sessionModel.thunk.sessionThunk)
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
				<SpotifyIcon fill="#1DB954" length={150}/>
				<a className="text-white font-semibold bg-green p-3 rounded-[50px] flex items-center justify-center text-[15px]" href={`http://localhost:5000/login`}>
					Login with Spotify
				</a>
			</div>
		</div>
	)
}