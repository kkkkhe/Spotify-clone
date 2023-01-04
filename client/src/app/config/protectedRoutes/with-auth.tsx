import { sessionModel } from "@/entities/session";
import { useAppSelector } from "@/shared/lib/redux-hooks";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const withAuth = ({ children }: PropsWithChildren) => {
	const isAuth = useAppSelector(sessionModel.selector.isAuthed)
	if (isAuth) {
		return children
	}
	return <Navigate to={'/login'} />
}