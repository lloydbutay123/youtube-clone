import React, { useState } from 'react'
import Navbar from './assets/Components/Navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/home";
import Video from "./Pages/Video/video";

const App = () => {

  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route exact path='/' element={<Home sidebar={sidebar}/>} />
        <Route exact path='/video/:categoryId/:videoId' element={<Video />} />    
      </Routes>
    </div>
  )
}

export default App
