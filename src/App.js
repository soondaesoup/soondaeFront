import './App.css';
import Appbar from "./components/ui/Appbar";
import MainList from "./components/ui/MainList";
import Mypage from "./components/ui/Mypage";

function App() {
  return (
    <div className="App">
      <MainList></MainList>
      <Mypage></Mypage>
      {/*<Grid></Grid>*/}
    </div>
  );
}

export default App;
