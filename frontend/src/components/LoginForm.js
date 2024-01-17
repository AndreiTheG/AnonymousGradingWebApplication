import React, {Component} from 'react';
import {Link, Navigate} from 'react-router-dom';
import axios from 'axios';

import classes from './LoginForm.css'

class LoginForm extends Component {

    state = {
        loggedIn: false
    }

    postDataHandler = () => {
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:3001/api/v1/auth/login', data).then(response => {
            localStorage.setItem('token', response.data.token);
            if (response.status === 200) {
                this.setState({ loggedIn: true });
            }

        }).catch(err => console.log(err));
    }

    render() {
        if (this.state.loggedIn) {
            return (<Navigate to="/" />);
        }
        return (
            <div className={classes.Login}>
                <div className={classes.All}>
                    <div id="Partea Dreapta" className={classes.Dreapta}>
                        <p className={classes.Welcome}>Greetings!
                    </p>
                        <p className={classes.DescDreapta}>Enter your personal details and journey with us</p>

                        <Link to="/start/register">
                            <button className={classes.ButonDreapta}>
                                SIGN UP
                        </button>
                        </Link>

                    </div>

                    <div className={classes.Stanga}>
                        <div id="Partea Stanga" className={classes.St}>

                            <br></br>
                            <div className={classes.Cercuri} >
                                <p>Sign in</p>
                            </div>


                            <br></br>
                            <p className={classes.para}>Use your email and password to login:</p>

                            <div className={classes.DrGri}>
                                <input
                                    className={classes.inputReg}
                                    placeholder="Email"
                                    onChange={(event) => this.setState({ email: event.target.value })}
                                ></input>
                            </div>
                            <div className={classes.DrGri}>
                                <input type="password"
                                    className={classes.inputReg}
                                    placeholder="Password"

                                    onChange={(event) => this.setState({ password: event.target.value })}></input>
                            </div>

                            <Link to="/start/main-page">
                            <button
                                className={classes.ButonSignUp}
                                onClick={this.postDataHandler}
                            >
                                SIGN IN
                            </button>
                            </Link>
                            <Link to='/start/forgotpassword'
                                style={{ textDecoration: 'none' }}>
                                <p
                                    className={classes.para1}
                                    onClick={this.redirectToForgotPassword}
                                >Forgot Password</p>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default LoginForm;


// import React from 'react'
// // import 'antd/dist/antd.css';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import axios from 'axios'


// export default function Login() {
//     const onFinish = value => {
//         const {username, password} = value;
//         axios.post('http://localhost:3001/validatePassword', {username, password})
//         .then(res => {
//             if (res.data.validation) {
//                 alert('Your password is correct, Thak you for your service')
//             } else {
//                 alert('Your password is not correct. Please try again')
//             }
//         })
//     }

//     return (
//         <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            
//         <div style={{width: 400}}>
//             <h1 style={{textAlign: 'center'}}>Login</h1>
//         <Form
//                 name="normal_login"
//                 className="login-form"
//                 initialValues={{
//                     remember: true,
//                 }}
//                 onFinish={onFinish}
//                 >
//                 <Form.Item
//                     name="username"
//                     rules={[
//                     {
//                         required: true,
//                         message: 'Please input your Username!',
//                     },
//                     ]}
//                 >
//                     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
//                 </Form.Item>
//                 <Form.Item
//                     name="password"
//                     rules={[
//                     {
//                         required: true,
//                         message: 'Please input your Password!',
//                     },
//                     ]}
//                 >
//                     <Input
//                     prefix={<LockOutlined className="site-form-item-icon" />}
//                     type="password"
//                     placeholder="Password"
//                     />
//                 </Form.Item>
//                 <Form.Item>
//                     <Form.Item name="remember" valuePropName="checked" noStyle>
//                     <Checkbox>Remember me</Checkbox>
//                     </Form.Item>

//                     <a className="login-form-forgot" href="">
//                     Forgot password
//                     </a>
//                 </Form.Item>

//                 <Form.Item>
//                     <Button type="primary" htmlType="submit" className="login-form-button">
//                     Log in
//                     </Button>
//                     Or <a href="">register now!</a>
//                 </Form.Item>
//             </Form>
//             </div>
//         </div>
//     )
// }