import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router';
import { getReadBooksData, getWishListData } from '../LsData';
import WishlistBooks from './WishlistBooks';
import ReadListBooks from './ReadListBooks';


const ListedBooks = () => {


  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [readListBooks, setReadListBooks] = useState([]);
  const [sortType, setSortType] = useState("");
  // const [sortData, setSortData] = useState(false);
  const [activeTab, setActiveTab] = useState('1')
  const allBooks =  useLoaderData();
  // console.log(allBooks);

/*   useEffect(() => {
    const savedData = getWishListData();
    const wishlistBooks = [];
    for(const books of savedData) {
      const searchMatchBook = allBooks.find(book => book.bookId === books.bookId);
      wishlistBooks.push(searchMatchBook);

    }
    setWishlistBooks(wishlistBooks)
  },[allBooks]) */

  useEffect(()=>{
    const savedLsData = getWishListData();
    const searchedBooks = savedLsData.map(book => book.bookId)
    const booksList = allBooks.filter(book => searchedBooks.includes(book.bookId))
    setWishlistBooks(booksList)
  },[allBooks]);

    useEffect(()=>{
    const savedReadListData = getReadBooksData();
    const searchedReadBooks = savedReadListData.map(readBook => allBooks.find(book => book.bookId === readBook.bookId))
    setReadListBooks(searchedReadBooks)
  },[allBooks])

const sortByPages = (type) => {
  setSortType(type);
  console.log(activeTab)
  if(activeTab === "1"){
    if(type === "pages") {
      const  newReadListBooks = [...readListBooks].sort((a,b) =>a.totalPages - b.totalPages)
      setReadListBooks(newReadListBooks)
    }
  }

  else {
    const newWishlistBooks = [...wishlistBooks].sort((a,b)=>a.totalPages -b.totalPages)
    setWishlistBooks(newWishlistBooks)
  }

}

const sortByRatings = (type) => {
  setSortType(type)
  if(activeTab === "1") {
    if(type === "ratings") {
      const newReadListBooks = [...readListBooks].sort((a,b)=> a.rating - b.rating);
      setReadListBooks(newReadListBooks)
    }
  }

  else {
    const newWishlistBooks = [...wishlistBooks].sort((a,b) => a.rating - b.rating);
    setWishlistBooks(newWishlistBooks)
  }
}

const tabOne = (one) => {
  setActiveTab(one)
}
const tabTwo = (two) => {
  setActiveTab(two)
}

    return (
        <div className='max-w-11/12 w-full mx-auto mt-12 flex flex-col gap-8'>
            <div className='bg-gray-100 rounded-2xl p-8 flex justify-center items-center'>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#131313]'>Books</h2>
            </div>
{/*             <div className='flex justify-center items-center'>
                <button className="flex rounded-lg gap-2 items-center text-base sm:text-lg text-white font-semibold bg-[#23BE0A] p-4">Sort By <ChevronDown /></button>
            </div> */}
            <div className="dropdown dropdown-hover flex justify-center items-center">
           <div tabIndex={0} role="button" className="btn m-1 btn-active bg-[#23BE0A] text-white text-base sm:text-lg">Sort by: {sortType ? sortType : ""}</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
             <li onClick={()=>sortByPages("pages")}><a className='font-medium text-base sm:text-lg'>Price</a></li>
             <li onClick={()=>sortByRatings("ratings")}><a className='font-medium text-base sm:text-lg'>Rating</a></li>
          </ul>
          </div>
            
  <Tabs>
    <TabList>
      <Tab onClick={() =>tabOne("1")} id='tab1'>Read Books</Tab>
      <Tab onClick={() =>tabTwo("2")} id='tab2'>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <div>
        {
          readListBooks.map(readListBook => <ReadListBooks key={readListBook.bookId}
                                                           readListBook={readListBook} />)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <div>
        {
          wishlistBooks.map(wishlistBook => <WishlistBooks key={wishlistBook.bookId}
                                                           wishlistBook={wishlistBook} />)
        }
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;