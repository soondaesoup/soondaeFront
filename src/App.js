import './App.css';
import SideBar from "./components/ui/SideBar";
import SearchField from "./components/ui/SearchField";
import BoardList from "./components/ui/BoardList";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div className="App">
        <SearchField></SearchField>
        <SideBar></SideBar>
        <BoardList></BoardList>
        <Footer></Footer>
      {/*<Grid></Grid>*/}
    </div>
  );
}

export default App;
