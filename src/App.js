import React from 'react'
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import StartInterView from "./component/StartInterview";

export default function App() {
  return (

    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/StartInterview" element={<StartInterView />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>

  )
}
