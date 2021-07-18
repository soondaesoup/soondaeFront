import './App.css';
import SideBar from "./components/ui/SideBar";
import SearchField from "./components/ui/SearchField";
import BoardList from "./components/ui/BoardList";
import Footer from "./components/ui/Footer";
import LoginDialog from "./components/ui/LoginDialog";

function App() {
  return (
    <div className="App">
        <SearchField></SearchField>
        <LoginDialog></LoginDialog>
        <SideBar></SideBar>
        <BoardList></BoardList>
        <Footer></Footer>
      {/*<Grid></Grid>*/}
    </div>
  );
}

export default App;
