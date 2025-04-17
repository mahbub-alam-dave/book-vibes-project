import React from 'react';
import Banner from './Banner';
import BookList from './BookList';

const Home = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Banner />
            <BookList />
        </div>
    );
};

export default Home;