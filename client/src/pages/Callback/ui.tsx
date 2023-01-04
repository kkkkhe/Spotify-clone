import { $api } from "@/shared/api/http";
import axios from "axios"
import { useEffect, useRef, useState } from "react"

export const Callback = () => {
	// const [token, setToken] = useState()
	const [person, setPerson] = useState('Alice');
	const ref = useRef()
	const code = window.location.href.split('code=')[1]
	const a = false;
	useEffect(() => {
		let ignore = false;
		$api.post('/callback', { code })
			.then(res => {
				if (res.data.access_token) {
					console.log(res.data)
					localStorage.setItem('token', res.data.access_token)
				}
			})
	}, [])
	return (
		<div>

			<div>
				token:
			</div>
		</div>
	)
}