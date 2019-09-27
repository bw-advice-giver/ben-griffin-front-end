import React from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

//  import './SignUp.scss';



class SignUp extends React.Component {

    //set default state with empty creds obj
    state = {
            username: "",
            password: "",
            email: "",
            adviceGiver: false,
            expertise: "",
            yearsOfExperience: '',
            age: '',
            checked: false
    };

        // Handler functions below

    // when a change is made to our inputs, update our state object to that change
    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
      };

    // signUp function that will prevent default, run our axiosWithAuth fn, post that auth and promise a redirect ***
    signUp = e => {
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
        .post('/auth/register', this.state )
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
            <div className="Signup">
                <h2>Advisee Sign Up</h2>
                <form onSubmit={this.signUp}>
                <div className="input-ovrd">
                <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Name"
                        className="sign-up-input"
                    />
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="Username"
                        className="sign-up-input"
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className="sign-up-input"
                    />
                    <input 
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email"
                        className="sign-up-input"
                    />
                    <input 
                        type="text"
                        name="interests"
                        value={this.state.interests}
                        onChange={this.handleChange}
                        placeholder="Area of Interest"
                        className="sign-up-input"
                    />
                    </div>     
                </form>
                <button to = "advisor-signup">Click here to sign up as an advisor!</button>
            </div>
        )
    } //end Render
} // end Login Form

export default SignUp;
