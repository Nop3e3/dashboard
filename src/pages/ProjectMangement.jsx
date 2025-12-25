import React, { useRef, useState } from 'react';
import './ProjectMangement.css';

import Pagetitle from '../Main-Components/PageTitle';
import Sidebar from '../Main-Components/SideBar';
import TextAreaInput from '../Profile-Components/TextArea';
import TextInputField from '../Profile-Components/TextInputField';
import PinkButton from '../Main-Components/PinkButton';
import PictureUpload from '../Profile-Components/PictureUpload';

import { supabase } from "../Supabase";

const ProjectMangement = ({ projectfield, loading }) => {
  const mainImageRef = useRef(null);
  const mainCardImageRef = useRef(null);
  const mobileImageRef = useRef(null);
  const otherImageRef = useRef(null);

  const [formValues, setFormValues] = useState({});

  // Capture changes
  const handleChange = (fieldName, value) => {
    if (!fieldName) return;
    setFormValues(prev => ({ ...prev, [fieldName]: value }));
  };

  // Publish handler
  const handlePublish = async () => {
    console.log("Attempting to publish project...");
    console.log("Form values being sent:", formValues);

    // Strip out id to avoid duplicate key errors
    const { id, ...valuesWithoutId } = formValues;

    const { data, error } = await supabase
      .from("uxprojects")
      .insert([valuesWithoutId]);

    if (error) {
      console.error("Insert failed:", error.message, error.details, error.hint);
      alert("Failed to publish project");
    } else {
      console.log("Insert succeeded:", data);
      alert("Project published successfully!");
    }
  };

  // Show loading state if data is still being fetched
  if (loading || !projectfield || projectfield.length === 0) {
    return (
      <div className="mainconj">
        <Sidebar />
        <div className="mainpage page">
          <Pagetitle title="Project Management" />
          <p>Loading projects...</p>
        </div>
      </div>
    );
  }

  const renderImageUpload = (label, ref) => (
    <div className="image-upload-section">
      <label className="input-title">{label}</label>
      <PictureUpload onClick={() => ref.current.click()} fileName={null} />
      <input type="file" ref={ref} accept="image/*" hidden />
    </div>
  );

  return (
    <div className="mainconj">
      <Sidebar />
      <div className="mainpage1">
        <div className="ttlcon">
          <Pagetitle title="Project Management" />
        </div>
        <div className="theactualcontent">
          <div className="ProfileContent">
            {renderImageUpload('Main Image', mainImageRef)}

            <div className="form-fields">
              {/* First 8 fields */}
              {projectfield && projectfield.slice(0, 8).map(field => (
                <TextInputField
                  key={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  fullWidth
                  onChange={(e) => handleChange(field.field_name, e.target.value)}
                />
              ))}

              <hr className="divider" />

              {renderImageUpload('Main Card Image', mainCardImageRef)}
              {renderImageUpload('Mobile Image', mobileImageRef)}
              {renderImageUpload('Other Image', otherImageRef)}

              {/* Extra fields */}
              <TextInputField
                label="Keywords"
                placeholder="Enter keywords"
                fullWidth
                onChange={(e) => handleChange("keywords", e.target.value)}
              />

              <TextInputField
                label="Meta Description"
                placeholder="E.g., Explore essential UI/UX design tips..."
                fullWidth
                onChange={(e) => handleChange("meta_description", e.target.value)}
              />

              <div className="date-fields">
                {projectfield && projectfield.slice(9, 13).map(field => (
                  <TextInputField
                    key={field.id}
                    label={field.label}
                    placeholder={field.placeholder}
                    fullWidth
                    onChange={(e) => handleChange(field.field_name, e.target.value)}
                  />
                ))}
              </div>

              <div className="collu">
                <PinkButton content="Publish" onClick={handlePublish} />
                <button
                  type="button"
                  className="draft-button"
                  style={{
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #8A1E3E',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    color: '#8A1E3E',
                    height: '48px',
                    fontFamily: 'Lexend Deca'
                  }}
                >
                  Save as Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMangement;
