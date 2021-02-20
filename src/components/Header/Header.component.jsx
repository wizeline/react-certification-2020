import React from 'react';

import './Header.styles.css';

function Header() {
  return <header className="header">
    <div class="toolbar">
      <button class="menu-button" tabindex="0" type="button" aria-label="open drawer">
        <span class="menu-button-label">
          <svg class="menu-button-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </span>
      </button>
      <div class="menu-search">
        <div class="menu-button-search">
          <svg class="menu-button-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
        </div>
        <div class="menu-input">
          <input placeholder="Search…" type="text" aria-label="search" value="react" />
        </div>
      </div>
      <div class="menu-center"></div>
      <div class="menu-elements">
        <div>
          <button class="menu-button-login" tabindex="0" type="button" aria-label="account of current user" aria-haspopup="true">
            <span class="menu-button-label">
              <div class="menu-avatar">
                <svg class="menu-button-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>;
}

export default Header;
