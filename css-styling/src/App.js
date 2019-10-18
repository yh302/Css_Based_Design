import React from 'react';
import Menu from './components/menuBar'
import Content from './components/content'
import Footer from './components/footer'
import Button from './components/formElements/button'
import './css/app.css'


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Button jibjab="stabME"/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
