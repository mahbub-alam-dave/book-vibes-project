const getWishListData = () => {
    const wishlistData = localStorage.getItem("wishlist");
    if(wishlistData) {
        const wishlistBooks = JSON.parse(wishlistData)
        return wishlistBooks;
    }
    else return [];
}

const setBooksToLS = (books) => {
    // const wishlistBooks = getWishListData();
    const stringifyBooks =  JSON.stringify(books)
    localStorage.setItem("wishlist", stringifyBooks)
};

const addItemToWishlist = (id) => {
    console.log(typeof id)
    const wishlistBooks = getWishListData();
    const findBooks = wishlistBooks.find(book => book.bookId ===  id);
    console.log(findBooks)
    if(findBooks === undefined) {
        wishlistBooks.push({bookId: id})
        setBooksToLS(wishlistBooks)
    }

    else {
        window.alert("You have already added this book to whitelist !!")
    };
}

const getReadBooksData = () => {
    const readListData = localStorage.getItem("readList");
    if(readListData) {
        const readListBooks = JSON.parse(readListData);
        return readListBooks;
    }
    else return []
}

const setReadListData = (newReadBook) => {
    const readListBook = JSON.stringify(newReadBook);
    localStorage.setItem("readList", readListBook);
    
}

const addToReadList = (bookId) => {
    console.log(bookId)
    const readListBooks = getReadBooksData();
    const searchReadBook = readListBooks.find(readBook => readBook.bookId === bookId);
    console.log(searchReadBook)
    if(!searchReadBook) {
        const newReadBookList = [...readListBooks, {bookId: bookId}];
        setReadListData(newReadBookList);
    }

    else {
        window.alert("you have already added this book to mark as read");
        return
    }
}

export { getWishListData, addItemToWishlist, getReadBooksData, addToReadList }