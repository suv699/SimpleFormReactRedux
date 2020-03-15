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
	
	componentDidMount() {
		let response = fetch('http://localhost:5000/api/users').then((response)=>{
			console.log('---> fetch - ' + JSON.stringify(response));
			// return response.json();
			let res = response.json();
			console.log(JSON.stringify(res))
		});
		
		console.log(response.body)
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