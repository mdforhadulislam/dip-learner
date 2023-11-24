import React, { useState } from "react";
import CheckBox from "../../Utils/CheckBox";

const AllBookHeader = () => {
  const [filter, setFilter] = useState({
    diploma: false,
  });

  return (
    <div className="w-full h-auto">
      <div className="pb-2 md:pb-0">
        <span className="text-base font-semibold italic pr-3 ">
          Categories:
        </span>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center align-middle gap-1 py-2">
        <CheckBox
          style={`inline-block`}
          name={"all"}
          title={"All Book"}
          value={filter.diploma}
          actions={() => setFilter({ ...filter, diploma: !filter.diploma })}
        />

        <CheckBox
          style={`inline-block`}
          name={"learning"}
          title={"Learninig Book"}
          value={filter.diploma}
          actions={() => setFilter({ ...filter, diploma: !filter.diploma })}
        />

        <CheckBox
          style={`inline-block`}
          name={"genarel"}
          title={"Genarel Book"}
          value={filter.diploma}
          actions={() => setFilter({ ...filter, diploma: !filter.diploma })}
        />

        <CheckBox
          style={`inline-block`}
          name={"Story"}
          title={"Story Book"}
          value={filter.diploma}
          actions={() => setFilter({ ...filter, diploma: !filter.diploma })}
        />

        <CheckBox
          style={`inline-block`}
          name={"diploma"}
          title={"Diploma Book"}
          value={filter.diploma}
          actions={() => setFilter({ ...filter, diploma: !filter.diploma })}
        />

        {filter.diploma ? (
          <>
            <select
              name="engining"
              id="engining-depatmeant"
              className="bg-gray-50 border border-defult text-sm rounded-lg focus:ring-defult focus:border-defult  w-auto p-2.5 inline-block active:outline-none"
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
            <select
              name="engining"
              id="engining-depatmeant"
              className="bg-gray-50 border border-defult text-sm rounded-lg focus:ring-defult focus:border-defult  w-auto p-2.5 inline-block active:outline-none lg:mt-0 mt-1"
            >
              <option value="">Section 2023</option>
              <option value="">Section 2024</option>
            </select>
          </>
        ) : (
          <div className="w-full md:w-auto lg:h-0 h-24"></div>
        )}
      </div>
    </div>
  );
};

export default AllBookHeader;
