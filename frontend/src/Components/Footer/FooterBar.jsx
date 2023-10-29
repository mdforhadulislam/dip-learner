import { Typography } from "@material-tailwind/react";
import React from "react";
import footerLinks from "../../Data/footer";
import Logo from "../../utils/Logo";

const currentYear = new Date().getFullYear();

const FooterBar = () => {
  return (
    <footer className="relative w-full p-3 md:p-6 lg:p-8 ">
      <div className="mx-auto w-full max-w-7xl relative h-32 z-10">
        <div className="w-full h-auto absolute z-10">
          <img
            className="w-full h-auto hidden lg:block"
            src="./books_4.png"
            alt="book-images"
          />
          <img
            className="w-full h-auto hidden sm:block lg:hidden"
            src="./books_2.png"
            alt="book-images"
          />
          <img
            className="w-full h-auto sm:hidden block"
            src="./books_3.png"
            alt="book-images"
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 py-4 border rounded-lg shadow-lg z-20">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            <Logo link={"/"} style={"w-48"} />
          </Typography>

          <div className="grid grid-cols-3 justify-between gap-4">
            {footerLinks.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-90"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link.name}>
                    <Typography
                      as="a"
                      href={link.link}
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img src="./github.png" alt="Github logo" />
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img src="./facebook.png" alt="facebook logo" />
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img src="./instragram.png" alt="instragram logo" />
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img src="./twitter.png" alt="twitter logo" />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
