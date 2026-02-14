import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'
const Nav = () => {
  return (
    <div>
      <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="./nav-icons/apple_.svg" alt="" />
            </div>
            <div className="nav-item">
                <p>Navneet Sinha</p>
            </div>
            <div className="nav-item">
                <p>File</p>
            </div>
            <div className="nav-item">
                <p>Window</p>
            </div>
            <div className="nav-item">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="wifi-icon">
                <img src="./nav-icons/wifi_.svg" alt="" />
            </div>
            <div className="nav-item">
                <DateTime/>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
