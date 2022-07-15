import { useState } from "react";
import "./Star.css";

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <>
      <div className="star-rating">Star Rating</div>
      <div className="star-rating-container">
        {Array(5)
          .fill()
          .map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setRating(index + 1)}
              onMouseEnter={() => setHover(index + 1)}
              onMouseLeave={() => setHover(rating)}
            >
              <span
                className={index + 1 <= (hover || rating) ? "filled" : "empty"}
              >
                &#9733;
              </span>
            </button>
          ))}
      </div>
    </>
  );
};

export default Star;
