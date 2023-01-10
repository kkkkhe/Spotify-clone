import { NavigationButton } from "../buttons/navigation-button"

export const Header = () => {
	return (
		<header className="header w-full bg-[#070707] flex items-center px-9">
			<div>
				<div className="flex gap-2">
					<NavigationButton direction="left"/>
					<NavigationButton direction="right"/>
				</div>
			</div>
		</header>
	)
}