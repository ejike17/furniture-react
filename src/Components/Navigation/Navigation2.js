import React from 'react';

function Navigation2() {
    return (
        <div className="navbar-collapse flex">
        
        <ul className="navbar-nav text-uppercase">
          <li className="nav-item">
            <a href="#" className="nav-link active-link">
              <span className="nav-link-text">home</span>
              <span className="dropdown-icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="nav-link-text">featured</span>
              <span className="dropdown-icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="nav-link-text">shop</span>
              <span className="dropdown-icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="nav-link-text">blog</span>
              <span className="dropdown-icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="nav-link-text">about</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="nav-link-text">contact</span>
            </a>
          </li>
        </ul>
        {/* <!-- end of nav list -->

                    <!-- account icons --> */}
        <div className="account-info">
          <a href="#" className="btn text-white">
            <i className="fas fa-person"></i>
          </a>
          <a href="#" className="btn text-white">
            <i className="fas fa-shopping-basket"></i>
          </a>
        </div>
        {/* <!-- end of account icons --> */}
      </div>
  )
}

export default Navigation2;
