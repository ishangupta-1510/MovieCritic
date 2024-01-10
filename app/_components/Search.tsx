import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div>
      <form className="border w-1/2 rounded-md border-purple-500 xl:max-w-[500px]">
        <div className="p-2 pl-4 flex">
          <SearchIcon />
          <input
            type="text"
            className="w-full outline-none"
            name="search"
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
