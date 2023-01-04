import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { routes } from './app/config'
import { store } from './app/store'

function App() {
  return (
    <div>
      <Provider store={store}>
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
      </Provider>
    </div>
  )
}

export default App
