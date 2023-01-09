
import './style.css'
interface Card {
	name: string
	images: {
		url: string
		height: number
		width: number
	}[],
	owner:any
}
// TODO SKELETON
export const GridCards = <T extends Card,>({data, title, elems}: {data?: T[], title: string, elems?:number}) => {
    return (
		<div>
			<h2 className="text-[32px] mb-3 font-bold">{title}</h2>
			<div style={{gridTemplateColumns: `repeat(${elems}, minmax(150px,230px))`}} className={` grid grid-rows-1 gap-5 gridBox`}>
				{data?.slice(0, elems).map(({name, images, owner: {display_name}}) => {
					return (
						<button key={name} className="bg-[#181818] rounded-[5px] self-center justify-self-center w-full hover:bg-[#262626] transition-colors duration-150">
							<div className="p-4 h-full items-start flex-col w-full">
								<div className="aspect-square max-w-[192px] h-auto mb-4 flex flex-col items-start">
									<img className="w-full h-full object-cover rounded-[5px]" src={images[0].url} alt="image" />
								</div>
								<div className="flex flex-col items-start justify-start">
									<h2	 className="text-base font-semibold w-full text-start overflow-hidden overflow-ellipsis whitespace-nowrap mb-1">{name}</h2>
									<p className="text-gray text-sm">{display_name}</p>
								</div>
							</div>
						</button>
					)
				})}
			</div>
		</div>
	)
}