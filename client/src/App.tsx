import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { routes } from './app/config'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {Object.values(routes).map(({ path, Element }: any) => {
            return (
              <Route path={path} key={path} element={Element} />
            )
          })}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
