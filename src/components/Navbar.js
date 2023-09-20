import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar({ onLogout }) {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    fetch('https://picsum.photos/id/77/info')
      .then((response) => response.json())
      .then((data) => {
        setProfileImage(data.download_url);
      })
      .catch((error) => {
        console.error('Error fetching profile image:', error);
      });
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/taskboard">Task Board</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <button className="logout-button" onClick={onLogout}>Logout</button>
        </li>
      </ul>
      {profileImage && (
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
