import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';

export default function ImageCaroussel({media}) {
  const [idx, setIdx] = useState(0);
  
  const handleSelect = (selectIndex, e) => {
    setIdx(selectIndex);
  }
  
  return (
    <Carousel activeIndex={idx} onSelect={handleSelect}>
        {media.map((image) => (
            <Carousel.Item>
        <img className='burn-card-image' 
            src={image}
            alt="describing the place you can visit"
        />
      </Carousel.Item>
        ))}
    </Carousel>
  );
}
