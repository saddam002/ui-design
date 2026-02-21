import React from "react";

function LeftContent() {
  return (
    <div className="h-full w-1/4 flex flex-col justify-between pt-12">
      <div>
        <h1 className="text-3xl font-bold mt-3 leading-9.25">
          Prospective <br />
          <span className="bg-gray-100 rounded-full px-2">customer</span> <br />
          segmentation
        </h1>
        <p className="text-sm mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas
          magni magnam libero tenetur. Earum, delectus. Repellendus nam commodi
          eaque.
        </p>
      </div>
      <div>
        <p>Arrow</p>
      </div>
    </div>
  );
}

export default LeftContent;
