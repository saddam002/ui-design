import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center p-6">
      <h4 className="bg-black uppercase text-white rounded-full px-2 py-1">
        Target audience
      </h4>
      <button className="bg-gray-200 text-sm uppercase px-2 py-1 rounded-full">
        Digital banking platform
      </button>
    </div>
  );
}

export default Header;
