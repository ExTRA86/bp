import React, { useEffect, useState } from 'react';
import './PhotoStyle.css';
import Modal from '../components/UI/Modal';

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState(false);
  const [current, setCurrent] = useState();
  const bigImg = img => {
    setModal(true);
    setCurrent(img);
  };
  // const imgList = img => {
  //   setCurrent(img);
  // };
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
          <div key={photo.id} className='pic' onClick={() => bigImg(photo.url)}>
            <img className='smallImg' src={photo.thumbnailUrl} alt='' />
          </div>
        ))}
        <Modal visible={modal} setVisible={setModal}>
          <div>
            <img className='bigImg' src={current} alt='' />
            <button>Вперед</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Photo;
