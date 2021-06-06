import React, { useState, useEffect } from 'react'

const gitHubUrl = "https://api.github.com/users/matthewgisonno";

export default function Github() {
    
    const [userData, setUserData] = useState({});

    useEffect(() => {
        getGitHubUserWithFetch();
      }, []);

      const getGitHubUserWithFetch = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
      };

    return (
      <div className="user-container">
        <img src={userData.avatar_url} alt={userData.name} width="100" className="float-start mx-3 rounded-circle" />
        <h5 className="info-item">Name: {userData.name}</h5>
        <h5 className="info-item">Location: {userData.location}</h5>
        <h5 className="info-item">GitHub URL: <a href={userData.html_url} target="_blank">{userData.html_url}</a></h5>
        <div className="clearfix">&nbsp;</div>
      </div>
    )
}
