import React from 'react'
import FormInput from "../form/form-input.component"
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:"",


        }
    }

    handleSubmit =async event => {
        event.preventDefault();
        const {displayName, email,password,confirmPassword} =this.state;
        if (password !== confirmPassword){
            alert("passowrds don't match")
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                 password
                 );

          await  createUserProfileDocument(user , {displayName})
          this.setState({
            displayName:"",
            email:"",
            password:"",
            confirmPassword:"",
          })
        } catch (error) {
            console.log(error)
            
        }

    }

    handleChange = event => { 
        const {value, name} = event.target;
        this.setState({[name]: value})
        // console.log(this.state);
        
    }
    render() {
const {displayName, email,password,confirmPassword} =this.state;
        return (
            <div className="sign-up" >

            <h2 className="title">I don't have an account</h2>
            <span>Sign up </span>
            <form className="sgin-up-form" onSubmit= {this.handleSubmit}>
           
            <FormInput 
            name="displayName"
              label="User Name"
              value={displayName}
               onChange={this.handleChange} 
               required/>



            <FormInput name="email"
             label="Email"
              value={email} 
              onChange={this.handleChange} 
              required/>

            <FormInput name="password" 
            label="Password"
             type="password"
              value={password} 
              onChange={this.handleChange} 
              required/>

            <FormInput name="confirmPassword" 
            label="Confirm Password" 
            type="password"
             value={confirmPassword}
              onChange={this.handleChange} 
              required/>

            <CustomButton type="submit">Sign Up </CustomButton>
            </form>     
            </div>
        )
    }
}

export default SignUp;