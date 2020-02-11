import React, { Component } from 'react';
import Input from '../components/Input/Input';
import { MyButton } from '../components/Button/Button';

class LoginForm extends Component {
    constructor(props){
        super(props);
    };
    state = {
        login: '',
        password: ''
    }
    onHandleLogin = () => {
        console.log('--->>> log in ' + JSON.stringify(this.state));
    }
    toogleChange = (target) => {
        console.log(' -- > ' + target.name);
        this.setState({[target.name]: target.value})
    }
    

    render() {
        return (
        <div className='login-container'>
            <h1>Login Form</h1>
            <Input
                type="login"
                value="login"
                title="Login"
                onChange={this.toogleChange}
            />
            <Input
                type="password"
                value="password"
                title="Password"
                onChange={this.toogleChange}
            />
            <MyButton title="Log In" onClick={this.onHandleLogin}/>
        </div>
        );
    };
};

export default LoginForm;