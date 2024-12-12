import React, { useState } from 'react';
import ProfileCard from './Components/ProfileCard';
import MapComponent from './Components/mapComponent';
import profiles from './profiles.json';

const HomePage = () => {
    const [selectedProfile, setSelectedProfile] = useState(null);

    const handleSummaryClick = (profile) => {
        setSelectedProfile(profile);
    };

    return (
        <div>
            <div className="profile-list d-flex flex-wrap">
                {profiles.map((profile) => (
                    <ProfileCard
                        key={profile.id}
                        profile={profile}
                        onSummaryClick={handleSummaryClick}
                    />
                ))}
            </div>
            {selectedProfile && (
                <MapComponent address={selectedProfile.address} />
            )}
        </div>
    );
};

export default HomePage;
