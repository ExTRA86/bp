import React, { useEffect, useState } from 'react';

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => response.json())
      .then(json => setPhotos(json.slice(0, 10)));
  }, []);
  console.log(photos);

  return (
    <div>
      <h1>Photo 2</h1>
      {photos.map(photo => (
        <div>
          <img src={photo.thumbnailUrl} alt='' key={photo.id}></img>
          <span>{photo}</span>
        </div>
      ))}
    </div>
  );
};

export default Photo;
