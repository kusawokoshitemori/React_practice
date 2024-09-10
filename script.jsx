// script.jsx
const App = () => {
  return (
    <div>
      <h1>Hello, React from JSX!</h1>
      <p>Welcome to your manually created React app.</p>
    </div>
  );
};

// ReactDOMでAppコンポーネントをルートにレンダリングする
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
