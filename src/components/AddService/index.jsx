import React,{ useRef } from "react";

import { Button,Input,Img} from "../../components";

import ImageUpload from "../../components/ImageUpload"


const AddService = (props)=>{


    const idInput= useRef();
    const dateInput= useRef();
    const typeInput= useRef();
    const costInput= useRef();
    const depreciationInput= useRef();
  

    function submitHandler(event){
      /* event and prevent Default just fot the system  */

      event.preventDefault();
      const enteredId= idInput.current.value
      const enteredDate= dateInput.current.value
      const enteredType= typeInput.current.value
      const enteredCost=costInput.current.value
      const enteredDepr=depreciationInput.current.value
   
      
  

      /* we are writing the list in json  */

      const list={

          id:enteredId,
          date:enteredDate,
          type:enteredType,
          cost:enteredCost,
          depreciation:enteredDepr
      
         


      };
      /* we are going to execute the pass function and provid the json list  */
      props.onAdd(list);
  };

    


    return (
        <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-full">
            
                      <Button className="bg-gray-300 cursor-pointer flex-1 font-bold py-3 rounded-[10px] text-center text-gray-900 text-lg w-full">
                        add service
                      </Button>
                      
                    </div>
                    


                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Input
                      id="id" ref={idInput}
                          name="textfieldlarge_One"
                          placeholder="Vehicle Id"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          
                        ></Input>
                        <Input
                        id="date" ref={dateInput}
                          name="textfieldlarge"
                          placeholder="date"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-[5px] h-5 ml-[35px]"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          }
                        ></Input>
                         
                        <Input
                        id="type" ref={typeInput}
                          name="textfieldlarge_One"
                          placeholder="Vehicle Type"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          
                        ></Input>
                         <Input
                       id="cost" ref={costInput}

                          name="textfieldlarge"
                          placeholder="cost"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                       
                        ></Input>
                          <Input
                         id="depreciation" ref={depreciationInput}

                          name="textfieldlarge"
                          placeholder="depreciation"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                       
                        ></Input>
                       

                        
                      </div>
                     
                      <Button onClick={submitHandler} className="bg-gray-900 cursor-pointer font-bold py-[17px] rounded-[10px] text-center text-lg text-white-A700 w-full">
                        Add the new service
                      </Button>


                      
                    </div>
                    

                  

                    
                    
                  </div>
                  
                </div>
                
                


    )


}
export default AddService;