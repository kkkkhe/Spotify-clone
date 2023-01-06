import './style.css'

export const MainLayout = ({Sidebar, children}:any) => {
	return (
		<div className="h-screen w-full main">
			<div className='sidebar'>
				<Sidebar/>
			</div>
				<header className='header'>
					header
				</header>
				<div className='children'>
					{children}
				</div>
			<footer className="footer">
				asd;ofasdf
			</footer>
		</div>
	)
}