import { Suspense, useEffect } from 'react'
import { Route, Routes, BrowserRouter, RouterProvider } from 'react-router-dom'
import { router, routes } from './app/config'
import { sessionModel } from './entities/session'
import { useAction, useAppSelector } from './shared/lib/redux-hooks'
import './shared/assets/fonts/CircularMedium.ttf';
function App() {
  const checkAuth = useAction(sessionModel.thunk.checkAuth)
  const isAuthed = useAppSelector(sessionModel.selector.isAuthed)
  const refreshToken = localStorage.getItem('refreshToken')
  useEffect(() => {
    if(localStorage.getItem('token')){
      checkAuth(refreshToken)
    }
  }, [])
  return (
      <Suspense fallback={<div>loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
  )
}

export default App
