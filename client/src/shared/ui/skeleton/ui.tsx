import ContentLoader from "react-content-loader";

export const CardSkeleton = () => (
	<div className="bg-[#181818] rounded-[5px] self-center justify-self-center w-full flex justify-center items-center">
		<ContentLoader 
	  speed={2}
	  className='p-1'
	  width={180}
	  height={240}
	  viewBox="0 0 180 240"
	  backgroundColor="#333333"
	  foregroundColor="#565656"
	>
	  <rect x="9" y="5" rx="5" ry="5" width="160" height="160" /> 
	  <rect x="9" y="176" rx="14" ry="14" width="145" height="28" /> 
	  <rect x="9" y="212" rx="11" ry="11" width="106" height="21" /> 
	</ContentLoader>
</div>
  )