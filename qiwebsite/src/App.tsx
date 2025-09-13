/*

App.tsx 
- Main component of the site contains ROUTER and components like NAVBAR and FOOTER
- Router contains links to other pages 



*/ 



import './App.css'
import {BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import React , {useState, useEffect, use} from 'react'

//design bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from '@/pages/Footer'
import Navbar from '@/pages/Navbar'


import Home from '@/pages/Home/Home'
import Projects from '@/pages/Projects/Projects'
import About from '@/pages/About/About'
import Resume from "@/pages/Resume/Resume"
import Contact from "@/pages/Contact/Contact"

import ScrollToTop from '@/pages/ScrollToTop'

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}



 
export default App;