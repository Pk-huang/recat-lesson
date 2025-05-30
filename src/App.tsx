import React, { useState } from "react";
import { ScoreDisplay } from "./components/ScoreDisplay";
import { ScoreControl } from "./components/ScoreControl";

export const App = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);



  
  return (
    <div className="p-4 border rounded">

      <ScoreDisplay likes={likes} dislikes={dislikes} />

      < ScoreControl
        onLike={() => setLikes(likes + 1)}
        onDislike={() => setDislikes(dislikes + 1)}
      />
    </div>
  );
};
