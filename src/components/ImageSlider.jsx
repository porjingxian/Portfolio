import React from "react";
import { Carousel } from "react-bootstrap";

function ImageSlider({ images = [] }) {
  return (
    <Carousel fade interval={3000} pause="hover">
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={img}
            alt={`slide-${index}`}
            style={{
              height: "300px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSlider;

