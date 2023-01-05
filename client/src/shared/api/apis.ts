import { $api } from "./http";

export const getToken = async (code: string) => {
  return await $api.post("/", { code });
};

export const refreshToken = async (refreshToken: string) => {
  return await $api.post("/refresh_token", { refreshToken });
};

// .then(res => {
// 	if (res.data.access_token) {
// 		localStorage.setItem('token', res.data.access_token)
// 	}
// })
