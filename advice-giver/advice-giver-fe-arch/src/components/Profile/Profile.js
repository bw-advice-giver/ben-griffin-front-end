import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


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

        //need an endpint to save to
    }


    // Possibly Holding state

    // PUT and DELETE questions Request

    return (
        <div className="profile">
            <h1>Welcome To Your Profile</h1>

            <h3>Name {profileEdit.name}</h3>
            <h3>Age {profileEdit.age}</h3>
            <h3>Gender {profileEdit.gender}</h3>
            <h3>Bio {profileEdit.bio}</h3>
            <h3>Interests {profileEdit.interests}</h3>
            <h3>Social Media {profileEdit.socialMedia}</h3>

            <button onClick={editProfile}>Edit Profile</button>

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
                        className="edit-profile"
                    >
                        Submit
                    </button>
                </form>
             )
            }

        </div>
    )
}

export default Profile;
