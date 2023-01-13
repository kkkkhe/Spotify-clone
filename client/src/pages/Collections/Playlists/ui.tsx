import { useGetFollowedTracksQuery, useGetPersonalPlaylistsQuery } from "@/shared/api"
import { Card } from "@/shared/ui/card"
import { MainLayout } from "@/shared/ui/Layouts"
import { CardSkeleton } from "@/shared/ui/skeleton"
import { Sidebar } from "@/widgets/Sidebar"
import ContentLoader from "react-content-loader"
import { FollowedSkeleton } from "./ui/followed-skeleton"
export const CollectionPlaylists = () => {
	const {personalPlaylists}:any = useGetPersonalPlaylistsQuery({}, {
		selectFromResult: ({data}) => ({
			personalPlaylists: data ?? []
		})
	})
	const {data:followedTracks,isLoading:followedTrackLoading} = useGetFollowedTracksQuery({limit: 7})
	const skeletonArray = new Array(13).fill(0)
	console.log(personalPlaylists?.items?.length)
	return (
		<MainLayout Sidebar={Sidebar}>
			<div>
			<h2 className="text-[32px] mb-3 font-bold">Playlists</h2>
				<div>
					<div className="grid grid-cols-[repeat(auto-fit,minmax(150px,max-content))] gap-5">
						<div className="bg-gradient-to-br from-[#450af5] via-{#450af5} to-[#8d8de5] grid col-span-2 rounded-[5px]">
							<div className="px-5 py-6 flex flex-col">
								<div className="font-medium flex-1 items-end flex">
									<div className="whitespace-normal overflow-hidden ">
										{followedTrackLoading? <FollowedSkeleton/>
										: followedTracks?.items.map(({track}:any) => {
											return (
												<span key={track.id} className="mr-4">
													<span className="relative mr-2 before:content-[''] before:w-1 before:h-1 before:opacity-70 before:bg-white before:rounded-full before:absolute before:top-[9px] before:left-[-10px]">{`${track.artists[0].name}`}</span>
													<span className="relative text-sm max-w-[10px] opacity-70">{track.name}</span>
												</span>
											)
										})}
									</div>
								</div>
								<h1 className="font-bold">Liked Songs</h1>
								{followedTrackLoading? 
								<ContentLoader speed={2} width={360} height={20} viewBox="0 0 360 20" backgroundColor="#7a5cf1" foregroundColor="#919191">
									<rect x="0" y="0" rx="5" ry="5" width="165" height="20" /> 
								</ContentLoader>
								:<p>{followedTracks?.total} liked songs</p>}
							</div>
						</div>
					{!personalPlaylists?.items?.length  ?
						skeletonArray.map((_, id) => {
							return (
								<div key={id}>
									<CardSkeleton/>
								</div>
							)
						})
						:personalPlaylists?.items?.map(({name, owner:{display_name}, images, id, type}:any) => {
							return (
								<div key={id} className='max-w-[230px]'>
									<Card name={name} info={display_name} images={images} id={id} type={type}/>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
