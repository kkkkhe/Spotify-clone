export const PlayButton = ({size}:{size:number}) => {
	return (
		<button className={`flex items-center justify-center w-[56px] h-[56px] bg-green rounded-full`}>
			<svg role="img" height="28" width="28" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
		</button>
	)
}