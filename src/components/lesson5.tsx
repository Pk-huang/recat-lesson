import { useState } from "react";

export const TodoList = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>btn</button>


            {show &&
                <div>
                    <div className="card">
                        <p>this is</p>
                        <h2>Card</h2>
                    </div>
                </div>
            }
        </div>
    )

}