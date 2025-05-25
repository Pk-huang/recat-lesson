import { useState, useEffect } from "react";

export const Lesseon3 = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // ✅ 正確寫法：修改瀏覽器 tab 上的標題
    document.title = content;
  }, [content]);

  return (
    <div>
      <span>{content}</span>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
};
