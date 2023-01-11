import { useGetPersonalPlaylistsQuery } from "@/shared/api"
import { Card } from "@/shared/ui/card"
import { MainLayout } from "@/shared/ui/Layouts"
import { CardSkeleton } from "@/shared/ui/skeleton"
import { Sidebar } from "@/widgets/Sidebar"
export const CollectionPlaylists = () => {
	const {data, isLoading} = useGetPersonalPlaylistsQuery({})
	const skeletonArray = new Array(13).fill(0)
	return (
		<MainLayout Sidebar={Sidebar}>
			<div>
			<h2 className="text-[32px] mb-3 font-bold">Playlists</h2>
				<div>
					<div className="grid grid- grid-cols-[repeat(auto-fit,minmax(150px,max-content))] gap-5">
					{isLoading?
						skeletonArray.map((_, id) => {
							return (
								<div key={id}>
									<CardSkeleton/>
								</div>
							)
						})
						:data?.items.map(({name, owner:{display_name},id, images}) => {
							return (
								<div key={id} className='max-w-[230px]'>
									<Card name={name} info={display_name} images={images} isLoading={isLoading}/>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</MainLayout>
	)
}