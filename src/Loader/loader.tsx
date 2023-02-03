import React from 'react';

const Loader = () => {
    return (
        <svg
             style={{margin: 'auto', display: 'block', shapeRendering: 'auto'}}
             width="20px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#290908" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
        </svg>
    );
};

export default Loader;