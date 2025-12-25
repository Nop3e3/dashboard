import React, { useState, useRef, useEffect } from 'react';
import './Profile.css';
import Pagetitle from '../Main-Components/PageTitle';
import Sidebar from '../Main-Components/SideBar';
import TextInputField from '../Profile-Components/TextInputField';
import PinkButton from '../Main-Components/PinkButton';
import PictureUpload from '../Profile-Components/PictureUpload';
import { supabase } from '../Supabase';

const Profilepage = ({ profile = [], contactAndGit = [] }) => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({});

  // Prefill inputs from Supabase
  useEffect(() => {
    const savedData = {};

    [...profile, ...contactAndGit].forEach((item) => {
      if (item.input) {
        savedData[item.Input_type] = item.input;
      }
    });

    setFormData(savedData);
  }, [profile, contactAndGit]);

  if (profile.length === 0 && contactAndGit.length === 0) {
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

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageUpload = async () => {
    if (!profileImage) return null;

    const fileName = `profile-${Date.now()}.${profileImage.name.split('.').pop()}`;

    const { data, error } = await supabase.storage
      .from('profile-images')
      .upload(fileName, profileImage);

    if (error) {
      console.error('Image upload error:', error);
      return null;
    }

    return supabase.storage
      .from('profile-images')
      .getPublicUrl(data.path).publicUrl;
  };

  const handleSave = async () => {
    try {
      const imageUrl = await handleImageUpload();
      const allFields = [...profile, ...contactAndGit];

      for (const item of allFields) {
        let value = formData[item.Input_type] || '';

        if (
          item.Input_type.toLowerCase().includes('image') &&
          imageUrl
        ) {
          value = imageUrl;
        }

        const { error } = await supabase
          .from('Profile')
          .update({ input: value })
          .eq('Input_type', item.Input_type);

        if (error) {
          console.error(`Error updating ${item.Input_type}:`, error);
        }
      }

      alert('Profile saved successfully!');
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('Failed to save');
    }
  };

  return (
    <div className="mainconj">
      <Sidebar />
      <div className="mainpage1">
        <Pagetitle title="Profile" />

        <div className="theactualcontentt">
          <div className="Welcome">
            Welcome back, Salma
            <div className="captionn">{new Date().toDateString()}</div>
          </div>

          <div className="ProfileContentt">
            {/* Image upload */}
            <div className="image-upload-section">
              <PictureUpload onClick={() => fileInputRef.current.click()} />
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) setProfileImage(file);
                }}
              />
            </div>

            <div className="form-fields">
              {[...profile]
                .sort((a, b) => a.id - b.id)
                .map((item) => (
                  <TextInputField
                    key={item.id}
                    label={item.Input_type}
                    placeholder={item.placeholder}
                    value={formData[item.Input_type] || ''}
                    onChange={(e) =>
                      handleChange(item.Input_type, e.target.value)
                    }
                  />
                ))}

              <div className="roww" style={{ display: 'flex', gap: '20px' }}>
                {[...contactAndGit]
                  .sort((a, b) => a.id - b.id)
                  .map((item) => (
                    <TextInputField
                      key={item.id}
                      label={item.Input_type}
                      placeholder={item.placeholder}
                      value={formData[item.Input_type] || ''}
                      onChange={(e) =>
                        handleChange(item.Input_type, e.target.value)
                      }
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
