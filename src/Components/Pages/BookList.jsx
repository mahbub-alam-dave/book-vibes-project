
import Book from './Book';



const BookList = ({books}) => {



    return (
        <div className='mt-12'>
            <h2 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#000000]'>Books</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-10 justify-items-center justify-self-center'>
            {
                books.map(book => <Book key={book.bookId}
                                            book={book}
                                            ></Book>)
            }
            
        </div>
        </div>
    );
};

export default BookList;