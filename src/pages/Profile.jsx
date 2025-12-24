import React, { useState, useRef, useEffect } from 'react';
import './Profile.css';
import Pagetitle from '../Main-Components/PageTitle';
import Sidebar from '../Main-Components/SideBar';
import TextInputField from '../Profile-Components/TextInputField';
import PinkButton from '../Main-Components/PinkButton';
import PictureUpload from '../Profile-Components/PictureUpload';
import { supabase } from '../Supabase'; // adjust path if needed

const Profilepage = ({ profile, conatctandgit }) => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({});

  // Pre-fill formData from Supabase rows
  useEffect(() => {
    const savedData = {};
    [...profile, ...conatctandgit].forEach(item => {
      if (item.input) savedData[item.Input_type] = item.input;
    });
    setFormData(savedData);
  }, [profile, conatctandgit]);

  if (!profile || !conatctandgit || profile.length === 0 || conatctandgit.length === 0) {
    return (
      <div className="mainconj">
        <Sidebar />
        <div className="mainpage1">
          <Pagetitle title="Profile" />
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  // Handle text input changes
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  // Handle image upload (optional)
  const handleImageUpload = async () => {
    if (!profileImage) return null;

    const fileName = `profile-${Date.now()}.${profileImage.name.split('.').pop()}`;
    const { data, error } = await supabase.storage
      .from('profile-images') // make sure bucket exists
      .upload(fileName, profileImage);

    if (error) {
      console.error('Image upload error:', error);
      return null;
    }

    return supabase.storage.from('profile-images').getPublicUrl(data.path).publicUrl;
  };

  // Save each input to its own row
  const handleSave = async () => {
    try {
      const imageUrl = await handleImageUpload();

      const allFields = [...profile, ...conatctandgit];

      for (const item of allFields) {
        let value = formData[item.Input_type] || '';

        // Use uploaded image URL if this field is an image
        if (item.Input_type.toLowerCase().includes('image') && imageUrl) {
          value = imageUrl;
        }

        // Update row by Input_type
        const { data, error } = await supabase
          .from('Profile')
          .update({ input: value })
          .eq('Input_type', item.Input_type);

        if (error) console.error(`Error updating ${item.Input_type}:`, error);
        else console.log(`Updated ${item.Input_type}:`, data);
      }

      alert('Profile saved successfully!');
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('Failed to save');
    }
  };

  return (
    <div className='mainconj'>
      <Sidebar />
      <div className='mainpage1'>
        <Pagetitle title="Profile" />

        <div className='theactualcontentt'>
          <div className='Welcome'>
            Welcome back, Salma
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
              {[...profile]
                .slice()
                .sort((a, b) => a.id - b.id)
                .map((item) => (
                  <TextInputField
                    key={item.id}
                    label={item.Input_type}
                    placeholder={item.placeholder}
                    value={formData[item.Input_type] || ""}
                    onChange={(e) => handleChange(item.Input_type, e.target.value)}
                  />
              ))}

              <div className='roww' style={{ display: 'flex', gap: '20px' }}>
                {[...conatctandgit]
                  .slice()
                  .sort((a, b) => a.id - b.id)
                  .map((item) => (
                    <TextInputField
                      key={item.id}
                      label={item.Input_type}
                      placeholder={item.placeholder}
                      value={formData[item.Input_type] || ""}
                      onChange={(e) => handleChange(item.Input_type, e.target.value)}
                    />
                ))}
              </div>

              <PinkButton content="Save" onClick={handleSave} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
