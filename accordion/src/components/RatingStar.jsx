import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

function RatingStar({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getStarIndex) => {
    setRating(getStarIndex);
  };
  const handleMouseMove = (getStarIndex) => {
    setHover(getStarIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="flex items-center justify-center">
      {[...Array(noOfStar)].map((_, index) => {
        return (
          <FaStar
            style={
              index <= (hover || rating)
                ? { color: "yellow" }
                : { color: "white" }
            }
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default RatingStar;
