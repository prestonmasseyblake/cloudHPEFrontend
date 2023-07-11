import React from 'react'
import LocationBtn from './LocationBtn'
import "./LocationsScroller.css"
const LocationsScroller = () => {
    return (
      <div className="location-scroller-container">
        <LocationBtn title={"Spring, TX"} />
        <LocationBtn title={"New York, NY"} />
        <LocationBtn title={"San Jose, CA"} />
        <LocationBtn title={"Plano, TX"} />
        <LocationBtn title={"Roseville, CA"} />
        <LocationBtn title={"Austion, TX"} />
        <LocationBtn title={"Alpharetta, GA"} />
        <LocationBtn title={"Fort Collins, CO"} />
        <LocationBtn title={"Santa Clara, GA"} />
        <LocationBtn title={"Durham, NC"} />
      </div>
    );
}

export default LocationsScroller
