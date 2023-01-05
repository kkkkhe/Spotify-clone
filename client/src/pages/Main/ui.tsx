import { sessionModel } from "@/entities/session";
import { $api } from "@/shared/api/http";
import { useAction } from "@/shared/lib/redux-hooks";
import { useEffect } from "react";

export const Main = () => {
	const onClick = () => {
		console.log('click')
	}
	
	return (
		<div>
			<button onClick={() => onClick()}>
				click
			</button>
		</div>
	)
}