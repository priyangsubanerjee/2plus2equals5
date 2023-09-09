import React from "react";

function Catalogue() {
  return (
    <div>
      <div className="grid shrink-0 grid-cols-2 divide-x divide-black border-b border-black">
        <button className="h-[99px] flex items-center justify-center relative overflow-hidden">
          <img
            src="/leftArrow.png"
            className="absolute left-0 inset-y-0 w-[45%] h-full"
            alt=""
          />
          <span>он</span>
          <img
            src="/rightArrow.png"
            className="absolute right-0 inset-y-0 w-[45%] h-full"
            alt=""
          />
        </button>
        <button className="h-[99px] flex items-center justify-center">
          <span>она</span>
        </button>
      </div>
    </div>
  );
}

export default Catalogue;
