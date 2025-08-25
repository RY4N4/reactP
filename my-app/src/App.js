import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import TextForm from './components/textForm';
import About from './components/about';
import Explore from './components/explore';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,  
  Route,
} from "react-router-dom";
import NewsApp from './components/NewsApp';


function App() {  
  // const [mode, setMode] = useState('dark');

  // const toggleMode = () => {
  //   if (mode === 'dark') {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';  
  //     document.title = "TextUtils - Light Mode";      
  //   } else {
  //     setMode('dark');
  //     document.body.style.backgroundColor = 'black'; 
  //     document.title = "TextUtils - Dark Mode";
  //   }
  

  return (
    // <Router>
    //   <Navbar title="MyTextUtils" mode={mode} toggleMode={toggleMode}/>
    //   <Routes>
    //     <Route exact path="/about" element={<About />} />
    //     <Route exact path="/explore" element={<Explore />} />
    //     <Route eaxct path="/" element={<TextForm email="hello but props email" inBox="inside " mode={mode}/>} />
    //   </Routes>
    // </Router>
    <NewsApp />
  );
}

export default App;
