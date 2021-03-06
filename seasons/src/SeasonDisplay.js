import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "IT'S SUMMER",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it's so cold",
        iconName: 'snowflake'
    }
};


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = seasonConfig[season].text;
    const iconName = seasonConfig[season].iconName;

    return (
        <div className={`season-display ${season}`}>
            <h1><i className={`icon-left ${iconName} massive icon`}></i></h1>
            <h1>{text}</h1>
            <h1><i className={`icon-right ${iconName} massive icon`}></i></h1>
        </div>
    )
};


export default SeasonDisplay;