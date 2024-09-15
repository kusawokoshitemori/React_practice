const App = () => {
  return (
    <div>
      <div className="main_title">パイナップル積み上げ作業</div>
      {/* 分けたコンポーネントをここで呼び出す */}
      <WorkDescription />
    </div>
  );
};

// 仕事説明のコンポーネント
const WorkDescription = () => {
  return (
    <div>
      <h1>こんな仕事もあります</h1>
      <img
        src="./images/pineapple_girl.png"
        alt="パイナップルガールのイラスト"
      />
    </div>
  );
};

// Reactアプリを描画
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
