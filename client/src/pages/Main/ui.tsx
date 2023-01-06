import { MainLayout } from "@/shared/ui/Layouts"
import { Sidebar } from "@/widgets/Sidebar"

export const Main = () => {
	return (
		<MainLayout Sidebar={Sidebar}>
			<button>
				click
			</button>
		</MainLayout>
	)
}