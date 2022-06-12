import React from 'react'

import Navigation from "../Router/Navigation";
import CountryAPiFetch from './CountryAPiFetch';

const MainComponent = () => {
    return (
        <div>
            <CountryAPiFetch />
        </div>
    )
}

export default MainComponent