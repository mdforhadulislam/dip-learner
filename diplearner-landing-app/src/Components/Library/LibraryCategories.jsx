import { useState } from "react";
import CheckBoxFilter from "./CheckBoxFilter";

const LibraryCategories = () => {
  const [filter, setFilter] = useState({
    diploma: false,
  });

  return (
    <div className="w-full h-auto py-2 px-2 -mt-10">
      <div className="container px-5 py-3 flex flex-col md:flex-row items-start md:items-center justify-center align-middle">
        <div className="pb-2 md:pb-0">
          <span className="text-base font-semibold italic pr-3 ">
            Categories:
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center align-middle gap-1">
          <CheckBoxFilter
            style={"inline-block"}
            name={"all"}
            title={"All Book"}
            value={filter.diploma}
            actions={() => setFilter({ ...filter, diploma: !filter.diploma })}
          />

          <CheckBoxFilter
            style={"inline-block"}
            name={"learning"}
            title={"Learninig Book"}
            value={filter.diploma}
            actions={() => setFilter({ ...filter, diploma: !filter.diploma })}
          />

          <CheckBoxFilter
            style={"inline-block"}
            name={"genarel"}
            title={"Genarel Book"}
            value={filter.diploma}
            actions={() => setFilter({ ...filter, diploma: !filter.diploma })}
          />

          <CheckBoxFilter
            style={"inline-block"}
            name={"Story"}
            title={"Story Book"}
            value={filter.diploma}
            actions={() => setFilter({ ...filter, diploma: !filter.diploma })}
          />

          <CheckBoxFilter
            style={"inline-block"}
            name={"diploma"}
            title={"Diploma Book"}
            value={filter.diploma}
            actions={() => setFilter({ ...filter, diploma: !filter.diploma })}
          />

          {filter.diploma ? (
            <select
              name="engining"
              id="engining-depatmeant"
              className="bg-gray-50 border border-[#00b1e9] text-gray-900 text-sm rounded-lg focus:ring-[#00b1e9] focus:border-[#00b1e9]  w-auto p-2.5 inline-block"
            >
              <option value="">Electrical Technology</option>
              <option value="">Civil Technology</option>
              <option value="">Computer Technology</option>
              <option value="">Electronics Technology</option>
              <option value="">Mechanical Technology</option>
              <option value="">Power Technology</option>
              <option value="">
                Refrigeration and Air Conditioning Technology
              </option>
              <option value="">Marine Technology</option>
              <option value="">Food Technology</option>
            </select>
          ) : (
            <div className="w-full md:w-auto h-11"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LibraryCategories;
