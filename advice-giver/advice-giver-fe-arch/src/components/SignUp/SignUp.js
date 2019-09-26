import React from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
//  import './SignUp.scss';
 import styled from "styled-components";


class SignUp extends React.Component {

    //set default state with empty creds obj
    state = {
        credentials: {
            name: '',
            username: '',
            password: '', 
            geo: ''
        }
    };

        // Handler functions below

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

    // signUp function that will prevent default, run our axiosWithAuth fn, post that auth and promise a redirect ***
    signUp = e => {
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
          .post('/signup', this.state.credentials)
          .then(res => {
              // save the returned token to localStorage ***
            localStorage.setItem('token', res.data.payload);
            // navigate your user to your login route *** aka pushing to our protected route
            this.props.history.push('/profile');
          })
          .catch(err => console.log(err));
      };

      // Toggle User Type: Seeker or Advisor
      

    render() {
        return (
            <StyledDiv className="Signup">
                <h2>Advisee Sign Up</h2>
                <form onSubmit={this.signUp}>
                {/* <div className="input-ovrd"> */}
                <StyledBox 
                        type="text"
                        name="name"
                        value={this.state.credentials.name}
                        onChange={this.handleChange}
                        placeholder="Name"
                        className="sign-up-input"
                    />
                    <StyledBox 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="Username"
                        className="sign-up-input"
                    />
                    <StyledBox
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        className="sign-up-input"
                    />
                    <StyledBox 
                        type="text"
                        name="geo"
                        value={this.state.credentials.geo}
                        onChange={this.handleChange}
                        placeholder="Geographic Location"
                        className="sign-up-input"
                    />
                    <StyledBox 
                        type="text"
                        name="area"
                        value={this.state.credentials.geo}
                        onChange={this.handleChange}
                        placeholder="Area of Interest"
                        className="sign-up-input"
                    />
                     <StyledPress className="signup-btn">Sign Up</StyledPress>
                    
                    {/* </div> */}

                   
                </form>
                
                
                
                <StyledLink to = "advisor-signup">Click here to sign up as an advisor!</StyledLink>
            </StyledDiv>
        )
    } //end Render

} // end Login Form

export default SignUp;


const StyledLink = styled(Link)`
    color: black;
    width: 35%;
    
`

const StyledDiv = styled.div`
    border: 1.5px solid #252524;
    border-radius: 7px;
    width: 70%;
    background-color: #204963;
    margin-left: 15%;
`

const StyledBox = styled.input`
    display: flex;
    background-color: whitesmoke;
    border: 1px solid #7990B1;
    padding: .8%;
    border-radius: 7px;
    font-size: 1rem;
    margin-left: 40%;
    margin-bottom: 4%;
`

const StyledPress = styled.button`
    border-radius: 3px;
    font-weight: bold;
    background-color: #3A648C;
    color: white;
    padding: 1.2%;
    width: 10%;
    margin-bottom: 3%;
`