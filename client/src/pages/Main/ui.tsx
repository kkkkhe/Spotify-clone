import { useGetTasksQuery } from "@/shared/api"
import { MainLayout } from "@/shared/ui/Layouts"
import { Sidebar } from "@/widgets/Sidebar"
import { useLoaderData } from "react-router-dom"

export const Main = () => {
	const arr = new Array(300).fill(0)
	// const data = useLoaderData()
	const code = window.location.href.split('code=')[1]
	const test = useGetTasksQuery({})
	console.log(test)
	return (
		<MainLayout Sidebar={Sidebar}>
			<div>
				{arr.map((item, id) => {
					return (
						<div key={id}>
							{id}
						</div>
					)
				})}
			</div>
		</MainLayout>
	)
}