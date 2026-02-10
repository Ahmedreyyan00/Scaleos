'use client';

import React from 'react';

export default function FOMOBadge() {
    return (
        <div className="fomo-badge-container">
            <div className="fomo-badge">
                {/* Red pulsing dot */}
                <div className="fomo-live-dot">
                    <div className="fomo-dot-pulse"></div>
                </div>
                
                {/* Badge text */}
                <span className="fomo-badge-text">2 spots remaining this month</span>
                
                {/* Shine effect */}
                <div className="fomo-shine"></div>
            </div>
        </div>
    );
}

