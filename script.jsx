const App = () => {
  return (
    <div>
      <TitlePineapple />
      <div className="container">
        {/* 分けたコンポーネントをここで呼び出す */}
        <Content_box />
        <Content_box />
      </div>
      <WorkDescription />
    </div>
  );
};

const TitlePineapple = () => {
  return <div className="main_title">パイナップル積み上げ作業</div>;
};

const Content_box = () => {
  return <div className="box"></div>;
};

// 仕事説明のコンポーネント
const WorkDescription = () => {
  return (
    <div>
      <h1>こんな仕事もあります</h1>
      <img
        src="./images/pineapple_girl.png"
        alt="パイナップルガールのイラスト"
        className="pineapple_girl_image"
      />
    </div>
  );
};

// Reactアプリを描画
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
