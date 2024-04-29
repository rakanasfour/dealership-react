import React from "react";
import { Link } from "react-router-dom";
import LandingPageHeader from "components/LandingPageHeader";
const Home = () => {
  return (
    <div className="">
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />

      <h1>Homepage</h1>
    
      <ul>
        <li>
          <Link to="/">LandingPage</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/finance">AboutUs</Link>
        </li>
        <li>
          <Link to="/service">AboutUs</Link>
        </li>
 
        <li>
          <Link to="/contactpage">ContactPage</Link>
        </li>
    
        <li>
          <Link to="/error">Error</Link>
        </li>
       
      
        
      </ul>
    </div>
  );
};
export default Home;
