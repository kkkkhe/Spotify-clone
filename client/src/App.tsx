import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/config'
import { sessionModel } from './entities/session'
import { useAction } from './shared/lib/redux-hooks'

function App() {
  const checkAuth = useAction(sessionModel.thunk.checkAuth)
  const refreshToken = localStorage.getItem('refreshToken')
  useEffect(() => {
    let ignore = false
    if(localStorage.getItem('token') && !ignore){
      checkAuth(refreshToken)
    }
  }, [])
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <RouterProvider router={router}/>
      </Suspense>
    </>
  )
}
export default App
