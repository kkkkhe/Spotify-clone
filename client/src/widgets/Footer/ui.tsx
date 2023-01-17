import { useGetCurrentPlayingQuery } from "@/shared/api"

export const Footer = () => {
	const {data} = useGetCurrentPlayingQuery({})
	return (
		<footer className="w-full h-full bg-[#181818] border-t-2 border-[#282828] px-4 flex items-center">
			<div className="flex items-center gap-2">
				<div className="w-[56px] h-[56px] bg-white">
					<img className="w-full" src="" alt="" />
				</div>
				<div className="flex flex-col gap-2 mr-4">
					<span>the thoughts of you</span>
					<span className="text-[13px] text-gray">Scruffpuppie</span>
				</div>
				<span>
					+
				</span>
			</div>
		</footer>
	)
}