import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function Footer(){
    return(
        <>
            <footer className='  w-full h-60 flex items-center  border-y'>
                <div className='flex gap-80 justify-center items-center  sticky w-full '>
                    <div >
                    <Link to="#">
                            <span className='text-gray-600 text-5xl font-bold '>your</span>
                            <span className='text-red-500 text-5xl font-bold'>Logo</span>
                        </Link>
                    </div>
                    <div className='flex gap-20 justify-center items-center'>
                        <ul >
                            <li className='font-semibold text-xl m-2'>Resources</li>
                            <li >
                                <NavLink to="/" className={({isActive})=>` m-2  flex-col  ${isActive ?"text-orange-700 font-bold" : "text-gray-700"}`}>Home</NavLink>
                            </li>
                            <li ><NavLink to="/about" className={({isActive})=>` m-2  flex-col  ${isActive ?"text-orange-700 font-bold" : "text-gray-700"}`}>About</NavLink></li>
                        </ul>
                        <ul >
                            <li className='font-semibold m-2 text-xl'>Follow Us</li>
                            <li className=' m-2  text-gray-500'>GitHub</li>
                            <li className=' m-2  text-gray-500'>Discord</li>
                        </ul>
                        <ul>
                            <li className='font-semibold m-2 text-xl flex-col'>Legal</li>
                            <li className=' m-2  text-gray-500'>Privacy Policy</li>
                            <li className=' m-2  text-gray-500'>Terms & Conditon</li>
                        </ul>

                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer