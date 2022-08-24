import React,{useEffect} from "react"
import './App.css';
import Header from "./Header.js"
import Home from "./Home.js"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Checkout from './Checkout';
import Login from "./Login";
import {getAuth , onAuthStateChanged} from "./firebase"
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider"
import Payment from "./Payment.js"

function App() {

  const [{basket},dispatch] = useStateValue();

  useEffect(() => {

       const auth = getAuth();
        onAuthStateChanged(auth, (user) => {

          console.log("the current user is :" , user )

        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log("the user is filled ")
          dispatch({
                  type: "SET_USER",
                  user: user
                });
      
          } else {
            console.log("the user is not filled")

          dispatch({
                  type:"SET_USER",
                  user:null,
                })
          }
      });
    
    // auth.onAuthStateChanged((authUser) => {
    //   console.log("the current user is", authUser);

    //   if(authUser){
    //     dispatch({
    //       type: "SET_USER",
    //       user: authUser
    //     });
    //   }else{
    //     //the user is logged out 
    //     dispatch({
    //       type:"SET_USER",
    //       user:null,
    //     })
    //   }
      
    // })

  }, [])
  
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
          <Route exact path="/payment"element={
            <>
            <Header/>
            {/* <h1>I am the payment router</h1> */}
            <Payment/>
            </>
            }
          />
         
        </Routes>
        
      </div>
    </Router>
 
  );
}

export default App;
