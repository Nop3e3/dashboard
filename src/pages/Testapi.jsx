import React, { useRef } from 'react';
import './ProjectMangement.css';

import Pagetitle from '../Main-Components/PageTitle';
import Sidebar from '../Main-Components/SideBar';
import TextAreaInput from '../Profile-Components/TextArea';
import TextInputField from '../Profile-Components/TextInputField';
import PinkButton from '../Main-Components/PinkButton';
import PictureUpload from '../Profile-Components/PictureUpload';

const ProjectMangement = ({ projectfield, loading }) => {
  const mainImageRef = useRef(null);
  const mainCardImageRef = useRef(null);
  const mobileImageRef = useRef(null);
  const otherImageRef = useRef(null);

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
                
                   {projectfield && projectfield.slice(0, 8).map(field => (
             
                <TextInputField
                
                  label={field.label}
                  placeholder={field.placeholder}
                  fullWidth
                />
              ))}

          

           
              <hr className="divider" />

              {renderImageUpload('Main Card Image', mainCardImageRef)}
              {renderImageUpload('Mobile Image', mobileImageRef)}
              {renderImageUpload('Other Image', otherImageRef)}

              <TextInputField
                label="Keywords"
                placeholder="Enter keywords"
                fullWidth
              />

              <TextInputField
                label="Meta Description"
                placeholder="E.g., Explore essential UI/UX design tips..."
                fullWidth
              />

              <div className="date-fields">
                     
                
                   {projectfield && projectfield.slice(8, 12).map(field => (
             
                <TextInputField
                
                  label={field.label}
                  placeholder={field.placeholder}
                  fullWidth
                />
              ))}
              
              </div>

              <div className="collu">
                <PinkButton content="Publish" />
                                            
                 <button type="button" className='draft-button' style={{
                                    backgroundColor: '#fff', 
                                display:'flex',
                                alignItems:'center',
                                justifyItems:'center',
                                justifyContent:'center',
                                    border: '2px solid #8A1E3E',
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    color:'#8A1E3E',
                                     height: '48px',
                                     fontFamily:'Lexend Deca'


                                }}>Save as Draft</button>
                            </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ProjectMangement;
