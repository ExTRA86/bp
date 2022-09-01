import React, { useEffect, useState } from 'react';
import './PhotoStyle.css';

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => response.json())
      .then(json => setPhotos(json.slice(0, 10)));
  }, []);

  return (
    <div className='photos'>
      <div className='title'>
        <h1>Photo 2</h1>
      </div>
      <div className='list'>
        {photos.map(photo => (
          <div key={photo.id} className='pic'>
            <img src={photo.thumbnailUrl} alt=''></img>
            <div className='desc'>
              <span>{photo.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photo;
