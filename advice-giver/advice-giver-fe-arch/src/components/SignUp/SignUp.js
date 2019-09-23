import React from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

class SignUp extends React.Component {

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

    // signUp function that will prevent default, run our axiosWithAuth fn, post that auth and promise a redirect ***
    signUp = e => {
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
          .post('/login', this.state.credentials)
          .then(res => {
              // save the returned token to localStorage ***
            localStorage.setItem('token', res.data.payload);
            // navigate your user to your login route *** aka pushing to our protected route
            this.props.history.push('/protected');
          })
          .catch(err => console.log(err));
      };

    render() {
        return (
            <div className="Login">
                <h2>Sign Up</h2>
                <form onSubmit={this.signUp}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="Email"
                    />

                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                </form>
                <button className="login-btn">Login</button>
            </div>
        )
    } //end Render

} // end Login Form

export default SignUp;
