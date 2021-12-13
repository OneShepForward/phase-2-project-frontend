import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';

import Home from "./components/Home";
import Links from "./components/Links";
import GuestBook from "./components/GuestBook";
import NoMatch from "./components/NoMatch";
import Header from "./components/Header"

let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<Links />} />
      <Route path="/guest-book" element={<GuestBook /> } />
      <Route path="*" element={ <NoMatch />} />
    </Routes>
);

function App() {
  return (
    <div className="App" style={{ background: "rgba(0,0,0,0)" }}>  
          <Header
          name="Nick Shephard"
          />
          {routes}
    </div>
  );
}

export default App;