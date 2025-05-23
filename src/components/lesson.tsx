import { useState } from 'react';

export const Lesson = () => {
    return (
        <div>
            <h2>this is lesson</h2>
        </div>
    )

}

export const Lesson2 = () => {
    const [ content , setContent ] = useState("hello");

    return (
        <div>
            <h2>{content}</h2>
            <button onClick={()=> setContent(content == "hello" ? 'goodbye': 'hello')}>switch</button>
        </div>
    )
}
