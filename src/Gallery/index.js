import React from 'react';
import './index.css';

const API_URL = 'https://app.theculturetrip.com/cultureTrip-api/v1/collections/27870463213093932773?pageType=location_places_to_stay&newSlug=true';

export const Gallery = () => {

  const [data, setData] = React.useState();
  if (!data) {
    // fetch(API_URL) then setData with the response
  }
  return (
    <div>
      <h2>Gallery</h2>
      <p>Loop through the data and render out some cards, each with an image and title</p>
    </div>
  );
};
