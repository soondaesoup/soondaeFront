import './App.css';
import MainList from "./components/ui/MainList";
import Mypage from "./components/ui/Mypage";
import SearchField from "./components/ui/SearchField";
import Wish from "./components/wish/Wish";
import Footer from "./components/ui/Footer";
import InputText from  "./components/ex01/InPutText"
import InPutItem from "./components/ex01/InPutItem";
import JoinUser from "./components/ex01/JoinUser";
function App() {
  return (
    <div className="App">
        <SearchField></SearchField>
        <Mypage></Mypage>
        <MainList></MainList>

      {/*<Grid></Grid>*/}
    </div>
  );
}

export default App;
