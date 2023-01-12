import { Link } from "react-router-dom";

interface Card {
	name: string;
	info: string
	images: {height: number, url:string, width: number}[]
	id: string
	type: string
}


export const Card = ({name, info, images, id, type}:Card) => {
	return (
		<div className="bg-[#181818] rounded-[5px] self-center justify-self-center w-full hover:bg-[#262626] transition-colors duration-150">
		<Link to={`/${type}/${id}`}>
			<div className="p-4 h-full items-start flex-col w-full">
				<div className="aspect-square max-w-[192px] h-auto mb-4 flex flex-col">
					<img className="w-full h-full object-cover rounded-[5px]" src={images[0].url} alt="image" />
				</div>
				<div className="flex flex-col items-start justify-start">
					<h2	 className="text-base font-semibold w-full text-start overflow-hidden overflow-ellipsis whitespace-nowrap mb-1">{name}</h2>
					<p className="text-gray text-sm w-full text-start overflow-hidden overflow-ellipsis whitespace-nowrap">{info}</p>
				</div>
			</div>
		</Link>
	</div>
	)
}