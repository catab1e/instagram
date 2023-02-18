import NavPanel from "./components/nav-panel/NavPanel";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./components/pages/MainPage";
import UserContextProvider from "./contexts/UserContext";


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <UserContextProvider>
        <MainPage />
      </UserContextProvider>
    </>
  );
}

export default App;
