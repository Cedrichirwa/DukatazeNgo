
import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="relative p-1 flex flex-col items-center rounded-lg mx-2 gap-1 animate-pulse">
      <div className="bg-gray-200 rounded-lg h-80 w-full"></div>
      <div className="bg-gray-200 rounded-lg h-4 w-3/4 mt-2"></div>
      <div className="bg-gray-200 rounded-lg h-4 w-1/2 mt-1"></div>
    </div>
  );
};

export default SkeletonLoader;
