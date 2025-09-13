/*
 

COmponent definition script for scrolling to the top when navigating page 
- This is a helper that makes sure when your router changes pages you are at the top of the new page
- This is used in App.tsx

*/



import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;