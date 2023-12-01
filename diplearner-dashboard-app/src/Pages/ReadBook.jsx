import { Accordion } from "keep-react";
import { CaretDown, CaretUp } from "phosphor-react";
import React from "react";

import { Link, useParams } from "react-router-dom";
import { chapter } from "../Data/chapterAndpage";

const ReadBook = () => {
  const { id } = useParams();

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex lg:flex-row flex-col">
        <div className="w-full lg:w-[50%] flex justify-center items-center p-8">
          <img
            className="max-w-[260px] h-[330px]"
            src={"https://avatars3.githubusercontent.com/u/2763884?s=128"}
            alt="Book"
          />
        </div>
        <div className="w-full lg:w-[50%]  flex flex-col justify-center align-top gap-3 items-start">
          <Accordion
            openIcon={<CaretUp />}
            closeIcon={<CaretDown />}
            iconPosition="right"
            className="w-full bg-defult-100 shadow-3xl rounded-md"
          >
            <Accordion.Panel>
              <Accordion.Title className="hover:bg-defult-200 bg-defult-100">
                Chapter 1
              </Accordion.Title>
              <Accordion.Content className="pt-2 pl-1">
                <ul>
                  {chapter.map((item) => (
                    <li
                      key={item.name}
                      className=" w-full h-auto p-1 m-2 px-3 cursor-pointer rounded-md text-gray-800 hover:underline"
                    >
                      <Link to={"/access-book/idididid/read/chapterid/page"}>
                        {item.id}. {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="hover:bg-defult-200 bg-defult-100">
                Chapter 1
              </Accordion.Title>
              <Accordion.Content className="pt-2 pl-1">
                <ul>
                  {chapter.map((item) => (
                    <li
                      key={item.name}
                      className=" w-full h-auto p-1 m-2 px-3 cursor-pointer rounded-md text-gray-800 hover:underline"
                    >
                      <Link to={"/access-book/idididid/read/chapterid"}>
                        {item.id}. {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="hover:bg-defult-200 bg-defult-100">
                Chapter 1
              </Accordion.Title>
              <Accordion.Content className="pt-2 pl-1">
                <ul>
                  {chapter.map((item) => (
                    <li
                      key={item.name}
                      className=" w-full h-auto p-1 m-2 px-3 cursor-pointer rounded-md text-gray-800 hover:underline"
                    >
                      <Link to={"/access-book/idididid/read/chapterid"}>
                        {item.id}. {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
