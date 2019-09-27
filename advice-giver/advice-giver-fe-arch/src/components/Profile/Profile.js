 import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import './Profile.scss';


// initial profile state
const initialProfile = {
    name: '', 
    age: '', 
    gender: '', 
    bio: '', 
    interests: '',
    socialMedia: '', 
}

const Profile = (props) => {

    // STATE    
    const [editing, setEditing] = useState(false)
    const [profileEdit, setprofileEdit] = useState(initialProfile);

    // Handler Functions 

    // Form Submission
    const handleSubmit = e => {
        e.preventDefault();
        setprofileEdit({
            ...profileEdit,
            [e.target.name]: e.target.value       
        })
        console.log('You submitted successfully')
    }

    // Edit profile function
    const editProfile = e => {
        e.preventDefault();
        setEditing(true);
        console.log('setEditing now === true')
    };

    // Save Profile edits
    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post(`https://advice-giver-backend.herokuapp.com/messages`, profileEdit )
        .then(res => console.log('here is our PUT res', res))
        .catch()
        //need an endpint to local storage
    }


    return (
<div className="profile-wrapper">


<div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Welcome To Your Profile</span>
          <p>Name: {profileEdit.name}</p>
          <p>Age: {profileEdit.age}</p>
          <p>Gender: {profileEdit.gender}</p>
          <p>Bio: {profileEdit.bio}</p>
          <p>Interests: {profileEdit.interests}</p>
          <p>Social Media: {profileEdit.socialMedia}</p> 
          <div>
           <button onClick={editProfile} className="edit-btn">Edit Profile</button>
          </div>
        </div>
        {/* <div className="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div> */}
        </div> 
    </div>
</div>
            <div className="edit-profile-form">
            {editing && (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={e => {
                            setprofileEdit({ ...profileEdit, 
                                name: e.target.value })
                        }}
                        value={profileEdit.name}
                        placeholder="Name"
                    />
                    <input
                        type="number"
                        onChange={e => {
                            setprofileEdit({ ...profileEdit, 
                                age: e.target.value
                            })
                        }}
                        value={profileEdit.age}
                        placeholder="Age"
                    />
                    <input
                        type="text"
                        onChange={e => {
                            setprofileEdit({ ...profileEdit, 
                                gender: e.target.value
                            })
                        }}
                        value={profileEdit.gender}
                        placeholder="Gender"
                    />
                    <input
                        type="text"
                        onChange={e => {
                            setprofileEdit({ ...profileEdit, 
                                bio: e.target.value 
                            })
                        }}
                        value={profileEdit.bio}
                        placeholder="Bio"
                    />
                    <input
                        type="text"
                        onChange={e => {
                            setprofileEdit({ ...profileEdit, 
                                interests: e.target.value
                            })
                        }}
                        value={profileEdit.interests}
                        placeholder="Interests"
                    />
                    <input
                        type="text"
                        onChange={e => {
                            setprofileEdit({ ...profileEdit, 
                                socialMedia: e.target.value 
                            })
                        }}
                        value={profileEdit.socialMedia}
                        placeholder="Social Media (not required)"
                    />
                    <button
                        className="edit-profile-btn"
                        onClick={saveEdit}
                    >
                        Save
                    </button>
                </form>
             )
            }
            </div>
        </div>
    )
}

export default Profile;
