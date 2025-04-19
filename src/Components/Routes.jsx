
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './MainLayout'
import Home from './Pages/Home'
import BookList from './Pages/BookList'
import NotFound from './Pages/NotFound'
import ReadingPage from './Pages/ReadingPage'
import BookDetails from './Pages/BookDetails'
import ListedBooks from './Pages/ListedBooks'
// import { createContext, useEffect, useState } from 'react'
// import { getWishListData } from './LsData'


// const wishlistBtnContext =  createContext();
// const [wishlistBooks, setWishlistBooks] = useState([]);



// useEffect(() =>{
//   const wishlistDataLS = getWishListData();
//   const booksList = [];
//   for(bookId of wishlistBooks) {
//     const findBooks = 
//   }
// },[])





export const router =  createBrowserRouter(
    [
      {
        path: '/',
        Component: MainLayout,
        children: [
          {index: true , element: <Home />  },
          { path: "books" , element: <BookList />},
          { path: "books/:id" , element: <BookDetails />, loader: () => fetch("/booksData.json")},
          { path: "reading-page" , element: <ReadingPage />, loader: () => fetch("/booksData.json")},
          { path: "listed-books", element: <ListedBooks />, loader: () => fetch("/booksData.json")}
        ]
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  )