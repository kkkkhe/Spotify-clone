import { Header } from '../header'
import './style.css'

export const MainLayout = ({Sidebar, children}:any) => {
	return (
		<div className="h-screen w-full main relative">
				<Sidebar/>
				<Header/>
				<div className='relative children overflow-hidden'>
					<div className='relative flex-1 overscroll-y-auto scrollbar scrollbar-thumb-[#4d4d4d] scrollbar-w-3 h-full'>
						<div className='relative z-10'>
						{children}
						</div>
					</div>
				</div>
			<footer className="footer">
				asd;ofasdf
			</footer>
		</div>
	)
}