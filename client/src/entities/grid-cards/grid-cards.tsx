
import { Card } from '@/shared/ui/card'
import { Link } from 'react-router-dom'
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
export const GridCards = <T extends Card,>({data = [], title, elems, link}: {data?: T[], title: string, elems?:number, link:string}) => {
    return (
		<div className=''>
			<div className='flex justify-between items-center'>
				<h2 className="text-[32px] mb-3 font-bold">{title}</h2>
				{data.length > elems! && <Link className='font-semibold text-[13px] hover:underline text-gray' to={`/section/${link.split('/')[1]}`}>SHOW ALL</Link>}
			</div>
			<div style={{gridTemplateColumns: `repeat(${elems}, minmax(150px,230px))`}} className={` grid grid-rows-1 gap-5 gridBox`}>
				{data?.slice(0, elems).map(({name, images, owner: {display_name}}) => {
					return (
						<div key={name}>
							<Card name={name} images={images} info={display_name}/>
						</div>
					)
				})}
			</div>
		</div>
	)
}