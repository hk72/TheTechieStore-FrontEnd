import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

const CarouselItem = (props) =>  {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return(
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 maxHeight"
          src="laptop.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Computers</h3>
          <Button variant="outline-light">View Collection</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 maxHeight"
          src="phone.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Phones and Tablets</h3>
          <Button variant="outline-light">View Collection</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 maxHeight"
          src="headphones.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Electronics</h3>
          <Button variant="outline-light">View Collection</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselItem
