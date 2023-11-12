import { useState } from "react";
import Slider from "react-slick/lib/slider";

const Slides = [
  {
    id: 1,
    image: "./1.jpg",
  },
  {
    id: 2,
    image: "./2.jpg",
  },
  {
    id: 3,
    image: "./3.jpg",
  },
  {
    id: 4,
    image: "./4.jpg",
  },
  {
    id: 5,
    image: "./5.jpg",
  },
  {
    id: 6,
    image: "./6.jpg",
  },
  {
    id: 7,
    image: "./7.jpg",
  },
  {
    id: 8,
    image: "./8.jpg",
  },
  {
    id: 9,
    image: "./9.jpg",
  },
];
const SearchBook = () => {
  const [mainSlider, setMainSlider] = useState();
  const [navSlider, setNavSlider] = useState();
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = Slides?.length || 1;
  const mainSliderSettings = {
    arrows: false,
    fade: true,
    speed: 1000,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
    cssEase: "linear",
  };
  const navSliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    centerMode: true,
    infinite: true,
    pauseOnHover: false,
    centerPadding: "40px",
    dots: false,
    speed: 500,
    slidesToShow: totalSlides > 7 ? 7 : totalSlides,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    focusOnSelect: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    beforeChange: (current, next) => setCurrentSlide(next + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: totalSlides > 5 ? 5 : totalSlides,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: totalSlides > 3 ? 3 : totalSlides,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: totalSlides > 1 ? 1 : totalSlides,
        },
      },
    ],
  };
  return (
    <div className="max-w-full h-auto m-auto">
      <div className="relative">
        <div className="relative">
          <div className="z-20 absolute inset-0 h-full flex flex-col gap-4 justify-center items-center align-middle">
            <h1 className="text-white text-4xl font-bold text-center">
              What book you looking for?
            </h1>
            <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center md:rounded-md overflow-hidden">
              <div className="flex items-center h-full rounded overflow-hidden md:rounded-none">
                <div className="h-full bg-white flex flex-col lg:flex-row items-center justify-center">
                  <select
                    className="py-2 p-1 text-base text-gray-400 border-none outline-none h-full active:outline-none focus:outline-none w-full flex justify-between items-center align-middle"
                    defaultValue=""
                    name=""
                    id=""
                  >
                    <option value="">Select your Book Type</option>
                  </select>
                  <input
                    className="py-2 p-1 text-base text-gray-400 border-none outline-none h-full active:outline-none focus:outline-none w-full flex justify-between items-center align-middle"
                    defaultValue=""
                    name=""
                    id=""
                    placeholder="Type Your Book Name"
                  />

                  <button className="px-16 py-1 rounded md:rounded-none h-full cursor-pointer flex justify-center items-center text-white w-full md:w-auto  hover:bg-[#29b6e0] bg-[#00B1E9] transition duration-300">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <span className="z-10 absolute top-0 left-0 w-full h-[calc(100%-6.5px)] bg-black/50" />
            <Slider
              asNavFor={navSlider}
              ref={(slider1) => setMainSlider(slider1)}
              {...mainSliderSettings}
            >
              {Slides.map((slide, i) => (
                <div
                  key={i}
                  className="w-full h-screen sm:h-auto relative aspect-auto sm:aspect-video lg:aspect-[1920/820] overflow-hidden"
                >
                  <img
                    className="w-full h-full"
                    src={slide.image}
                    layout="fill"
                    objectFit="cover"
                    alt="images"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="relative -translate-y-[80%] z-20 hero-slider-nav">
          <span className="inset-0 absolute w-full h-full bg-black/50 blur-xl" />
          <Slider
            asNavFor={mainSlider}
            ref={(slider2) => setNavSlider(slider2)}
            {...navSliderSettings}
          >
            {Slides.map((slide, i) => (
              <div className="p-2">
                <div
                  key={i}
                  className={`shadow-md cursor-pointer w-full relative aspect-video overflow-hidden rounded-md ${
                    currentSlide === i + 1 && "border-2 border-[#00B1E9]"
                  }`}
                >
                  <img
                    className="w-full h-full"
                    src={slide.image}
                    layout="fill"
                    objectFit="cover"
                    alt="images"
                  />
                  {currentSlide === i + 1 && (
                    <div className="h-full absolute w-full flex flex-col justify-end top-0 left-0">
                      <div className="loader-line" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SearchBook;
