import React from 'react'
import './Login.css'
import { Button } from "@material-ui/core"

function Login (){
    const signIn = () =>{

    }
    return (

        <div className="login">
             <div className="login__logo">
          <img 
          src=""
          alt="logo"
          />
          <h3> Swift Media</h3>
            </div>
            <Button type="submit" onClick={signIn}
            >
                Sign In
            </Button>
        </div>

    )
}
export default Login