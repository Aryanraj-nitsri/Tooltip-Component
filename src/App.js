import "./App.css";
import Tooltip from "./Component/Tooltip";
function App() {
  const style = {
    width: "10%",
    margin: "20rem auto",
    borderBottom: "2px dotted lightgray",
    textAlign: "center",
    fontSize: "1.2rem",
    

  }
  
  return (
    <div className="App">
      <Tooltip
        message="Thanks for hovering! I am a tooltip"
        top={"19rem"}
        left={"54rem"}
        style={style}
      >
        <p >hover over me</p>
      </Tooltip>
    </div>
  );
}

export default App;
