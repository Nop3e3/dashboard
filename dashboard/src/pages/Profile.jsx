import React, { useState, useRef } from 'react';
import './Profile.css';
import Pagetitle from '../Main-Components/PageTitle';
import Sidebar from '../Main-Components/SideBar';
import TextAreaInput from '../Profile-Components/TextArea';
import TextInputField from '../Profile-Components/TextInputField';
import ToggleSwitch from '../Profile-Components/LanguageToggle'; 
import PinkButton from '../Main-Components/PinkButton';
import PictureUpload from '../Profile-Components/PictureUpload';

const UserForm = () => {
    // Refs and States
    const fileInputRef = useRef(null);
    // language: 'en' will map to true (active/right side), 'ar' to false (inactive/left side)
    const [language, setLanguage] = useState('en'); 
    const [isPublic, setIsPublic] = useState(true); 
    const [profileImage, setProfileImage] = useState(null);

    const [formData, setFormData] = useState({
        name: '', brief1: '', brief2: '', experience: '',
        skills: '', github: '', contact: '',
    });

    // Handlers
    
    // CORRECTED HANDLER: Toggles language based on the boolean state from ToggleSwitch
    const handleToggleLanguage = (isActive) => {
        const newLanguage = isActive ? 'en' : 'ar';
        setLanguage(newLanguage);
    };
    
    // Existing handler for the separate Public/Private switch
    const handleTogglePublic = (newState) => {
        setIsPublic(newState);
        console.log(`Profile visibility set to: ${newState ? 'Public' : 'Private'}`);
    }

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleImageUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImage(file);
            console.log('Selected file:', file.name);
        }
    };

    // Labels and Placeholders (Unchanged)
    const labels = {
        en: {
            name: 'Name', brief1: 'Brief 1', brief2: 'Brief 2', experience: 'Experience',
            skills: 'Skills', github: 'GitHub demo link', contact: 'Contact info',
            placeholder: {
                name: 'E.g., Salma', brief1: 'E.g., Intro About yourself', brief2: 'E.g., Details About Yourself',
                experience: 'E.g., Internships', skills: 'E.g., UX Research', github: 'E.g., https://github.com/',
                contact: 'E.g., Phone Number',
            },
        },
        ar: {
            name: 'الاسم', brief1: 'موجز 1', brief2: 'موجز 2', experience: 'الخبرة',
            skills: 'المهارات', github: 'رابط GitHub', contact: 'معلومات الاتصال',
            placeholder: {
                name: 'مثال: سلمى', brief1: 'مثال: مقدمة عن نفسك', brief2: 'مثال: تفاصيل عن نفسك',
                experience: 'مثال: التدريب', skills: 'مثال: أبحاث تجربة المستخدم', github: 'مثال: https://github.com/',
                contact: 'مثال: رقم الهاتف',
            },
        },
    };

    return (
        <div className='mainconj'>
            <Sidebar />
            <div className='mainpage1'>
                <Pagetitle title="Profile" />

                <div className='theactualcontent'>
                    <div className='ProfileContent'>
                        {/* Welcome section */}
                        <div className='Welcome'>
                            Welcome back, Salma
                            <div className='captionn'>Tue, 07 Nov 2025</div>
                        </div>

                        {/* Language and Toggle Switch Controls */}
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                            
                            {/* 1. LANGUAGE TOGGLE (CORRECTED: Uses the sliding ToggleSwitch component) */}
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {/* Label changes based on active state */}
                                <span style={{ marginRight: '10px', fontSize: '14px', color: '#a0a0a0' }}>
                                    {language === 'en' ? 'EN' : 'AR'}
                                </span>
                                <ToggleSwitch 
                                    // 'en' maps to active (right), 'ar' maps to inactive (left)
                                    initialActive={language === 'en'} 
                                    onToggle={handleToggleLanguage} 
                                />
                            </div>
                            
                         
                        </div>

                        {/* Image Upload Component */}
                        <div className='image-upload-section'>
                            <PictureUpload onClick={handleImageUploadClick} />
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept="image/*"
                                style={{ display: 'none' }}
                            />
                        </div>
                        
                        {/* Form fields (Inputs) */}
                        <div className="form-fields">
                            {/* ... (All your input fields remain the same) ... */}
                            <TextAreaInput label={labels[language].name} placeholder={labels[language].placeholder.name} value={formData.name} onChange={handleChange('name')} />
                            <TextAreaInput label={labels[language].brief1} placeholder={labels[language].placeholder.brief1} value={formData.brief1} onChange={handleChange('brief1')} />
                            <TextAreaInput label={labels[language].brief2} placeholder={labels[language].placeholder.brief2} value={formData.brief2} onChange={handleChange('brief2')} />
                            <TextAreaInput label={labels[language].experience} placeholder={labels[language].placeholder.experience} value={formData.experience} onChange={handleChange('experience')} />
                            
                            <TextInputField
                                label={labels[language].skills}
                                placeholder={labels[language].placeholder.skills}
                                value={formData.skills}
                                onChange={handleChange('skills')}
                                isTextArea={true}
                                fullWidth={true}
                            />
                            
                            {/* GitHub & Contact (Two Half-Width Fields) */}
                            <div className='roww' style={{ display: 'flex', gap: '20px' }}> 
                                <TextInputField
                                    label={labels[language].github}
                                    placeholder={labels[language].placeholder.github}
                                    value={formData.github}
                                    onChange={handleChange('github')}
                                    halfWidth={true}
                                />
                                <TextInputField
                                    label={labels[language].contact}
                                    placeholder={labels[language].placeholder.contact}
                                    value={formData.contact}
                                    onChange={handleChange('contact')}
                                    halfWidth={true}
                                />
                            </div>
<PinkButton  content="Save"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;