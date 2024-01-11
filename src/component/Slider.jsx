import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faL } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";
import image1 from '../static/images/1.jpg'
import image2 from '../static/images/2.jpg'
import image3 from '../static/images/3.jpg'
import image4 from '../static/images/4.jpg'
import image5 from '../static/images/5.jpg'

const Slider = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [slider , setslider] = useState(false)



  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
    setslider(true)
  };



  useEffect(() => {
    var interval = setInterval(() => {
      let items = slideRef.current.querySelectorAll(".item");
      slideRef.current.appendChild(items[0]);
    }, 8000);
    if (slider === true){
      clearInterval(interval)
    }
    setslider(false)
    return () => clearInterval(interval);
  }, [slider]);
       

  
  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    console.log(items.length);
    slideRef.current.prepend(items[4]);
    setslider(true)
  };

  const data = [
    {
      id: 1,
      imgUrl: image1,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl:image2,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl:image3,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 4,
      imgUrl: image4,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 5,
      imgUrl:image5,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
  ];

  return (
    <div className="relative w-[100%] h-[850px]">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
    
  );
};

export default Slider;
