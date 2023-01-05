import { $api } from "@/shared/api/http";
import { useEffect, useRef, useState } from "react"

export const Callback = () => {
	// const [token, setToken] = useState()
	const [person, setPerson] = useState('Alice');
	const ref = useRef()
	const code = window.location.href.split('code=')[1]
	const a = false;
	useEffect(() => {
		let ignore = false;

	}, [])
	return (
		<div>

			<div>
				token:
			</div>
		</div>
	)
}