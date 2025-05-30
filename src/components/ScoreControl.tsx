type ScoreControlProps = {    
    onLike: () => void;
    onDislike: () => void;
};


export const ScoreControl =({onLike ,onDislike}:ScoreControlProps) => {
    return (
        <div className="mt-2">
        <button
          className="bg-green-500 text-white px-3 py-1 mr-2"
          onClick={() => onLike( )}
        >
          +1 喜歡
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1"
          onClick={() => onDislike()}
        >
          +1 不喜歡
        </button>
      </div> 
    )
}