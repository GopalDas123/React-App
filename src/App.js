import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './new.css';

function App(data){
  return <div>
    <center><h1 className="data">This Is Made By {data.name} & My Age Is {data.age -5} </h1></center>
  </div>
}

export default App;
