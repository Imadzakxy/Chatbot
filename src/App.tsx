import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Log_in from "./components/Log_in";
import Sign_up from "./components/Sign_up";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log_in" element={<Log_in />} />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  ); 
}

export default App
