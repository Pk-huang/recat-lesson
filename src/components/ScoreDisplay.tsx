type ScoreDisplayProps = {
    likes: number;
    dislikes: number;
};


export const ScoreDisplay = ({likes,dislikes}:ScoreDisplayProps) => {

     
    return (
        <div>
             <h2>喜好度統計</h2>
            <p>👍 喜歡：{likes}</p>
            <p>👎 不喜歡：{dislikes}</p>
        </div>
    )
}