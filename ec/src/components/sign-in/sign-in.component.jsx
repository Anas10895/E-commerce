import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import "./sign-in.styles.scss"
import FromInput from '../form/form-input.component'

import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",

        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:"" ,password:"" })

    }

    handleChange = event => { 
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    render() {
        console.log(this.state)
        return (
          <div className="sign-in" onSubmit={this.handleSubmit}>
            <h2>I alredy have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
              <FromInput
                name="email"
                label="Email"
                value={this.state.email}
                handleChange={this.handleChange}
                required
              ></FromInput>

              <FromInput
                name="password"
                type="password"
                label="Password"
                value={this.state.password}
                handleChange={this.handleChange}
                required
              ></FromInput>

              <div className="buttons">
                <CustomButton type="submit">Sign In</CustomButton>

                <CustomButton onClick={signInWithGoogle} signInWithGoogle>
                  Sign In With Google
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;