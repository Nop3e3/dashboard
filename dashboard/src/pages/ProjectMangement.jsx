import React, { useState, useRef } from 'react';
import './ProjectMangement.css';

import Pagetitle from '../Main-Components/PageTitle';
import Sidebar from '../Main-Components/SideBar';
import TextAreaInput from '../Profile-Components/TextArea'; // Rich Text Editor
import TextInputField from '../Profile-Components/TextInputField'; // Standard Input/Textarea
import PinkButton from '../Main-Components/PinkButton';
import PictureUpload from '../Profile-Components/PictureUpload';
import ToggleSwitch from '../Profile-Components/LanguageToggle'; // MUST BE IMPORTED

// Mock Select/Dropdown component (since you don't have a dedicated Select component)
// We'll use a standard <select> element directly in the JSX for simplicity.

const ArticleForm = () => {
    // Refs and States
    const fileInputRef = useRef(null); // Used for a generic file input trigger
    
    // Default language control remains, though not visible in the form image
    const [language, setLanguage] = useState('en'); 
    // State for all the form fields based on the image structure
    const [formData, setFormData] = useState({
        title: '',
        category: 'select-category', // Mock state for the dropdown
        brief: '', // Short description field
        mainBody: '', 
        mainImage: null,
        mainCardImage: null,
        mobileImage: null,
        otherImage: null,
        keywords: '', // Added based on form fields
        date: '',     // Added based on form fields
        time: '',     // Added based on form fields
    });

    // Handlers
    
    // ⬅️ HANDLER RE-ADDED: Toggle language state
    const handleToggleLanguage = (isActive) => {
        const newLanguage = isActive ? 'en' : 'ar';
        setLanguage(newLanguage);
    };

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    // Generic file change handler for multiple image uploads
    const handleFileChange = (imageField) => (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, [imageField]: file }));
            console.log(`Selected file for ${imageField}:`, file.name);
        }
    };

    // Labels for the fields shown in the image (assuming English only for new fields)
    const labels = {
        en: {
            mainImage: 'Main Image', title: 'Post Title', category: 'Post Category', brief: 'Post Brief',
            mainBody: 'Write your post...', mainCardImage: 'Main Card Image', mobileImage: 'Mobile Image',
            otherImage: 'Other Image',
            placeholder: {
                title: 'Enter your post title', brief: 'Enter a short summary', category: 'Select Category',
            },
        },
        ar: {
            mainImage: 'الصورة الرئيسية', title: 'عنوان المقال', category: 'تصنيف المقال', brief: 'موجز المقال',
            mainBody: 'اكتب مقالك...', mainCardImage: 'صورة البطاقة الرئيسية', mobileImage: 'صورة الجوال',
            otherImage: 'صورة أخرى',
            placeholder: {
                title: 'أدخل عنوان مقالك', brief: 'أدخل ملخصًا قصيرًا', category: 'اختر التصنيف',
            },
        },
    };
    
    // Helper to render image upload fields
    const renderImageUpload = (field, label) => (
        <div key={field} className='image-upload-section' style={{ marginBottom: '20px' }}>
             <label className="input-title">{label}</label>
            <PictureUpload 
                onClick={() => document.getElementById(`file-input-${field}`).click()} 
                fileName={formData[field] ? formData[field].name : null}
            />
            <input
                id={`file-input-${field}`}
                type="file"
                ref={fileInputRef} 
                onChange={handleFileChange(field)}
                accept="image/*"
                style={{ display: 'none' }}
            />
        </div>
    );

    const currentLabels = labels[language];

    return (
        <div className='mainconj'>
            <Sidebar />
            <div className='mainpage1'>
             <div  className='ttlcon'>   <Pagetitle title="Article" /> 
</div>
                <div className='theactualcontent'>
                    <div className='ProfileContent'>
                        
                        {/* 🌟 LANGUAGE TOGGLE POSITIONED HERE 🌟 */}
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'flex-start', 
                            alignItems: 'center', 
                            marginBottom: '30px' 
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '10px', fontSize: '14px', color: '#a0a0a0' }}>
                                    {language === 'en' ? 'EN' : 'AR'}
                                </span>
                                <ToggleSwitch 
                                    initialActive={language === 'en'} 
                                    onToggle={handleToggleLanguage} 
                                />
                            </div>
                        </div>
                        {/* 🌟 END LANGUAGE TOGGLE 🌟 */}
                        
                        
                        {/* 1. Main Image Upload (Top of the Form) */}
                        {renderImageUpload('mainImage', currentLabels.mainImage)}

                        <div className="form-fields">
                            {/* 2. Post Title (Simple Text Input) */}
                            <TextInputField
                                label={`* ${currentLabels.title}`}
                                placeholder={currentLabels.placeholder.title}
                                value={formData.title}
                                onChange={handleChange('title')}
                                fullWidth={true} 
                            />

                            {/* 3. Post Category (Mock Dropdown) */}
                            <div className='text-input-field-container full-width'>
                                <label className="input-label">* {currentLabels.category}</label>
                                <div className="input-wrapper">
                                    <select
                                        className="input-element"
                                        value={formData.category}
                                        onChange={handleChange('category')}
                                        style={{ height: '40px', padding: '0 10px' }} 
                                    >
                                        <option value="select-category" disabled>{currentLabels.placeholder.category}</option>
                                        <option value="tech">Technology</option>
                                        <option value="design">Design</option>
                                        <option value="business">Business</option>
                                    </select>
                                </div>
                            </div>
                            
                            {/* 4. Post Brief (Simple Text Input) */}
                            <TextInputField
                                label={`* ${currentLabels.brief}`}
                                placeholder={currentLabels.placeholder.brief}
                                value={formData.brief}
                                onChange={handleChange('brief')}
                                fullWidth={true}
                            />

                            {/* 5. Rich Text Editor (Main Body) - Uses TextAreaInput */}
                            <div className='main-body-label'>* {currentLabels.mainBody}</div>
                            <TextAreaInput 
                                placeholder="Start typing your article here..."
                                value={formData.mainBody}
                                onChange={handleChange('mainBody')}
                            />
                            
                            {/* Short line separator from the image */}
                            <hr style={{margin: '30px 0', border: 'none', borderTop: '1px solid #eee'}}/>
                            
                            {/* 6. Main Card Image Upload */}
                            {renderImageUpload('mainCardImage', currentLabels.mainCardImage)}
                            
                            {/* 7. Mobile Image Upload */}
                            {renderImageUpload('mobileImage', currentLabels.mobileImage)}
                            
                            {/* 8. Other Image Upload */}
                            {renderImageUpload('otherImage', currentLabels.otherImage)}

                            {/* Section for Keywords and Dates */}
                            
                         
                                <TextInputField
                                  label="Keywords"
                                    placeholder="Enter keywords"
                                    value={formData.keywords} 
                                    onChange={handleChange('keywords')}
                                    fullWidth={true}
                                />
                          

                            {/* 9. Dates (Mock up of the final section) */}
                            <div className='date-fields' style={{ display: 'flex', gap: '20px', marginTop: '20px'}}>
                                <TextInputField
                                    label="Date"
                                    placeholder="DD/MM/YYYY"
                                    value={formData.date}
                                    onChange={handleChange('date')}
                                    halfWidth={true}
                                />
                                <TextInputField
                                    label="Time"
                                    placeholder="HH:MM AM/PM"
                                    value={formData.time}
                                    onChange={handleChange('time')}
                                    halfWidth={true}
                                />
                            </div>

                            {/* Buttons at the bottom right */}
                            <div className='collu'>
                                <PinkButton content="Publish" />
                                <button type="button" className='draft-button' style={{
                                    backgroundColor: '#fff', 
                                
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

export default ArticleForm;