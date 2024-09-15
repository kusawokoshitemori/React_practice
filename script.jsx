const App = () => {
  return (
    <div>
      <TitlePineapple />
      <div className="container">
        {/* 分けたコンポーネントをここで呼び出す */}
        <WorkDescriptionBox />
        <WorkDescriptionBox2 />
      </div>
    </div>
  );
};

const TitlePineapple = () => {
  return <div className="main_title">パイナップル積み上げ作業</div>;
};

const WorkDescriptionBox = () => {
  return (
    <div className="box">
      <WorkDescription />
    </div>
  );
};
const WorkDescriptionBox2 = () => {
  return (
    <div className="box">
      <WorkDescription2 />
    </div>
  );
};

// 仕事説明のコンポーネント
const WorkDescription = () => {
  return (
    <div>
      <WorkDescriptionFirst />
      <div className="pineaple_box_container">
        <img
          src="./images/pineapple_girl.png"
          alt="パイナップルガールのイラスト"
          className="pineapple_girl_image"
        />
        <PineappleSpecialText />
      </div>
    </div>
  );
};

const WorkDescriptionFirst = () => {
  return (
    <div>
      <p class="pineapple_text">
        パイナップルに関わりたい
        <br />
        <span class="pineapple_text_indent">そんな方を大募集</span>
      </p>
    </div>
  );
};

const PineappleSpecialText = () => {
  return (
    <div className="pineapple_special_text">
      <p>
        誰もが憧れるパイナップル職に着けるチャンス！
        パイナップルの魅力に惹かれた方へ, 私たちは、あなたをお待ちしています！
      </p>
    </div>
  );
};

/* ここから2つ目の要素 */
const WorkDescription2 = () => {
  return (
    <div>
      <WorkDescriptionFirst2 />
      <div className="pineaple_box_container">
        <img
          src="./images/pineapple_girl_carry.png"
          alt="運搬パイナップルガールのイラスト"
          className="pineapple_girl_image"
        />
        <PineappleSpecialText2 />
      </div>
    </div>
  );
};

const WorkDescriptionFirst2 = () => {
  return (
    <div>
      <p class="pineapple_text">
        パイナップル業務の
        <br />
        <span class="pineapple_text_indent">仕事内容</span>
      </p>
    </div>
  );
};

const PineappleSpecialText2 = () => {
  return (
    <div className="pineapple_special_text">
      <p>
        レーンで左から右に流れてくるパイナップルを左のレーンに戻す、誰でも理解できる簡単な仕事です。
      </p>
    </div>
  );
};

// Reactアプリを描画
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
