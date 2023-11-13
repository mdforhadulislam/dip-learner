import PasswordInputBox from "@/Utils/PasswordInputBox";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="bg-[#00B1E9] absolute top-0 left-0 bg-gradient-to-b from-[#00B1E9] via-gray-900 to-gray-900 bottom-0 leading-5 h-full w-full overflow-hidden"></div>
      <div className="relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl z-50">
        {/* left said  */}
        <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
          <div className="self-start hidden lg:flex flex-col  text-gray-300">
            <h1 className="my-3 font-semibold text-4xl f-mi">Welcome back</h1>
            <p className="pr-3 text-sm opacity-75">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>

        {/* right side  */}
        <div className="flex justify-center self-center  z-10 p-4 ">
          <div className="p-8 pt-6 bg-white mx-auto shadow-4xl rounded-3xl w-96 ">
            <div className="mb-6">
              <h3 className="font-semibold text-2xl text-gray-800 f-m">
                Login
              </h3>
              <p className="text-gray-400">
                Don'thave an account?{" "}
                <Link
                  href="/auth/register"
                  className="text-sm text-[#00B1E9] hover:text-[#00B1E9]"
                >
                  Registation Now
                </Link>
              </p>
            </div>
            <div className="space-y-6">
              <div className="">
                <input
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-[#00B1E9] rounded-lg focus:outline-none focus:border-[#00B1E9]"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="relative">
                <PasswordInputBox value={""} action={(e) => {}} />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <Link
                    href="#"
                    className="text-[#00B1E9] hover:text-[#00B1E9]"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-[#00B1E9]  hover:bg-[#00B1E9] text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                  onClick={() => {
                    // route.push('https://donar-dashboard.vercel.app/');
                  }}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bootem white  */}
      <svg
        className="absolute bottom-0 left-0 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}
