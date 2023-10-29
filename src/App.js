import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React, {useState} from 'react';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';
import Animals from './pages/Animals';

import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"

export default function App() {
  const [word, setWord] = useState('banana'? 'banana': "" );
  
  console.log(word);

  const handleInput = (event)=>{
    setWord(event.target.value);
  }


  return (

    <div className='App'>

{/* <nav className="nav">
        <Link to="/" className='nav-item'> Homepage</Link>
        <Link to="/animals" className='nav-item'> Animals</Link>
        <Link to="/footer" className='nav-item'> Footer</Link>
      </nav> */}
    <>
 
    <input value={word} onChange={handleInput}/>
    <h3>{word}</h3>


   
  
    <Header />
    {/* <Main greet={"maria"}/>
    <Main greet={"Zisis"}/>
    <Footer copyright="2021"/> */}



    <div>
      <img src={logo} className="App-logo" alt=''/>
    </div>
    <Btn/>
    <ModeToggler />

    <Router>
    <Routes>
      <Route path='/footer' element={<Footer />} />
      <Route path='/animals' element={<Animals />} />
    </Routes>
    </Router> 

   </>


    </div>
  );
}

