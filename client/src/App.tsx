import { Suspense, useEffect } from 'react'
import { Provider } from 'react-redux'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { routes } from './app/config'
import { WithAuth } from './app/config/protectedRoutes'
import { store } from './app/store'
import { sessionModel } from './entities/session'
import { useAction, useAppSelector } from './shared/lib/redux-hooks'

function App() {
  const checkAuth = useAction(sessionModel.thunk.checkAuth)
  const isAuthed = useAppSelector(sessionModel.selector.isAuthed)
  const refreshToken = localStorage.getItem('refreshToken')
  useEffect(() => {
    if(localStorage.getItem('token') && !isAuthed){
      checkAuth(refreshToken)
    }
  }, [])
  return (
    <div>
          <BrowserRouter>
            <Suspense fallback={<div>loading...</div>}>
              <Routes>
                {Object.values(routes).map(({ path, Element }: any) => {
                  return (
                    <Route path={path} key={path} element={Element} />
                  )
                })}
              </Routes>
            </Suspense>
          </BrowserRouter>
    </div>
  )
}

export default App
