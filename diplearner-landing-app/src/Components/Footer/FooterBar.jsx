import footerLinks from "@/Data/footer";
import Logo from "@/Utils/Logo";
import Image from "next/image";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const FooterBar = () => {
  return (
    <footer className="relative w-full p-3 md:p-6 lg:p-8 ">
      <div className="mx-auto w-full max-w-7xl relative h-32 z-10">
        <div className="w-full h-auto absolute z-10">
          <Image
            className="w-full h-auto hidden lg:block"
            src="/books_4.png"
            alt="book-images"
            width={1000}
            height={1000}
          />
          <Image
            className="w-full h-auto hidden sm:block lg:hidden"
            src="/books_2.png"
            alt="book-images"
            width={1000}
            height={1000}
          />
          <Image
            className="w-full h-auto sm:hidden block"
            src="/books_3.png"
            alt="book-images"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 py-4 border rounded-lg shadow-lg z-20">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <h5 className="mb-6">
            <Logo link={"/"} style={"w-48"} />
          </h5>

          <div className="grid grid-cols-3 justify-between gap-4">
            {footerLinks.map(({ title, items }) => (
              <ul key={title}>
                <h5 className="mb-3 font-medium opacity-90 text-blue-950">
                  {title}
                </h5>
                {items.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.link}
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900 text-gray-800"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <span className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </span>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <a
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src="/github.png"
                alt="Github logo"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                width={24}
                height={24}
                src="/facebook.png"
                alt="facebook logo"
              />
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                width={24}
                height={24}
                src="/instragram.png"
                alt="instragram logo"
              />
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                width={24}
                height={24}
                src="/twitter.png"
                alt="twitter logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
