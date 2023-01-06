interface SideButton {
	label: string
	Icon: any
}
export const SideButton = ({label, Icon}: SideButton) => {
	return (
		<button className="flex items-center text-gray text-[13px] gap-3 font-thin w-full py-[6px] hover:text-white transition-colors duration-150">
			<Icon/>
			{label}
		</button>
	)
}
