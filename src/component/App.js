import '../stylesheet/index.css';
import Sidebar from './Sidebar';
import Main from './Main';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isOpen:true
    };
  }
  render(){
    return (
      <div className='container'>
        <Sidebar/>
        <Main />
      </div>
    );
  }
}

export default App;
