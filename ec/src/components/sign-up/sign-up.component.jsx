import React from 'react'

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
            <input name="userName" value={this.state.userName} onChange={this.handleChange} required></input>
            <label>User Name</label>



            <input name="email" value={this.state.email} onChange={this.handleChange} required></input>
            <label>Email</label>

            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required></input>
            <label>Password</label>

            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required></input>
            <label>Confirm Password</label>

            <input type="submit" value="submit"/>
            </form>     
            </div>
        )
    }
}

export default SignUp;