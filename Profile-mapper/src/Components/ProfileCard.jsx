import React from 'react';
import '../App.css';
const ProfileCard = ({ profile, onSummaryClick }) => {
    return (
        <div className="card profile-container" style={{ width: "18rem", margin: "1rem" }}>
            <img src={profile.photo} className="card-img-top circle-img" alt={profile.name} />
            <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <p className="card-text">{profile.description}</p>
                <button
                    className="btn btn-primary"
                    onClick={() => onSummaryClick(profile)}
                >
                    Summary
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
