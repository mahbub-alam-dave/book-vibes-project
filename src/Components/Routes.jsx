
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './MainLayout'
import Home from './Pages/Home'
import BookList from './Pages/BookList'
import NotFound from './Pages/NotFound'
import ReadingPage from './Pages/ReadingPage'

export const router =  createBrowserRouter(
    [
      {
        path: '/',
        Component: MainLayout,
        children: [
          {index: true , element: <Home />},
          { path: "books" , element: <BookList />},
          { path: "reading-page" , element: <ReadingPage />}
        ]
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  )