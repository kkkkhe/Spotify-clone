import { useGetCurrentPlayingQuery } from "@/shared/api"
import { RangeInput } from "@/shared/ui/range"
import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import './style.css'
export const Footer = () => {
	const [value, setValue] = useState([0])
	const {data} = useGetCurrentPlayingQuery({})
	console.log(data)
	return (
		<footer className="w-full h-full bg-[#181818] border-t-2 border-[#282828] px-4 flex items-center">
			<div className="flex items-center gap-2 flex-1">
				<div className="w-[56px] h-[56px] bg-white">
					<img className="w-full" src={data?.item?.album?.images[0].url} alt="" />
				</div>
				<div className="flex flex-col gap-2 mr-4">
					<span className="text-[15px]">{data?.item?.name}</span>
					<span className="flex gap-1 overflow-hidden text-ellipsis artists text-[12px] text-gray">
							{data?.item?.artists?.map(({name,id}:{name:string,id:string}) => {
								return (
									<Fragment key={id}>
										<Link to={`/artist/${id}`} className='text-[14px] hover:text-white hover:underline after:[&:not(:last-child)]:content-[","]'>
											<span className=''>{name}</span>
										</Link>
									</Fragment>
								)
							})}
						</span>
				</div>
				<span>
					+
				</span>
			</div>
				<div className="flex-1 flex justify-center">
					<RangeInput max={data?.item?.duration_ms} progress={data?.progress_ms} setValue={setValue} value={value}/>
				</div>
				<div className="flex-1 flex justify-end">
asdfasdf
				</div>
		</footer>
	)
}