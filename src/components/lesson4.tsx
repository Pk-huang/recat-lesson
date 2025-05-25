export const RatingButton = ({ onRate }) => {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => onRate(star)}>
            ⭐
          </button>
        ))}
      </div>
    );
  };