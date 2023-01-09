import { Link } from "react-router-dom"

interface SideButton {
	label: string
	Icon: any
	link: string
}
export const SideButton = ({label, Icon, link}: SideButton) => {
	return (
		<Link to={link} className="flex items-center text-gray text-[14px] gap-3 font-bold w-full py-[6px] hover:text-white transition-colors duration-150">
			<Icon/>
			{label}
		</Link>
	)
}
