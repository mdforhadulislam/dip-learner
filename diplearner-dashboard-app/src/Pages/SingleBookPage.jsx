import React from "react";
import { Link } from "react-router-dom";
import WriterNaneBox from "../Components/AllBook/WriterNaneBox";
import TagBox from "../Components/AllBook/TagBox";

const SingleBookPage = () => {
  return (
    <div className="w-full h-auto flex md:flex-row flex-col">
      <div className="w-full md:w-[50%] flex justify-center items-center align-middle p-8">
        <img
          className="max-w-[260px] h-[330px]"
          src={"https://avatars3.githubusercontent.com/u/2763884?s=128"}
          alt="Book"
        />
      </div>
      <div className="w-full md:w-[50%]  flex flex-col justify-center align-top gap-3 items-start">
        <h1 className=" text-2xl font-semibold italic mb-4">
          Book hello world - 2024 - (404943)
        </h1>
        <table>
          <tr>
            <td>
              <span className=" text-lg font-semibold italic">Writer:</span>
            </td>
            <td className="pl-3 py-1">
              <div className="h-auto">
                <WriterNaneBox title={"Forhad Ahmed"} />
                <WriterNaneBox title={"Forhadul Islam"} />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <span className=" text-lg font-semibold italic">Session:</span>
            </td>
            <td className="pl-3 py-1">
              <span className="border py-1 px-3 font-medium italic text-base rounded-md m-1">
                2023
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span className=" text-lg font-semibold italic">Tag:</span>
            </td>
            <td className="pl-3 py-1">
              <div className="h-auto">
                <TagBox title={"civil"} />
                <TagBox title={"power"} />
                <TagBox title={"civil"} />
                <TagBox title={"computer"} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span className=" text-lg font-semibold italic">Publisher:</span>
            </td>
            <td className="pl-3 py-1">
              <span className="border py-1 px-3 font-medium italic text-base rounded-md m-1">
                Hok
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span className=" text-lg font-semibold italic">
                Subject Code:
              </span>
            </td>
            <td className="pl-3 py-3">
              <span className="border py-1 px-3 font-medium italic text-base rounded-md m-1">
                202345
              </span>
            </td>
          </tr>
        </table>

        <p className=" font-normal text-base italic mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo
          exercitationem commodi aliquid quod nisi dolorem nam odit. Dolorem,
          ad. Autem voluptate nulla nisi, obcaecati corporis iusto praesentium,
          maxime nesciunt expedita quis magni non fugiat ea tenetur? Voluptatem,
          debitis aliquid labore quidem, aperiam dicta obcaecati itaque aut eum
          corporis tempora sapiente consequuntur sed! Sapiente veniam enim
          voluptate, alias voluptates maxime quaerat nesciunt velit et
        </p>

        <Link
          className={`px-4 py-2 text-center text-md shadow  hover:bg-defult-800 bg-defult text-white transition duration-300 rounded-md flex items-center align-middle justify-center w-full`}
          to={"/library/?name=genarel"}
        >
          <span className="w-full h-auto text-center">Read Book</span>
        </Link>
      </div>
    </div>
  );
};

export default SingleBookPage;
