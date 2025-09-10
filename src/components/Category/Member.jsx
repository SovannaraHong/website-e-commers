import React from "react";
import { member } from "../../data/datamember";
const Member = () => {
  return (
    <div className=" columns-2 md:columns-3 lg:columns-4 pt-[10px] gap-4 p-4 space-y-4">
      <div>
        {member.map((item, ind) => (
          <div
            className=" break-inside-avoid overflow-hidden mb-4 shadow rounded-lg"
            key={ind}
          >
            <img className="w-full h-auto object-cover" src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
