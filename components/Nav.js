import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Nav=()=>{
    return(
    <nav className='nav-bar'>
        <div className='logo'>
            <Image src="/logo.png" width={110} height={95}/>
        </div>
        <div className='text'>
            <h1>Tikur Tech Blogs</h1>
        </div>
        <div className='links'>
        <Link href="/"><a >Archive</a></Link>
        <Link href="/newBlog"><a >New Blog</a></Link>
        <Link href="/about"><a >About Us</a></Link>
        </div>
        
        <div className='hamburger'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    </nav>
    )
}

export default Nav;