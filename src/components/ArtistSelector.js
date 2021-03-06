import React from 'react';

const ArtistSelector = (props) => {

  const top20options = props.artists.map((artist, index) => {
    return <option value={index} key={index}>{artist["im:name"].label}</option>
  });

  const handleChange = (event) => {
    let index = event.target.value;
    props.onArtistSelect(index);
  }

  return (
    <select className='artist-dropdown'
      id="ArtistSelector"
      defaultValue="default"
      onChange={handleChange}>
      <option disabled value="default">Select a track</option>
      {top20options}
    </select>
  );
}

export default ArtistSelector;
