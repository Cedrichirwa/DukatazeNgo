import React from "react";
const Model = ({ isVisible, onClose, children }) => {
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  if (!isVisible) return null;
  return (
    <div
      id="wrapper"
      className="fixed inset-0 z-[3] bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="md:w-4/5 w-11/12 flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white rounded-lg p-2">{children}</div>
      </div>
    </div>
  );
};
export default Model;
