import React from "react";


import { Button, Img, Input, SelectBox, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";

const AboutUsPage = () => {
  return (
    <>
    <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[111px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
      <div className="flex flex-col font-manrope items-start justify-start pl-[120px] pr-[324px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-10 items-start justify-start w-full">
        <Text
     className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full text-center"
       size="txtManropeExtraBold36"
          >
             About the Dealership Project
              </Text>
          <div className="flex flex-col md:gap-10 gap-[84px] items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-4 items-end justify-between w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-[550px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/towerofcars.jpg"
                  alt="rectangle5618"
                />
                <Text
                  className="leading-[180.00%] text-gray-600 text-lg"
                  size="txtManropeRegular18Gray600"
                >
                  <>
                  Welcome to our state-of-the-art dealership website, meticulously crafted with
                   inspiration drawn from my working experience at Toyota. Our commitment to
                    delivering an exceptional user experience is evident in every aspect
                   of the website, designed to be both visually appealing and seamlessly functional.
                    <br />
                    The frontend of our website is built using cutting-edge technologies,
                     including React.js, Tailwind CSS, Figma, and Dhiwise. These tools not
                      only ensure a modern and responsive design but also contribute to a
                       user-friendly interface that enhances the overall browsing experience.


                  </>
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[11%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                    <div className="flex flex-col items-center justify-start w-[71%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-start w-auto"
                        style={{
                          backgroundImage:
                            "url('images/img_frame1000001658.svg')",
                        }}
                      >
                        <Text
                          className="text-gray-900 text-xs w-auto"
                          size="txtManropeSemiBold12Gray900"
                        >
                          Share this
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-8 w-8"
                    src="images/img_twitter_bluegray_100.svg"
                    alt="twitter"
                  />
                  <Img
                    className="h-8 w-8"
                    src="images/img_reddit.svg"
                    alt="reddit"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-12 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                  size="txtManropeExtraBold28"
                >
                  Our Database
                </Text>
                <Text
                  className="text-gray-600 text-lg w-full"
                  size="txtManropeRegular18Gray600"
                >
                  <>
                  We used RDS (Relational Database Service)
                  </>
                </Text>
              </div>
              <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="leading-[180.00%] max-w-[936px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                       One of the key features of our website is its ability to
                        retrieve comprehensive car details stored in our robust RDS
                         (Relational Database Service). This ensures that users have
                          access to the latest and most accurate information about our 
                          extensive range of vehicles. The intuitive design allows users 
                          to effortlessly navigate through the various models, specifications,
                           and pricing details, providing a comprehensive overview of our 
                           offerings.


                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[936px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                      The frontend of our website is built using cutting-edge technologies, 
                      including React.js, Tailwind CSS, Figma, and Dhiwise. 
                      These tools not only ensure a modern and responsive
                       design but also contribute to a user-friendly interface that
                        enhances the overall browsing experience.

                    </Text>
                  </div>
                </div>
              </div>
           
                <div className="flex flex-1 flex-col gap-5 items-start justify-start my-0 w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                    size="txtManropeSemiBold20Gray900"
                  >
                    Visual experience
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="leading-[180.00%] max-w-[894px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                      To enrich the visual experience, we have integrated our S3 bucket to
                       display high-quality images of each vehicle. This not only adds 
                       a visual appeal to the website but also allows users to get
                       a closer look at the cars they are interested in. Our commitment
                        to detail extends to every image, providing a true reflection 
                        of the quality and features of each vehicle.

                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[894px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                      Behind the scenes, our website is powered by a robust CRUD 
                      (Create, Read, Update, Delete) Spring Boot application, 
                      functioning as the backbone of our backend services. 
                      This service layer efficiently manages the flow of data to
                       and from our database, ensuring a smooth and 
                       responsive user experience. The backend's role is
                        crucial in maintaining the integrity of the data
                         and delivering it to the frontend for display.

                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-start my-0 w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                    size="txtManropeSemiBold20Gray900"
                  >
                    Our Dedication
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-gray-600 text-lg w-full"
                      size="txtManropeRegular18Gray600"
                    >
                     Our dedication to a user journey extends beyond the technical aspects.
                      We understand the importance of providing a platform
                       that not only showcases our extensive range of 
                       vehicles but also simplifies the decision-making
                        process for our customers. The combination of an
                         intuitive user interface, up-to-date information,
                          and striking visuals makes our website a go-to 
                          destination for anyone in search of their next
                           automotive experience.

                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[894px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                      Explore the world of possibilities with our dealership website, where innovation meets elegance, 
                      and every click brings you closer to your dream car. 
                      We invite you to browse, discover, and experience the 
                      future of car shopping. Welcome to a new era of online automotive excellence!
.
                    </Text>
                  </div>
                </div>
             
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                size="txtManropeBold24Gray900"
              >
                built by
              </Text>
              <div className="flex flex-col items-center justify-between md:pr-10 sm:pr-5 pr-[568px] w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-start max-w-[836px] w-full">
                  <Img
                    className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                    src="images/rakan.png"
                    alt="profilepicture"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-[165px]">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtManropeBold24Gray900"
                    >
                      Rakan Asfour
                    </Text>
                    <Text
                      className="text-base text-gray-600 w-full"
                      size="txtManropeSemiBold16Gray600"
                    >
                      Cloud Engineer
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                    <div className="bg-bluegray-100 h-2 rounded-[50%] w-2"></div>
                    <Text
                      className="text-base text-gray-600 w-auto"
                      size="txtManropeSemiBold16Gray600"
                    >
                      Janurary 28, 2024
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
       
      </div>
      <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </div>
  </>
  );
};

export default AboutUsPage;
