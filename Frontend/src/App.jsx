import {  Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



function App()
{
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}>HomePage </Route>
    <Route path="/Login" element={<Login></Login>}>Login</Route>
    <Route path="/SignUp" element={<SignUp></SignUp>}>Signup</Route>

   </Routes>
    </>
  )
}
export default App;