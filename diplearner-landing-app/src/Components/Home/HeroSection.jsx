import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full h-full">
      {/* left said  */}
      <div className=" max-w-[1280px] overflow-hidden m-auto flex flex-row align-middle items-center">
        <div className=" w-full lg:max-w-4xl p-4 flex flex-row">
          {/* left said  */}
          <div className="w-full h-auto">
            <div className="">
              <h1 className="text-5xl sm:text-7xl italic font-bold text-[#376179]">
                Get your
              </h1>
              <h1 className="text-5xl sm:text-6xl pl-2 sm:pl-12 italic font-bold text-[#376179]">
                New Book
              </h1>
              <h1 className="flex gap-2 pl-2 sm:pl-28 text-5xl italic font-bold text-[#376179] align-middle items-center">
                <span className="flex gap-2">
                  <Image
                    width={18}
                    height={18}
                    src={"/half-round-gray-blue.png"}
                    alt="left"
                  />
                  <Image
                    width={18}
                    height={18}
                    src={"/half-round-gray-yellow.png"}
                    alt="right"
                  />
                </span>{" "}
                Collection
              </h1>
            </div>
            <div className="w-auto py-5">
              <p className=" w-full md:w-3/4 text-lg text-[#376179] italic">
                Syhet anask kros saras raskapet tening, sedan flyttstajla
                jemifatt men rearade inte ontomani en paddeltennis inte
                förortare sen. Pneumasion härade. Ovis telematisk, bloggbävning:
                savis. Du kan vara drabbad.
              </p>
            </div>
            <div className="w-full h-auto flex flex-row justify-between pr-2 md:pr-10">
              <Image
                width={130}
                height={130}
                src={"/book-dp-1.png"}
                alt="hero image"
              />
              <div className=" p-5">
                <div className=" w-36 h-36 rounded-full bg-[#DA8B2E] p-1">
                  <div className="w-28 h-28 flex justify-center align-middle items-center bg-white rounded-full p-2">
                    <h1 className="text-xl font-semibold text-[#376179]">
                      Shop Now
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right said  */}
          <div className="w-full h-auto hidden md:block relative">
            <Image
              width={100}
              height={100}
              src={"/book-dp.png"}
              alt="hero image"
              className="absolute left-16 lg:left-2 top-4"
            />
            <Image
              width={280}
              height={280}
              src={"/hero-right-image-1.png"}
              alt="hero image"
              className="mt-24  h-[350px] ml-[25%] lg:ml-[12%]"
            />
            <div className="w-full h-auto pt-3">
              <p className="text-lg italic text-[#376179]">
                Where Everything To Need To Know Is Only An Arm’s Length Away!
              </p>
            </div>
          </div>
        </div>

        {/* right said */}
        <div className=" max-w-sm hidden w-full h-full lg:block ">
          <div className="w-full h-auto flex justify-center align-middle items-center -ml-12">
            <div className="w-96 h-96 flex items-center align-middle justify-center rounded-full  border-dashed border-[2px] border-gray-600 relative rotated-cercel">
              <div className="w-48 h-48 flex justify-center align-middle items-center bg-[#376179] rounded-full shadow-5xl">
                <div className="w-28 h-28 bg-[#DA8B2E] rounded-full shadow-4xl"></div>
              </div>

              <div className=" absolute top-0 left-0 book-rotated  pl-2 pt-2">
                <Image
                  width={100}
                  height={100}
                  src="/book-1.png"
                  alt="book image"
                />
              </div>

              <div className=" absolute top-0 right-0 book-rotated  pl-2 pt-2">
                <Image
                  width={100}
                  height={100}
                  src="/book-2.png"
                  alt="book image"
                />
              </div>

              <div className=" absolute top-[60%] left-0 book-rotated  pl-2 pt-2">
                <Image
                  width={100}
                  height={100}
                  src="/book-1.png"
                  alt="book image"
                />
              </div>

              <div className=" absolute top-[60%] right-0 book-rotated pl-2 pt-2">
                <Image
                  width={100}
                  height={100}
                  src="/book-2.png"
                  alt="book image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
