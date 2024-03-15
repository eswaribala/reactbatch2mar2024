import logo from './logo.svg';
import './App.css';
import {Component, useEffect, useState} from "react";
import Logo from './components/Logo/Logo'
import Banner from './components/Banner/Banner'
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Dashboard from "./components/dashboard/dashboard";


function App() {
//initializing state
    const[currentTime,setCurrentTime]=
        useState(new Date())
  //  const[isRegister, setIsRegister]=useState(false);
   // const[isSubmit, setIsSubmit]=useState(false);
   /* function handleRegister(newValue) {
        setIsRegister(newValue);
    }

    function handleSubmit(newValue) {
        setIsSubmit(newValue);
        alert(isSubmit)
    }*/
//updating state
    useEffect(() => {
        setInterval(()=>{
            setCurrentTime(new Date())
        },1000)
    }, [currentTime]);

  return (
    <div className="App">

      <header className="App-header">
        <Logo/>
        <h1 className="multicolortext">Customer Portal</h1>
        <h4 className="timer">{currentTime.toLocaleTimeString()}</h4>
      </header>
      <section >

          <div className="Form-header">
          <Banner/>
         <LoginForm/>
          </div>
    
      </section>

    </div>
  );
}

export default App;

/*
export class App extends Component{


    constructor(props, context) {
        super(props, context);
        this.state={
            currentTime: new Date()
        }

    }
    timerEvent=()=>{
        this.setState({
            currentTime: new Date()
        })
    }

    componentDidMount() {
        //super.componentDidMount();
        setInterval(this.timerEvent,1000)
    }

    render() {
    return(
        <div className="App">
          <header>
          <h1>Customer Portal</h1>
          <h4>{this.state.currentTime.toLocaleTimeString()}</h4>
          </header>
        </div>
    )
  }
}
*/
