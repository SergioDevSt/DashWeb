import React from 'react'

const NavBar = () => {
  return (
    <div className="app-header">
    <div className="app-header-left">
      <span className="app-icon"></span>
      <p className="app-name">KFC</p>
      <div className="search-wrapper">
        <input className="search-input" type="text" placeholder="Search" > 
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg> 
        </input>
      </div>
    </div>
    <div className="app-header-right">
      <button className="mode-switch" title="Switch Theme">
        <svg className="moon" fill="none" stroke="currentColor" stroleLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
      <button className="add-btn" title="Add New Project">
        <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" stroleLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <button className="refresh-btn" title="Refresh">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 550 550" fill="none" stroke="currentColor" strokeWidth="2" stroleLinecap="round" strokeLinejoin="round" className="feather feather-refresh-cw">
          <path d="M320,146s24.36-12-64-12A160,160,0,1,0,416,294" style="fill:none;stroke:currentColor;stroleLinecap:square;stroke-miterlimit:10;strokeWidth:32px"/>
          <polyline points="256 58 336 138 256 218" style="fill:none;stroke:currentColor;stroleLinecap:square;stroke-miterlimit:10;strokeWidth:32px"/>
        </svg>
      </button>
      <button className="notification-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroleLinecap="round" strokeLinejoin="round" className="feather feather-bell">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>
    </div> 
  </div>
  )
}

export default NavBar;