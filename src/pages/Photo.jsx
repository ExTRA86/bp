import React, { useEffect, useState } from 'react';

import './PhotoStyle.css';
import Modal from '../components/UI/Modal';
import PhotoService from '../API/PhotoService';

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState(false);
  const [current, setCurrent] = useState();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const changePage = page => {
    setPage(page);
    fetchPics(photos.url);
    console.log(page);
  };

  const bigImg = img => {
    setModal(true);
    setCurrent(img);
  };

  async function fetchPics(limit, page) {
    const pics = await PhotoService.getAll(limit, page);
    setPhotos(pics.data);
  }

  useEffect(() => {
    fetchPics(limit, page);
  }, [limit, page]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/photos`)
  //     .then(response => response.json())
  //     .then(json => setPhotos(json.slice(0, 10)));
  // }, []);

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
            <button onClick={() => changePage(page + 1)}>Next</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Photo;
