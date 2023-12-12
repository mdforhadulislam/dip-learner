import { Carousel } from "keep-react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const UserDashboardHead = () => {
  return (
    <div className=" md:w-[calc(100%-316px)] w-full h-full">
      <Carousel
        className="w-full h-full"
        slideInterval={3000}
        showControls={true}
        indicators={true}
        leftControl={
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 sm:h-10 sm:w-10">
            <IoIosArrowBack class={"text-white"} />
          </span>
        }
        rightControl={
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 sm:h-10 sm:w-10">
            <IoIosArrowForward class={"text-white"} />
          </span>
        }
      >
        <img
          src="https://images.prismic.io/staticmania/ecd45179-4b86-4a34-b245-0078e022db5a_1.png?auto=compress,format"
          alt="slider-1"
          className="w-full min-h-[150px]"
        />
        <img
          src="https://images.prismic.io/staticmania/dee3ff09-3ddc-4340-bc8f-ea0028bb4a61_2.png?auto=compress,format"
          alt="slider-2"
          className="w-full min-h-[150px]"
        />
        <img
          src="https://images.prismic.io/staticmania/a5c7143d-24dd-4531-9f00-243f4eb27e28_3.png?auto=compress,format"
          alt="slider-3"
          className="w-full min-h-[150px]"
        />
        <img
          src="https://images.prismic.io/staticmania/c5cf46a8-b10c-43c8-a60e-6692838cdee1_4.png?auto=compress,format"
          alt="slider-4"
          className="w-full min-h-[150px]"
        />
      </Carousel>
    </div>
  );
};

export default UserDashboardHead;
