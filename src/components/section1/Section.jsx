import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function Section() {
  return (
    <div className="flex justify-between h-[79vh] gap-2.5 px-6">
      <LeftContent />
      <RightContent />
    </div>
  );
}

export default Section;
