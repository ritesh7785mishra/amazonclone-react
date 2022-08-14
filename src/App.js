import React from "react"
import './App.css';
import Header from "./Header.js"
import Home from "./Home.js"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Checkout from './Checkout';
import Login from "./Login";

function App() {
  return (
    // following BEM convention of classNames
    <Router>
      <div className="app">
      
        <Routes>
          <Route exact path="/login" element ={
            <Login/>
          }/>
          <Route exact path="/"element={
            <>
            <Header/>
            <Home/>
            </>
            }
          />
          <Route exact path="/checkout"element={
            <>
            <Header/>
            <Checkout/>
            </>
            }
          />
         
        </Routes>
        
      </div>
    </Router>
 
  );
}

export default App;
