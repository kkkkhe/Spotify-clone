export const MainLayout = ({Sidebar, children}:any) => {
	return (
		<div className="h-screen">
			<div className="flex h-full">
				<Sidebar/>
				<div>
					{children}
				</div>
			</div>
		</div>
	)
}