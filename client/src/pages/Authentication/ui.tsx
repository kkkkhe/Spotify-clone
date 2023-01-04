import { SpotifyIcon } from "@/shared/assets/spotifyIcon"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Authentication = () => {
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