import React, { useState, useEffect } from "react";
// import images from "../../constants/images";
// import "../CSS/carousel.css";
import car from "../images/car.gif";
import locations from "../images/locations.gif";
import plugged from "../images/plugged.gif";
import burger from "../images/burger.gif";
import coffee from "../images/coffee.gif";
import charging from "../images/charging.gif";

// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Animation = () => {
  const images = [{image:locations,text:"locate"}, {image:car,text:"get there"}, {image:plugged,text:"plug in"}, {image:charging,text:"recharge"}, {image:burger,text:"get some food"}, {image:coffee,text:"relaax...."}];

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextImage();
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let currentImageIndex = 0;

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("slideshow").src = images[currentImageIndex]?.image;
    document.getElementById("description").textContent = images[currentImageIndex]?.text;
    
  }

  return (
    <div className="animation_container">
      <img id="slideshow" className="animation_image"  src={images[0].image} />
      <div className="font-marker">
      <div id="description" className="font-marker">{images[0].text}</div>

      </div>
    </div>
  );

















};

export default Animation;


