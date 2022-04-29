import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import AddItems from "./Components/AddItems/AddItems";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import LogIn from "./Components/LogIn/LogIn";
import ManageItems from "./Components/ManageItems/ManageItems";
import MyItems from "./Components/MyItems/MyItems";
import NotFound from "./Components/NotFound/NotFound";
import RequireAuth from "./Components/RequirAuth";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/manageItems" element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path="/addItems" element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/logIn" element={<LogIn></LogIn>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
