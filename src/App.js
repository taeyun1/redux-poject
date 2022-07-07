import "./App.css";
import Subscribers from "./components/Subscribers";
import Display from "./components/Display";
import Views from "./components/Views";
import Comments from "./components/commentes/Comments";

function App() {
  return (
    <div className="App">
      <Subscribers />
      <Views />
      <Display />
      <Comments />
    </div>
  );
}

export default App;
