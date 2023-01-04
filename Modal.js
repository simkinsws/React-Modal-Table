import React, { useState } from 'react';
import './Modal.css';

const Modal = (props) => {
  // Declare a state variable called "modalIsOpen" and set it to false
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
        <div className={props.openModal ? 'modalView' : ""}></div>
        <div style={{ display: props.openModal ? 'block' : 'none' }}>
          <div className='model-content-wrapper'>
            <h1>
               <button onClick={props.handleCloseModal}>X</button>
               <span style={{marginRight: '10rem'}}>{props.boarding}</span> 
               <span style={{marginRight: '10rem'}}>{props.duration}</span> <span>{props.arrivalTime}</span> 
            </h1>
            </div>
         </div>
    </>
  );
}

export default Modal;