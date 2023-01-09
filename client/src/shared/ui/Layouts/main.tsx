import { useLoaderData } from 'react-router-dom'
import { Header } from '../header'
import './style.css'

export const MainLayout = ({Sidebar, children}:any) => {
	// const data = useLoaderData()
	return (
		<div className="h-screen w-full main relative">
				<Sidebar/>
				<Header/>
				<div className='relative children overflow-hidden'>
					<div className='relative flex-1 overscroll-y-auto scrollbar scrollbar-thumb-[#4d4d4d] scrollbar-w-3 h-full'>
						<div className='absolute w-full top-0 right-0 left-0 h-[250px] bg-gradient-to-b from-[#525861] to-[#121212]'></div>
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