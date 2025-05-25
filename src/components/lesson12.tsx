import { useState } from 'react';

export const Lesson = () => {
    return (
        <div>
            <h2>this is lesson</h2>
        </div>
    )

}

export const Lesson2 = () => {
    const [content, setContent] = useState("hello");

    return (
        <div>
            <h2>{content}</h2>
            <button onClick={() => setContent(content == "hello" ? 'goodbye' : 'hello')}>switch</button>
        </div>
    )
}

export const Lesson21 = () => {
    const emmoji = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "😘", "😗", "😙", "😚"];
    const [index, setIndex] = useState(0);

    const changeEmoji = () => {
        setIndex((index + 1) % emmoji.length);
    }

    return (
        <div>
            <div>{emmoji[index]}</div>
            <button onClick={changeEmoji}>switch</button>
        </div>
    )

}

// const [state, setState] = useState(initialValue);
// 你說的	React 的原理	✅ 判斷
// state 是現在的值，可以是 num、boolean 等	✅ 是的，state 可以是任何資料型別（字串、數字、布林、物件、陣列、甚至函式）	✅
// setState 是一個函數，用來更新 state 的值	✅ 是更新狀態的唯一方式，而且會觸發畫面重新渲染	✅
// useState(initialValue) 表示初始化狀態的值	✅ 沒錯！只有第一次渲染會用這個 initialValue，之後即使變動也不會再初始化

