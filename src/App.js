import MainPage from "./components/pages/MainPage";
import SideBar from "./components/side-bar/SideBar";
import UserContextProvider from "./contexts/UserContext";
import MainRoutes from "./MainRoutes";


function App() {
  return (
    <>
      <UserContextProvider>
        <SideBar />
        <MainRoutes />
        {/* <MainPage /> */}
      </UserContextProvider>
    </>
  );
}

export default App;
