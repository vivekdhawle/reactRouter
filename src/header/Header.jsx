import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Header(){


    return(
        <>
           <header className='flex  items-center w-full shadow sticky z-50 top-0 h-16'>
                <nav className='flex  items-center w-full'>
                    <div className='flex justify-between px-8 items-center order-1 w-full'>
                        <Link to="#">
                            <span className='text-gray-600 text-3xl font-bold '>your</span>
                            <span className='text-red-500 text-3xl font-bold'>Logo</span>
                        </Link>

                        <div className='flex gap-10 order-3 items-center '>
                            <NavLink to="/login" className={({isActive})=> `duration-200 ${isActive ? "text-orange-700 font-bold" : "text-gray-700"} `}>Login</NavLink>
                            <Link to="#" className='text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2'>Get Started</Link>
                        </div>

                        <div className='flex order-2 items-center'>
                            <ul className='flex gap-16 items-center'>
                                <li>
                                    <NavLink to='/'className={({isActive})=>` duration-200 ${isActive ? "text-orange-700 font-bold" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about' className={({isActive})=>` duration-200 ${isActive ? "text-orange-700 font-bold" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/github' className={({isActive})=>` duration-200 ${isActive ? "text-orange-700 font-bold" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>GitHUB</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' className={({isActive})=>` duration-200 ${isActive ? "text-orange-700 font-bold" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/User' className={({isActive})=>` duration-200 ${isActive ? "text-orange-700 font-bold" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>User</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
           </header>
        </>
    )
}
export default Header