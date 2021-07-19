import './App.css';
import SideBar from "./components/ui/SideBar";
import SearchField from "./components/ui/SearchField";
import MainList from "./components/ui/MainList";
import Footer from "./components/ui/Footer";
import LoginDialog from "./components/ui/LoginDialog";
import DiaLogSample from "./components/ui/JoinDia";

function App() {
  return (
    <div className="App">
        <SearchField></SearchField>
        <LoginDialog></LoginDialog>
        <SideBar></SideBar>
        <MainList></MainList>
        <Footer></Footer>
        <DiaLogSample></DiaLogSample>
      {/*<Grid></Grid>*/}
    </div>
  );
}

export default App;
