
import { useLoaderData, useParams } from 'react-router';
import { addItemToWishlist, addToReadList } from '../LsData';




const BookDetails = () => {


    const allBooks = useLoaderData();
    const id = useParams().id;
    // console.log(id)
    // console.log(allBooks)
    const searchBook = allBooks.find(book => book.bookId === parseInt(id));
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = searchBook


    const handleWishlistBooks = (bookId) => {
        console.log("wishlist btn clicked");
        addItemToWishlist(bookId);
      }

    const handleAddReadBooksToReadList = (bookId) => {
        console.log("Add to Read list btn clicked")
        addToReadList(bookId)
    }

    return (
        <div className='flex flex-col md:flex-row gap-4 lg:gap-8 mt-12 p-4 justify-center items-stretch max-w-11/12 w-full mx-auto'>
            <div className='max-w-[600px] w-full flex-1 flex justify-center p-4  lg:p-8 bg-gray-100 rounded-2xl'>
                <img className='max-w-[400px] w-full h-auto' src={image} alt="" />
            </div>
            <div className='flex gap-4 flex-col flex-1'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#131313]'>{bookName}</h1>
                <span className='text-base sm:text-lg md:text-lg font-medium text-[rgba(19,19,19,0.8)]'>By: {author}</span>
                <div className='py-4 border-y border-[rgba(19,19,19,0.15)]'>
                    <h2 className='text-base sm:text-lg md:text-lg font-medium text-[rgba(19,19,19,0.8)]'>{category}</h2></div>
                    <span className='text-base sm:text-lg md:text-lg font-medium text-[rgba(19,19,19,0.8)]'><span className='font-bold text-[#131313]'>Review:</span> {review}</span>
                <div className='flex gap-4 items-center border-b border-[rgba(19,19,19,0.15)] pb-4'>
                    <h3 className='font-bold '>Tag</h3>
                    {
                        tags.map((tag,index) => {
                            return(
                                <button key={index} className='btn text-[#23BE0A] text-base font-medium'>#{tag}</button>
                            )
                        } )
                    }
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td className='text-base leading-[26px] text-[rgba(19,19,19,0.7)]'>Number of Pages:</td>
                            <td className='font-bold'>{totalPages}</td>
                        </tr>
                        <tr>
                            <td className='text-base leading-[26px] text-[rgba(19,19,19,0.7)]'>Publisher: </td>
                            <td className='font-bold'>{publisher}</td>
                        </tr>
                        <tr>
                            <td className='text-base leading-[26px] text-[rgba(19,19,19,0.7)]'>Year of Publishing:</td>
                            <td className='font-bold'>{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className='text-base leading-[26px] text-[rgba(19,19,19,0.7)]'>Rating:</td>
                            <td className='font-bold'>{rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex gap-4'>
                    <button onClick={() =>handleAddReadBooksToReadList(bookId)} className="btn btn-outline text-base md:text-lg font-semibold text-[#131313]">Read</button>
                    <button onClick={() =>handleWishlistBooks(bookId)} className="btn btn-success text-base md:text-lg font-semibold text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;