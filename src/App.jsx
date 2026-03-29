import ForgetPassword from "./Components/ForgetPassword";
import Login from "./Components/Login";
import "./App.css";
import theme from "./theme";
import Contact from "./Components/Contact";
import ResetPassword from "./Components/ResetPassword";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
      

          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
                <Route path='/' element={<Home/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}
