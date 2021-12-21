import React from 'react';
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css';
import Project from './components/project/Project';
import Skill from './components/skill/Skill';

function App() {
  const [clickMe, setClickMe] = React.useState(false);
  return (
    <div className="app-center">
     <Navbar  />
     <Header clickMe={clickMe} setClickMe={setClickMe} />
     <Skill />
     <Project />
     <Footer clickMe={clickMe} setClickMe={setClickMe} />
    </div>
  );
}

export default App;