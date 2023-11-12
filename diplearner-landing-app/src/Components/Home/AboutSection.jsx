import Image from "next/image";
import AboutUsImage from "../../../public/about_us.png";

const AboutSection = () => {
  return (
    <div className="w-full h-auto">
      <div className=" w-full h-auto text-center py-5 p-2">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          About Our Libray
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
          magni libero consequuntur voluptatum velit amet id repudiandae ea,
          deleniti laborum in neque eveniet.
        </p>
      </div>
      <div className=" container m-auto h-full px-2">
        <div className="w-full h-auto flex flex-col md:flex-row gap-4 items-center align-middle">
          <Image
            src={AboutUsImage}
            alt="About Library"
            className="w-[300px] sm:w-[400px] lg:max-w-[500px]"
          />
          <div className="w-full h-auto flex-col justify-center items-start align-top gap-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl italic font-bold text-[#376179] mb-2">
              We Are Working Since 2023 August Month
            </h1>

            <p className="text-lg italic">
              Diploma education presents a different dimension to every student
              with an opportunity to reinvent themselves. Our mission and
              objective is to differentiate online education by making
              traditional offline education more vibrant online and easy and
              understandable for students. Through all the diploma courses
              running under the Bangladesh Technical Education Board, you can
              take your studies to a different level whenever you want, sitting
              anywhere. We have skilled mentors and timely suggestions. So we
              are "DipLearner" to take care of your studies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
