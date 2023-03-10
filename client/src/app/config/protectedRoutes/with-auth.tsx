import { sessionModel } from "@/entities/session";
import { useAppSelector } from "@/shared/lib/redux-hooks";
import { Navigate } from "react-router-dom";

export const WithAuth = ({ children }: any) => {
	const isAuth = useAppSelector(sessionModel.selector.isAuthed)
	if (isAuth) {
		return children
	}
	return <Navigate to={'/login'} />
}