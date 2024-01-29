import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="">
      <h1>Homepage</h1>
    
      <ul>
        <li>
          <Link to="/">LandingPage</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
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
