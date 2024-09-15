const App = () => {
  return <div className="hello">Hello, React!</div>;
};

// Reactアプリを描画
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
