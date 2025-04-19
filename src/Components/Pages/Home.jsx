
import { useEffect, useState } from 'react';
import Banner from './Banner';
import BookList from './BookList';

const Home = () => {

    const [books, setBooks] = useState([])

    useEffect(() =>{
        fetch("booksData.json").then(res => res.json()).then(data => setBooks(data))
    },[]);


    return (
        <div className='max-w-11/12 mx-auto'>
            <Banner />
            <BookList books={books} />

        </div>
    );
};

export default Home;