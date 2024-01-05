import React from 'react';

const EventSection = ({ title, images }) => {
  return (
    <div className='hmmmm'>
      <center><h2 className='abt19'>{title}</h2></center>
      <br></br>
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} width="33%" height="50%" />
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default EventSection;
