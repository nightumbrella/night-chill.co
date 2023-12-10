import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";

const Notes = () => {
  return (
    <div className="movable-div relative select-none backdrop-blur-[10px] overflow-hidden rounded-[12px]">
      <div className="h-[30px] cursor-move absolute top-0 left-0  z-50 w-full "></div>
      <Card className="w-[350px] h-[500px] bg-[#121212] text-white opacity-75">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Notes</CardTitle>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Notes;
