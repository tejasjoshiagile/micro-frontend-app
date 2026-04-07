import React from "react";

function Header() {
  return (
    <header className="app-header-bar">
      <div className="app-shell">
        <div className="brand-block">
          <div className="brand-logo">RJS</div>
          <div>
            <h1 className="brand-title">Real Time Chat</h1>
            <p className="brand-subtitle">
              Chat Application Powered by Micro Frontends
            </p>
          </div>
        </div>
        {/* <p className="brand-status">Live</p> */}
      </div>
    </header>
  );
}

export default Header;
