import './App.css';
import MainList from "./components/ui/MainList";
import Mypage from "./components/ui/Mypage";
import SearchField from "./components/ui/SearchField";
import BoardList from "./components/ui/BoardList";

function App() {
  return (
    <div className="App">
        <SearchField></SearchField>
        <MainList></MainList>
        <Mypage></Mypage>
        <BoardList></BoardList>
      {/*<Grid></Grid>*/}
    </div>
  );
}

export default App;
