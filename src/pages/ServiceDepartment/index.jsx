
import React, { useState, useEffect } from "react";
import { getService }  from '../../assets/getLink';

import LandingPageHeader from "components/LandingPageHeader";
import LandingPageFooter from "components/LandingPageFooter";
import AddService from "components/AddService";
import ServiceCard from "components/ServiceCard";

const ServiecDepartment=()=>{


  function Add(p){
    /* we add person.json */
    fetch('http://a3a20c65a421e4336a34c1306cc70ffe-400186999.us-east-2.elb.amazonaws.com:8084/api/addService',
    /* we are describing the method is because we are posting */
    {
        method:"POST",
        body:JSON.stringify(p),
        /* this is extra some website required this */
        headers:{
            "Content-Type": "application/json"
        }
    }
    ).then (()=>{
         /*If we clicked save it will take use to this page */
        console.log("OMG it is wokring")
    })
}


    const [services, setIsServices]= useState([]);



  const getAllServices = async () => {
    
    const data = await getService();

    
      const serviceList=[]
for( const key in data){
      
      const serviceProduct = {
        id:key,
        ...data[key]
      };
      serviceList.push(serviceProduct);
    }  
    setIsServices(serviceList);

}


useEffect(() => {
  getAllServices();
 
}, []);


return(
    <div>
<LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />

<AddService onAdd={Add}></AddService>


<div className="flex flex-col items-start justify-start w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {services.map((props, index) => (
                  <React.Fragment key={`services${index}`}>
                    <ServiceCard
                      className="flex flex-1 flex-col h-full items-start justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>

<LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </div>
)

};
export default ServiecDepartment;