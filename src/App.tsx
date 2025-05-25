import React, { useState } from "react";
import { RatingButton } from "./components/lesson4";

export const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>你的評分：{score}</h2>
      <RatingButton onRate={setScore} />
    </div>
  );
};
