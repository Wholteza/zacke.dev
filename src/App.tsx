import "./App.scss";
import BlinkingCursor from "./layout/decorative/blinking-cursor";

function App() {
  return (
    <div className="container">
      <h1 className="color-title">&gt; HI THERE!</h1>
      <div className="row">
        <span className="code">This page is under construction</span>
        <BlinkingCursor />
      </div>
    </div>
  );
}

export default App;
