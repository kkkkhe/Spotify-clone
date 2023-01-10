import { ArrowSvg } from "./assets"

export const NavigationButton = ({direction}:{direction: string}) => {
	return (
		<button className={`inline-flex items-center justify-center w-8 h-8 relative rounded-full bg-[#000000b3] ${direction == 'right' && 'rotate-180'}`}>
			<ArrowSvg/>
		</button>
	)
}
