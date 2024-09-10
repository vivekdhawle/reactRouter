import Header from "./header/Header";
import React from 'react'
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout