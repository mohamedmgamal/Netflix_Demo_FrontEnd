import React,{Component} from 'react'
import {Router,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header'
import Step1Of3 from './components/step1of3/step1of3'
import Content from './components/content/content'
import Switch from 'react-bootstrap/esm/Switch';
import Step2Of3 from './components/step2of3/step2of3'
import Footer from './components/footer/footer'
import Plans from './components/plans/plans'
class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Header/>
       { /*<Content/>*/}
     {/* <Plans/> */}
     <Step1Of3 />
      <Footer />
      {/* <Step2Of3 /> 
      
      
       <Router> 
       <Switch>
        <Route path="/" component={Header}/>
        <Route path="/Step1Of3" component={Content}/>
      </Switch>
      
      </Router>  
      <Footer />*/}
    </React.Fragment>
  )}
}
export default App;

