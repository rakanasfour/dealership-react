import React from "react";

import { Button, Img, Text } from "components";
import { Link } from 'react-router-dom';

const LandingPageHeader = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Link to="/" className="text-base text-gray-900">
           
              <Img className="h-10 w-10"   src="images/logo.jpg" alt="image" />
              <Text
                className="text-orange-A700 text-xl w-auto"
                size="txtMarkoOneRegular20"
              >
                Dealership
              </Text>
              </Link>
            </div>
            <div className="mobile-menu">
              
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full">
           
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
              <Link to="/" className="text-base text-gray-900">

                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Home
                </Text>
                </Link>
              </div>
              <Link to="/service" className="text-base text-gray-900">
         <Text className="w-auto" size="txtManropeSemiBold16">
                Service 
              </Text>
            </Link>
            <Link to="/finance" className="text-base text-gray-900">
         <Text className="w-auto" size="txtManropeSemiBold16">
                Finance 
              </Text>
            </Link>
             
              <Link to="/contactpage" className="text-base text-gray-900">
         <Text className="w-auto" size="txtManropeSemiBold16">
                Contact us
              </Text>
            </Link>
    
      

          <Link to="/aboutus" className="text-base text-gray-900">
         <Text className="w-auto" size="txtManropeSemiBold16">
                About us
              </Text>
            </Link>

          </div>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[228px]">
            <Button
              className="bg-transparent cursor-pointer flex items-center justify-center min-w-[94px]"
              leftIcon={
                <Img
                  className="h-6 mb-px mr-2"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
            >
              <div className="font-bold font-manrope text-gray-900 text-left text-lg">
                Search
              </div>
            </Button>
            <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full">
              Log in
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
