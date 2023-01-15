interface PlaylistPreview {
	url: string
	name: string
	owner: string
	total: number
	type:string
	description?: string
}
export const PlaylistPreview = ({url, name, owner, total, type, description}: PlaylistPreview) => {
	return (
		<div className="flex gap-6 items-end min-h-[340px] bg-gradient-to-b from-[#cedef5] to-[#676f7b] px-8 py-6">
			<div className="min-w-[192px] max-w-[231px] min-h-[192px]">
				<img className="w-full h-full" src={url} alt="cover" />
			</div>
			<div className="font-semibold flex flex-col gap-2 whitespace-nowrap">
				<h3 className="">{type}</h3>
				<h2 className="xl:text-[96px] text-[66px]">{name}</h2>
				<p className="text-sm text-gray">{description}</p>
				<div className="flex relative text-sm gap-2">
					<span>{owner}</span>
					<span>{total} tracks</span>
				</div>
			</div>
		</div>
	)
}