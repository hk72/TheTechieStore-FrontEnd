import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import history from '../../history'

const CarouselItem = (props) =>  {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return(
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect} interval = {3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 maxHeight"
          src="laptop.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Computers</h3>
          <Button variant="outline-light" onClick = {() => {
            history.push('/computers')
            window.scrollTo(0, 0)
          }}>View Collection</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 maxHeight"
          src="phone.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Phones</h3>
          <Button variant="outline-light" onClick = {() => {
            history.push('/phones')
            window.scrollTo(0, 0)
          }}>View Collection</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 maxHeight"
          src="headphones.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Headphones</h3>
          <Button variant="outline-light" onClick = {() => {
            history.push('/headphones')
            window.scrollTo(0, 0)
          }}>View Collection</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselItem
