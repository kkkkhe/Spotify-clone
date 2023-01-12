import { useGetFollowedTracksQuery, useGetPersonalPlaylistsQuery } from "@/shared/api"
import { Card } from "@/shared/ui/card"
import { MainLayout } from "@/shared/ui/Layouts"
import { CardSkeleton } from "@/shared/ui/skeleton"
import { Sidebar } from "@/widgets/Sidebar"
export const CollectionPlaylists = () => {
	const {personalPlaylists}:any = useGetPersonalPlaylistsQuery({}, {
		selectFromResult: ({data}) => ({
			personalPlaylists: data ?? []
		})
	})
	const {data:followedTracks,isLoading:followedTrackLoading} = useGetFollowedTracksQuery({limit: 7})
	const skeletonArray = new Array(13).fill(0)
	return (
		<MainLayout Sidebar={Sidebar}>
			<div>
			<h2 className="text-[32px] mb-3 font-bold">Playlists</h2>
				<div>
					<div className="grid grid-cols-[repeat(auto-fit,minmax(180px,max-content))] gap-5">
						<div className="bg-gradient-to-br from-[#450af5] via-{#450af5} to-[#8d8de5] grid col-span-2 rounded-[5px]">
							<div className="px-5 py-6 flex flex-col">
								<div className="font-medium flex-1 items-center flex">
									<div className="whitespace-normal overflow-hidden ">
										{followedTracks?.items.map(({track}:any) => {
											console.log(track.artists[0].name)
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
								<p>{followedTracks?.total} liked songs</p>
							</div>
						</div>
					{personalPlaylists.length?
						skeletonArray.map((_, id) => {
							return (
								<div key={id}>
									<CardSkeleton/>
								</div>
							)
						})
						:personalPlaylists?.items.map(({name, owner:{display_name}, images, id, type}:any) => {
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