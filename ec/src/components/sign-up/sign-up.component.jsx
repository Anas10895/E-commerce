import React from 'react'
import FormInput from "../form/form-input.component"
import CustomButton from '../custom-button/custom-button.component'

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            userName:"",


        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:"" ,password:"", userName:"" })
    }

    handleChange = event => { 
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    render() {
        console.log(this.state)

        return (
            <div className="sign-in" onSubmit= {this.handleSubmit}>

            <h2>I don't have an account</h2>
            <span>Sign up </span>
            <form>
            <FormInput name="userName"  label="User Name"value={this.state.userName} onChange={this.handleChange} required></FormInput>



            <FormInput name="email" label="Email" value={this.state.email} onChange={this.handleChange} required></FormInput>

            <FormInput name="password" label="Password" type="password" value={this.state.password} onChange={this.handleChange} required></FormInput>

            <FormInput name="password" label="Confirm Password" type="password" value={this.state.password} onChange={this.handleChange} required></FormInput>

            <CustomButton type="submit">Sign Up </CustomButton>
            </form>     
            </div>
        )
    }
}

export default SignUp;