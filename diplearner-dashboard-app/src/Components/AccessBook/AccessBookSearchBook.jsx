import React from "react";

const AccessBookSearchBook = () => {
  return (
    <div className="w-full h-auto py-2 pt-0 ">
      <label
        for="search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
          <svg
            class="w-5 h-5 text-defult-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          class="block w-full p-3 ps-14 text-sm text-gray-900 border border-defult-900 rounded-lg bg-gray-50  outline-none"
          placeholder="Search"
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-defult hover:bg-defult-900  font-medium rounded-lg text-sm px-4 py-1 "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default AccessBookSearchBook;
