import React from "react";

const ShowMoreButton = ({
  toggleShowAll,
  showAll,
}: {
  toggleShowAll: () => void;
  showAll: boolean;
}) => {
  return (
    <button
      onClick={toggleShowAll}
      className="text-blue-600 text-sm mt-2 transition-all duration-300 ease-in-out"
    >
      {showAll ? "Show less" : "Show more"}
    </button>
  );
};

export default ShowMoreButton;
