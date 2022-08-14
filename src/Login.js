import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import "./Login.css"
import { auth } from './firebase';

function Login() {
     const [email, setEmail] = useState('');
     const [password, setPassword]= useState("");
     const signIn = e => {
        e.preventDefault();
        //some fancy firebase login shitttt.....
     }
     const register = e => {
        e.preventDefault();
        //do some fancy firebase register
        auth
            .createUserWithEmaiAndPassword(email,password)
            .then( (auth) => {
                console.log(auth);
            })
            .catch(error => alert(error.message))
     }
  return (
    <div className= "login"> 
        <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>
        <div className="login__container">
            <h1>Sign in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input value={email} type="text" onChange = { e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input value ={password} type="password" onChange= {e => setPassword(e.target.value)}/>
                <button type="submit" onClick={signIn}className='login__signInButton'>Sign In</button>
            </form>
            <p>By signing-in you agrree to the AMAZON fAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice , our Cookies Notiece and our Interest_Based Ads Notice.</p>
            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
        
    </div>
  )
}

export default Login