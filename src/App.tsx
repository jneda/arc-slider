import "./App.css";
import ArcSlider from "./assets/components/ArcSlider";

function App() {
  return (
    <div className="App">
      <ArcSlider height={200} width={200} />
      <ArcSlider height={300} width={300} />
      {/* <ArcSlider height={400} width={400} /> */}
    </div>
  );
}

export default App;
