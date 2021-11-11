import React from 'react';
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css';

function App() {
  const [clickMe, setClickMe] = React.useState(false);
  return (
    <div className="App">
     <Navbar  />
     <Header clickMe={clickMe} setClickMe={setClickMe} />
     <Footer clickMe={clickMe} setClickMe={setClickMe} />
    </div>
  );
}

export default App;

/* 

import logo from './logo.svg';

<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>

</header>

*/
