
import { Card } from '@/shared/ui/card'
import { CardSkeleton } from '@/shared/ui/skeleton'
import { Link } from 'react-router-dom'
import './style.css'
interface Card {
	name: string
	images: {
		url: string
		height: number
		width: number
	}[],
	id:string
	owner?:any
	type: string
}
// TODO SKELETON
export const GridCards = <T extends Card,>({data = [], title, elems, link, isLoading}:
	{data?: T[],
	title:string,
	elems?:number,
	isLoading: boolean
	link:string}
	) => {
		const skeletArr = new Array(elems).fill(0)
    return (
		<div className=''>
			<div className='flex justify-between items-center'>
				<h2 className="text-[32px] mb-3 font-bold">{title}</h2>
				{data.length > elems! && <Link className='font-semibold text-[13px] hover:underline text-gray' to={`/section/${link.split('/')[1]}`}>SHOW ALL</Link>}
			</div>
			<div className={`grid grid-rows-1 grid-cols-[repeat(auto-fit,minmax(150px,max-content))] gap-5 gridBox`}>
				{isLoading?
				skeletArr.map((_,id) => {
					return (
						<div key={id}>
							<CardSkeleton/>
						</div>
					)
				})
				: data?.slice(0, elems).map(({name, images, owner, id, type}) => {
					return (
						<div key={id}>
							<Card name={name} images={images} info={owner.display_name} id={id} type={type}/>
						</div>
					)
				})
			}
			</div>
		</div>
	)
}