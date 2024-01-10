import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-300 w-full">
      <div className="p-5 flex justify-between items-center">
        <div>
          <h1>MOVIECRITIC</h1>
        </div>
        <div className="flex gap-3">
          {/* <Link>Add new movie</Link>
          <Link>Add new review</Link> */}
          <p className="bg-white border outline-2 border-purple-500 rounded-md p-1 pl-2 pr-2 text-purple-500">
            Add new movie
          </p>
          <p className="bg-purple-500 border outline-2 rounded-md p-1 pl-2 pr-2 text-white">
            Add new review
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
