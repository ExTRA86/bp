import React from 'react';
import cl from './Modal.module.css';

const Modal = ({ children, visible, setVisible }) => {
  const rootClass = [cl.modal];
  if (visible) {
    rootClass.push(cl.active);
  }
  return (
    <div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
      <div className='modalContent' onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
