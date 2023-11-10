import Image from "next/image";
import React from "react";
import EmailIcon from "../../../public/email-icon.svg";
import HomeIcon from "../../../public/home-icon.svg";
import PhoneIcon from "../../../public/phone-icon.svg";

const ContactLeftSaid = () => {
  return (
    <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
      <div className="max-w-[570px] mb-12 lg:mb-0">
        <h2 className="text-dark mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px] f-m">
          GET IN TOUCH WITH US
        </h2>
        <p className="text-base text-body-color leading-relaxed mb-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
          minim veniam quis nostrud exercitation ullamco
        </p>
        <div className="flex mb-8 max-w-[370px] w-full">
          <div className="max-w-[60px] sm:max-w-[70px] w-full h-[60px] sm:h-[70px] flex items-center justify-center mr-6 overflow-hidden bg-opacity-5 text-primary rounded ">
            <Image
              width={"40"}
              height={"40"}
              src={HomeIcon}
              alt={"Home-Icon"}
            />
          </div>
          <div className="w-full">
            <h4 className="font-bold text-dark text-xl mb-1 f-mi">
              Our Location
            </h4>
            <p className="text-base text-body-color">
              99 S.t Jomblo Park Pekanbaru 28292. Indonesia
            </p>
          </div>
        </div>
        <div className="flex mb-8 max-w-[370px] w-full">
          <div className="max-w-[60px] sm:max-w-[70px] w-full h-[60px] sm:h-[70px] flex items-center justify-center mr-6 overflow-hidden  bg-opacity-5 text-primary rounded">
            <Image
              width={"40"}
              height={"40"}
              src={PhoneIcon}
              alt={"Phone-Icon"}
            />
          </div>
          <div className="w-full">
            <h4 className="font-bold text-dark text-xl mb-1 f-mi">
              Phone Number
            </h4>
            <p className="text-base text-body-color">(+62)81 414 257 9980</p>
          </div>
        </div>
        <div className="flex mb-8 max-w-[370px] w-full">
          <div className="max-w-[60px] sm:max-w-[70px] w-full h-[60px] sm:h-[70px] flex items-center justify-center mr-6 overflow-hidden  bg-opacity-5 text-primary rounded">
            <Image
              width={"40"}
              height={"40"}
              src={EmailIcon}
              alt={"Email-Icon"}
            />
          </div>
          <div className="w-full">
            <h4 className="font-bold text-dark text-xl mb-1 f-mi">
              Email Address
            </h4>
            <p className="text-base text-body-color">info@yourdomain.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ContactLeftSaid);
