import React, { useState } from "react";
import Pagetitle from '../Main-Components/PageTitle';
import PictureUpload from '../Profile-Components/PictureUpload';
import Sidebar from '../Main-Components/SideBar';
import {
  Eye,
  EyeOff,
  Lock,
  User,
} from "lucide-react";

import "./SettingsForm.css";

export default function SettingsForm() {
  const [fullName, setFullName] = useState("Salma Mohammed");
  const [email, setEmail] = useState("salma.mohammed@company.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [biometricLogin, setBiometricLogin] = useState(true);

  const [profileImage, setProfileImage] = useState(null);

  const handleSave = () => alert("Settings Saved");
  const handleLogout = () => alert("Logged Out");

  const handleDeleteAccount = () => {
    const confirmed = window.confirm("Are you sure you want to delete your account?");
    if (confirmed) alert("Account deleted");
  };

  return (
    <div className="mainconj">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Page */}
      <div className="mainpage">
        <Pagetitle title="Dashboard" />

        <div className="conty">
          <div className="settings-container">

            {/* Account Settings */}
            <div className="card">
              <div className="card-header">
                <User className="icon" />
                <div className="h">Account Settings</div>
              </div>

              <div className="input-group">
                <label className="label">Full Name</label>
                <input
                  className="input-field"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                />
              </div>

              <div className="input-group">
                <label className="label">Email Address</label>
                <input
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>

              <div className="profile-section">
                <label className="label">Profile Picture</label>
                <div className="profile-wrapper">
                  <div className="profile-avatar">
                    {profileImage ? (
                      <img
                        src={URL.createObjectURL(profileImage)}
                        alt="Profile"
                        className="avatar-img"
                      />
                    ) : (
                      "SJ"
                    )}
                  </div>

                  {/* PictureUpload component */}
                  <PictureUpload
                    value={profileImage}
                    onChange={setProfileImage}
                  />
                </div>
              </div>
            </div>

            {/* Login & Security */}
            <div className="card">
              <div className="card-header">
                <Lock className="icon" />
                <div>Login & Security</div>
              </div>

              <h3 className="sub-title">Change Password</h3>

              <div className="input-group">
                <label className="label">Current Password</label>
                <div className="input-group">
                  <input
                    className="input-field"
                    type={showPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <button
                    className="password-toggle"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              <div className="input-group">
                <label className="label">New Password</label>
                <input
                  className="input-field"
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label className="label">Confirm New Password</label>
                <input
                  className="input-field"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button className="button-primary" onClick={handleSave}>
                Update Password
              </button>

              <div className="divider" />

              <div className="toggle-row">
                <div>
                  <p className="label-bold">Two-Factor Authentication</p>
                  <p className="desc">Add an extra layer of security</p>
                </div>
                <div
                  className={`toggle ${twoFactorAuth ? "active" : ""}`}
                  onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                >
                  <div className="toggle-circle" />
                </div>
              </div>

              <div className="toggle-row">
                <div>
                  <p className="label-bold">Biometric Login</p>
                  <p className="desc">Use fingerprint or face login</p>
                </div>
                <div
                  className={`toggle ${biometricLogin ? "active" : ""}`}
                  onClick={() => setBiometricLogin(!biometricLogin)}
                >
                  <div className="toggle-circle" />
                </div>
              </div>

              <button className="delete-btn" onClick={handleDeleteAccount}>
                Delete Account
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
