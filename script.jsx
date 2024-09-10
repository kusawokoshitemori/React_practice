import React from "react";
import { createRoot } from "react-dom/client";

export default function App() {
  //このdiv要素にクラス名とテキストを追加してください
  return <div className=""></div>;
}

// 👇 こちらのコードについては次のレッスンで解説します

export const root = createRoot(document.getElementById("root"));
root.render(<App />);
