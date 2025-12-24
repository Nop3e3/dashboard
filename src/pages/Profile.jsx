import React, { useState, useRef } from 'react';
import './Profile.css';
import Pagetitle from '../Main-Components/PageTitle';
import Sidebar from '../Main-Components/SideBar';
import TextAreaInput from '../Profile-Components/TextArea';
import TextInputField from '../Profile-Components/TextInputField';
import PinkButton from '../Main-Components/PinkButton';
import PictureUpload from '../Profile-Components/PictureUpload';

const Profilepage = ({ profile, conatctandgit }) => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);

if (profile === null || conatctandgit === null)
     { return ( <div className="mainconj">
         <Sidebar /> <div className="mainpage1">
             <Pagetitle title="Profile" /> 
             <p>Loading profile...</p> </div> 
             </div> ); }
  return (
    <div className='mainconj'>
      <Sidebar />
      <div className='mainpage1'>
        <Pagetitle title="Profile" />

        <div className='theactualcontentt'>
          <div className='Welcome'>
            {/* Supabase returns arrays, so use first record */}
            Welcome back, {profile[0]?.name || "User"}
            <div className='captionn'>{new Date().toDateString()}</div>
          </div>

          <div className='ProfileContentt'>
            {/* Image Upload */}
            <div className='image-upload-section'>
              <PictureUpload onClick={() => fileInputRef.current.click()} />
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) setProfileImage(file);
                }}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </div>

            <div className="form-fields">
              {profile.map((profile) => (
                <TextInputField
                  key={profile.id}
                  label={profile.Input_type}
                  placeholder={profile.placeholder}
                />
              ))}

              <div className='roww' style={{ display: 'flex', gap: '20px' }}>
                {conatctandgit.map((conatctandgit) => (
                  <TextAreaInput
                    key={conatctandgit.id}
                    label={conatctandgit.Input_type}
                    placeholder={conatctandgit.placeholder}
                  />
                ))}
              </div>

              <PinkButton content="Save" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
