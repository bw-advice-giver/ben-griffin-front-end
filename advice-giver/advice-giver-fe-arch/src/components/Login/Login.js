import React from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import styled from "styled-components";
// import './Login.scss';

class Login extends React.Component {

    //set default state with empty creds obj
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

        // Handlers below

    // when a change is made to our inputs, update our state object to that change
    handleChange = e => {
        console.log(e.target.value)
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    // Login function that will prevent default, run our axiosWithAuth fn, post that auth and promise a redirect ***
    login = e => {
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
          .post('/login', this.state.credentials)
          .then(res => {
              // save the returned token to localStorage ***
            localStorage.setItem('token', res.data.payload);
            // navigate your user to your login route *** aka pushing to our protected route
            this.props.history.push('/profile');
          })
          .catch(err => console.log(err));
      };

    render() {
        return (
            <StyledDiv className="Login">
                <StyledBig>Please Log In Below</StyledBig>
                <form onSubmit={this.login}>
                {/* <div className="input-ovrd"> */}
                <StyledSmall>Username</StyledSmall>
                <StyledBox
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    // placeholder="Enter Your Username"
                    className="login-input"
                />
                <StyledSmall>Password</StyledSmall>
                    <StyledBox 
                        type="password"
                        name="password"
                        // placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        className="login-input"
                    />
                    <StyledPress className="login-btn">Login</StyledPress>
                    {/* </div> */}
                </form>
            </StyledDiv>
        )
    } //end Render

} // end Login Form

export default Login;

const StyledBig = styled.h2`
    margin-left: -45%;
    margin-bottom: -15%;
`

const StyledSmall = styled.h3`
    margin-left: -8%;
    font-size: 1.3rem;
`
const StyledBox = styled.input`
   margin-left: 2%;
   border-radius: 7px;
   background-color: whitesmoke;
   border: 1px solid #7990B1;
   padding: .8%;
   font-size: 1rem;
`
const StyledPress = styled.button`
    display: flex;
    margin-top: 5%;
    border-radius: 3px;
    padding: 1.2%;
    width: 7.5%;
    font-weight: bold;
    background-color: #3A648C;
    color: white;
    margin-left: 46%;
    
`
const StyledDiv = styled.div`
    background-color: #204963;
    border: 1.5px solid #252524;
    box-sizing: border-box;
    width: 70%;
    border-radius: 7px;
    margin-left: 15%;
    padding-bottom: 10%;
`