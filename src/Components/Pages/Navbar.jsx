import React from 'react';
import { NavLink } from 'react-router';
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='max-w-11/12 mx-auto py-4 sm:py-6 lg:py-8'>
           <nav className='flex justify-between items-center gap-4'>
            <h2 className='text-xl sm:text-2xl md:text-[1.75rem] text-[#131313] font-bold'>Book Vibe</h2>
            <div>
            <ul className=' gap-4 sm:gap-4 lg:gap-8 hidden md:flex items-center'>
                <NavLink className='text-[rgba(19,19,19,0.8)]' to={'/'}><li className='text-base lg:text-lg '>Home</li></NavLink>
                <NavLink className='text-[rgba(19,19,19,0.8)]' to={'/books'}><li className='text-base lg:text-lg '>Books</li></NavLink>
                <NavLink className='text-[rgba(19,19,19,0.8)]' to={'/listed-books'}><li className='text-base lg:text-lg'>Listed Books</li></NavLink>
                <NavLink className='text-[rgba(19,19,19,0.8)]' to={'/reading-page'}><li className='text-base lg:text-lg'>Pages to Read</li></NavLink>
            </ul>

            {/* <AlignJustify /> */}
            </div>

            <div className='flex justify-center items-center gap-4'>
            <div className='md:hidden'><AlignJustify /></div>
                <button className='btn'>Sign In</button>
                <button className='btn hidden sm:block'>Sign Up</button>
            </div>
            
            </nav> 

        </div>
    );
};

export default Navbar;