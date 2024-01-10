import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-500 w-full fixed bottom-0">
      <div className="p-5 flex justify-between items-center">
        <div className="text-white">
          <h1>Copyright 2021</h1>
        </div>
        <div className="flex gap-3 text-white">
          <p>Follow us on Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
