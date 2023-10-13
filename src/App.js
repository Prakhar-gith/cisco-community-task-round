import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Events from './Components/Events';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <br/>
      <Events/>
      <br/>
      <Contact/>
    </div>
  );
}

export default App;
