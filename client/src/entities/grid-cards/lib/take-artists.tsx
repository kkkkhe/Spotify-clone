export const takeArtists = (artists:any) => {
	return artists.map(({name}:{name:string}) => {
		return (
			<div>
				{name}
			</div>
		)
	})
}