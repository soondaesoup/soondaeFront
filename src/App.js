import './App.css';
import MainList from "./components/ui/MainList";
import Mypage from "./components/ui/Mypage";
import SearchField from "./components/ui/SearchField";

function App() {
  return (
    <div className="App">
        <SearchField></SearchField>
        <MainList></MainList>
        <Mypage></Mypage>
      {/*<Grid></Grid>*/}
    </div>
  );
}

export default App;
