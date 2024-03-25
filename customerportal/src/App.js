import logo from './logo.svg';
import './App.css';
import {Component, useEffect, useState} from "react";
import Logo from './components/Logo/Logo'
import Banner from './components/Banner/Banner'
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Dashboard from "./components/dashboard/dashboard";
import {useSelector} from "react-redux";
import SignupReducer from "./reduxsrc/reducers/signupreducer";
import Duepayment from "./components/duepayment/duepayment";
import Receipts from "./components/receipts/receipts";


function App() {
//initializing state
    const[currentTime,setCurrentTime]=
        useState(new Date())
   const[isRegister,setIsRegister]=useState(false);
   const[isSubmit,setIsSubmit]=useState(false);
  //  const customerState=useSelector((state)=>state.SignupReducer);
    function handleChange(newValue){
        setIsRegister(newValue)
    }
    function handleSubmit(value){
        setIsSubmit(value);
    }

//updating state
    useEffect(() => {
        setInterval(()=>{
            setCurrentTime(new Date())
        },1000)
    }, [currentTime]);

  return (
    <div className="App">
       {/* {
            customerState.isLoaded?
                <>
                    <h4>{customerState.customer.name.firstName}</h4>
                </>:
                <>
                    <h4>No Registered User</h4>
                </>
        }*/}


        {(!isSubmit) && (
            <div>
      <header className="App-header">
        <Logo/>
        <h1 className="multicolortext">Customer Portal</h1>
        <h4 className="timer">{currentTime.toLocaleTimeString()}</h4>
      </header>
      <section >

          <div className="Form-header">
          <Banner/>
              {(!isRegister)?<LoginForm registerStatus={handleChange} submitStatus={handleSubmit}/>:<Registration />}
          </div>
      </section>
      </div>
          )}
        {(isSubmit)&&(
      <section>
          <Routes>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              <Route path="/duepayment" element={<Duepayment/>}></Route>
              <Route path="/receipts" element={<Receipts/>}></Route>
              <Route path="/" element={<App/>}></Route>
          </Routes>
      </section>
        )
        }
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
