import {  Route, Routes} from "react-router-dom";
import Singin from "./component/Singin";
// import Protectedwrapper from "./wrapper/Protectedwrapper";
import Required from "./component/Required"
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Pages1 from "./component/Pages1";
import React from "react";
import Dashboard from "./component/Dashboard";
import { AuthProvider } from "./component/Auth";


function App() {

  return (
    <AuthProvider>
    <div>
      <Navbar />
      <div className="displayBox">
        <Routes>
          <Route
            path="/"
            element={<Required >
              <Home />
            </Required>}
          />
          <Route path="/pages1" element={<Pages1 />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Singin" element={<Singin />} />
        </Routes>
      </div>
      </div>
      </AuthProvider>
  );
}

export default App;
