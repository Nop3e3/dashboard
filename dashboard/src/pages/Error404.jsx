import React from "react";
import { Home, Search, ArrowLeft, AlertCircle } from "lucide-react";
import "./Error404.css";

export default function ErrorPage() {
  return (
    <div className="error-page">
      {/* Background Decorations */}
      <div className="bg-circle bg-circle-1" />
      <div className="bg-circle bg-circle-2" />

      <div className="error-container">
        {/* Main Card */}
        <div className="error-card">
          <div className="error-grid">
            {/* Left Side */}
            <div className="error-left">
              <div className="error-404-wrapper">
                <h1 className="error-404">404</h1>
                <span className="pulse-dot" />
                <span className="shadow-dot" />
              </div>
     
            </div>

            {/* Right Side */}
            <div className="error-right">
              <div className="error-tag">
                <AlertCircle className="icon" />
                <span>Page Not Found</span>
              </div>

              <h2>Oops! Lost in Space</h2>
              <p>
                The page you're looking for seems to have wandered off. Let's
                get you back on track.
              </p>

              <div className="error-buttons">
                <button className="btn-primary">
                  <Home className="icon-btn" />
                  Back to Home
                </button>

                <button className="btn-secondary">
                  <Search className="icon-btn" />
                  Search Site
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <a href="#" className="quick-link">
            <div className="link-icon">
              <Home className="icon" />
            </div>
            <div className="link-text">
              <div>Projects</div>
              <div className="link-desc">View all work</div>
            </div>
          </a>

          <a href="#" className="quick-link">
            <div className="link-icon">
              <Search className="icon" />
            </div>
            <div className="link-text">
              <div>Dashboard</div>
              <div className="link-desc">View analytics</div>
            </div>
          </a>

          <a href="#" className="quick-link">
            <div className="link-icon">
              <ArrowLeft className="icon" />
            </div>
            <div className="link-text">
              <div>Go Back</div>
              <div className="link-desc">Previous page</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
