import Image from "next/image";
import AboutUsImage from "../../../public/about_us.png";

const AboutSection = () => {
  return (
    <div className="w-full h-auto">
      <div className=" w-full h-auto text-center mb-6">
        <h1 className="text-5xl sm:text-7xl italic font-bold text-[#376179] mb-2">
          About Our Library
        </h1>
        <span className="max-w-[300px] h-2 bg-[#376179] block m-auto"></span>
      </div>
      <div className=" container m-auto h-full py-8 px-2">
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
