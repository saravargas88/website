//import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import React , {useState, useEffect} from 'react'

//desing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from './components/Navbar'
//import Preloader from './components/Preloader'
import Home from '@/pages/Home/Home'
import Projects from '@/pages/Projects/Projects'
import About from '@/pages/About/About'
import Resume from "./pages/Resume/Resume"


import ScrollToTop from './pages/ScrollToTop'
import { use } from 'react'


function App() {
  const [load, updateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);



 return (
  <BrowserRouter>
  <Navbar />

  <div
  
  
  
  
  
  </BrowserRouter>




 )
export default App

