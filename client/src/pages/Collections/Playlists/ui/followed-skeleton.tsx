import ContentLoader from "react-content-loader"

export const FollowedSkeleton = () => {
	return (
		<ContentLoader 
		speed={2}
		width={360}
		height={100}
		viewBox="0 0 360 120"
		backgroundColor="#7a5cf1"
		foregroundColor="#919191"
	  >
		<rect x="0" y="48" rx="5" ry="5" width="332" height="15" /> 
		<rect x="0" y="75" rx="5" ry="5" width="332" height="15" /> 
		<rect x="0" y="101" rx="5" ry="5" width="332" height="15" />
	  </ContentLoader>
	)
}