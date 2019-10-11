import React from 'react';
import Menu from './components/menuBar'
import Content from './components/content'
import Footer from './components/footer'
import './css/app.css'


function App() {
  return (
    <div className="App">
      <Menu/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
