import React from "react";
import { categoryPhoto } from "../../data/Photocate";

const PhotoGrid = () => {
  console.log(categoryPhoto);
  return (
    <>
      <div className=" columns-2 md:columns-3 lg:columns-4 pt-[150px] gap-4 p-4 space-y-4">
        <div>
          {categoryPhoto.map((item, ind) => (
            <div
              className=" break-inside-avoid overflow-hidden mb-4 shadow rounded-lg"
              key={ind}
            >
              <img
                className="w-full blocks  h-auto object-cover"
                src={item}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoGrid;
