import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <>
      <Head>
        <meta name="DipLearner" title="DipLearner" content="Page not Found" />
        <title>Page Not Found</title>
      </Head>
      <div className="w-full h-auto p-8 pt-0">
        <div className=" container m-auto  h-auto text-center">
          <Image
            className="m-auto pb-5 sm:-mt-[50px]"
            src={"/books_1.png"}
            alt="book"
            width={800}
            height={800}
          />
          <h1 className=" text-[100px] font-bold italic text-center p-0 -mt-8 -mb-10 sm:text-[150px]">
            404
          </h1>
          <h1 class="py-[10px] text-[30px] md:text-[60px] text-center text-gray-800 font-semibold ">
            OPS! Under Construction
          </h1>
          <p class="text-gray-600 text-center text-[20px] py-[10px]">
            Try going to Home Page by using the button below.
          </p>

          <button
            className={` w-[150px] m-auto text-center  shadow-3xl  hover:bg-[#29b6e0] hover:text-white bg-white text-[#29b6e0] transition duration-300 block rounded-md border border-[#29b6e0]`}
          >
            <Link href="/" className="block px-4 py-2 text-[17px]">
              GO TO HOME
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
