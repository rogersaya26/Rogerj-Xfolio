import React, {useState} from 'react';
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Project from './components/project/Project';
import Skill from './components/skill/Skill';
import './App.css';


function App() {
  const [clickMe, setClickMe] = useState(false);
  return (
    <div className="app-center">
     <Navbar clickMe={clickMe} setClickMe={setClickMe} />
     <Header clickMe={clickMe} setClickMe={setClickMe} />
     <Skill />
     <Project />
     <Footer clickMe={clickMe} setClickMe={setClickMe} />
    </div>
  );
}

export default App;