import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Employees from './components/employees/Employees'
import Infobox from './components/infobox/Infobox'
import './App.css';
import context from './context';

class App extends React.Component{
  
  render(){
    return (
      <context.Provider value="light">
        <div>
          <Header />
          <div className="flex">
            <Employees />
            <Infobox />
          </div>
          <Footer />
        </div>
      </context.Provider>
    );
  }
  
}


export default App;
