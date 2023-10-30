import { Carousel, IconButton } from "@material-tailwind/react";
import React from "react";
import SliderContinerCard from "./SliderContinerCard";

const HeroSection = () => {
  return (
    <Carousel
      className=""
      loop={true}
      autoplay={true}
      autoplayDelay={3000}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-3/4 border shadow-md left-4 -translate-y-2/4"
        >
          <svg
            className="h-10 w-10"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75 50C75 50.8288 74.6708 51.6237 74.0847 52.2098C73.4987 52.7958 72.7038 53.125 71.875 53.125H35.6688L49.0875 66.5375C49.3781 66.8281 49.6085 67.173 49.7658 67.5526C49.923 67.9323 50.0039 68.3391 50.0039 68.75C50.0039 69.1609 49.923 69.5678 49.7658 69.9474C49.6085 70.3271 49.3781 70.672 49.0875 70.9625C48.797 71.2531 48.452 71.4836 48.0724 71.6408C47.6928 71.7981 47.2859 71.879 46.875 71.879C46.4641 71.879 46.0572 71.7981 45.6776 71.6408C45.298 71.4836 44.9531 71.2531 44.6625 70.9625L25.9125 52.2125C25.6215 51.9223 25.3906 51.5774 25.233 51.1978C25.0755 50.8181 24.9944 50.4111 24.9944 50C24.9944 49.589 25.0755 49.182 25.233 48.8023C25.3906 48.4227 25.6215 48.0778 25.9125 47.7875L44.6625 29.0375C45.2493 28.4508 46.0452 28.1211 46.875 28.1211C47.7049 28.1211 48.5007 28.4508 49.0875 29.0375C49.6743 29.6243 50.0039 30.4202 50.0039 31.25C50.0039 32.0799 49.6743 32.8758 49.0875 33.4625L35.6688 46.875H71.875C72.7038 46.875 73.4987 47.2043 74.0847 47.7903C74.6708 48.3764 75 49.1712 75 50Z"
              fill="black"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-3/4 border shadow-md  !right-4 -translate-y-2/4"
        >
          <svg
            width="100"
            height="100"
            className="h-10 w-10"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 50C25 49.1712 25.3292 48.3764 25.9153 47.7903C26.5013 47.2043 27.2962 46.875 28.125 46.875H64.3313L50.9125 33.4625C50.3257 32.8758 49.9961 32.0799 49.9961 31.25C49.9961 30.4202 50.3257 29.6243 50.9125 29.0375C51.4993 28.4508 52.2952 28.1211 53.125 28.1211C53.9548 28.1211 54.7507 28.4508 55.3375 29.0375L74.0875 47.7875C74.3785 48.0778 74.6094 48.4227 74.767 48.8023C74.9245 49.182 75.0056 49.589 75.0056 50C75.0056 50.4111 74.9245 50.8181 74.767 51.1978C74.6094 51.5774 74.3785 51.9223 74.0875 52.2125L55.3375 70.9625C54.7507 71.5493 53.9548 71.879 53.125 71.879C52.2952 71.879 51.4993 71.5493 50.9125 70.9625C50.3257 70.3758 49.9961 69.5799 49.9961 68.75C49.9961 67.9202 50.3257 67.1243 50.9125 66.5375L64.3313 53.125H28.125C27.2962 53.125 26.5013 52.7958 25.9153 52.2098C25.3292 51.6237 25 50.8288 25 50Z"
              fill="black"
            />
          </svg>
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-[#00B1E9]" : "w-4 bg-[#00B1E9]/30"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <SliderContinerCard>
        <div className="md:mt-20">
          <img src="./book_demo.png" alt="" />
        </div>
      </SliderContinerCard>
      <SliderContinerCard>
        <img src="./book_bannar.png" alt="" />
      </SliderContinerCard>
      <SliderContinerCard>
        <img src="./book_bannar.png" alt="" />
      </SliderContinerCard>
      <SliderContinerCard>
        <img src="./book_bannar.png" alt="" />
      </SliderContinerCard>
    </Carousel>
  );
};

export default HeroSection;
