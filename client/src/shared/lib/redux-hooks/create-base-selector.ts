import { RootState } from "./rootState"

export const createBaseSelector = <T>(rootKey: string) => {
	return (state:RootState) => {
		if(rootKey in state){
			return state[rootKey] as T
		}
		else {
			throw new Error('There is no such reducer')
		}
	}
}