import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import store from './utils/store'
import Main from './components/Main'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "watch",
        element: <WatchPage/>
      }
    ]
  }
])

function App() {

  return (
    <>
      <Provider store= {store}>
        <Header/>
        <RouterProvider router={appRouter}/>
      </Provider>
    </>
  )
}

export default App
