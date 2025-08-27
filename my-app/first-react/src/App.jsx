// App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NewComponent from './new.jsx'; 
import Head from './components/Head.jsx'
import Appp from './sr.jsx'
import Joke from './components/Joke.jsx';
import data from './components/data.js';
import Index from './components/index.jsx';



function Header() {
  return (
    <div id='head'>
      <img src='src/react.jpg' alt='React Image' height='50px' />
      <h3>ReactFacts</h3>
    </div>
  );
}
  
function Main() {
  return (
    <div id='main-content'>
      <h2 id='about'>Fun Facts about React</h2>
      <ul>
        <li>Was First Released in 2013</li>
        <li>Was Created by Jordan Walke</li>
        <li>Is maintained by Meta (Facebook)</li>
        <li>Has over 100K stars on GitHub</li>
        <li>Powers thousands of apps, including Facebook</li>
      </ul>
    </div>
  );
}

export default function New() {
  // const entryElements = item.map((entry) => {
  //         return(
  //           <Item 
  //               key = {entry.id}
  //               entry = {entry}
  //           />
  //         )
  //       })
  return (
    <>
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <NewComponent /> */}
      {/* <Head /> */}
      {/* <Appp /> */}

      {/* <main>
          <Joke 
            setup="Ryan"
            punchline="Its so hard dude to manage everything"
            upVotes={10}
          />
          <Joke 
            setup="Shrinivas"
            punchline="Its so hard dude to manage everything"
          />
          <Joke 
            punchline="i wanna hit the gym "
          />
      </main> */}

    <Index />    
    </>

  );
}