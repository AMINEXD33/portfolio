"use client";
import "./page.css";
import react from "../imgs/react.svg";
import mysql from "../imgs/mysql.svg";
import python from "../imgs/python.svg";
import js from "../imgs/js.svg";
import php from "../imgs/php.svg";
import redis from "../imgs/redis.svg";
import next from "../imgs/next.svg";
import django from "../imgs/django.svg";
import Image from "next/image";
import elementIsVisibleInViewport from "../utils";
import { useEffect, useRef } from "react";

function activateAnimation(element, listElem){
  const allShips = element.getElementsByClassName("ship");
  console.warn(allShips);
  let delay = 10;
  for (let x = 0; x < allShips.length; x++){
    setTimeout(()=>{
      allShips[x].classList.add("ships_active");
    }, delay+20);
  }
  listElem.classList.add("topbottom");
}
function desactivateAnimation(element, listElem){
  const allShips = element.getElementsByClassName("ship");
  for (let x = 0; x < allShips.length; x++){
    allShips[x].classList.remove("ships_active");
  }
  listElem.classList.remove("topbottom");
}
export default function Technologies() {
  const shipsContainer = useRef(null);
  const listElem = useRef(null);

  useEffect(()=>{
    console.warn("this")
    if (elementIsVisibleInViewport(shipsContainer.current, false)){
      activateAnimation(shipsContainer.current, listElem.current);
    }
    else{
      desactivateAnimation(shipsContainer.current, listElem.current);
    }
  })
  return (
    <div className="technomaster">
      <div className="shipsContainer" ref={shipsContainer}>
        <div className="ship">
          <Image className="shipimg" src={react} height={70} alt="react"></Image>
        </div>
        <div className="ship">
        <Image className="shipimg" src={mysql} height={70} alt="react"></Image>
        </div>
        <div className="ship">
        <Image className="shipimg" src={python} height={70} alt="react"></Image>
        </div>
        <div className="ship">
        <Image className="shipimg" src={js} height={70} alt="react"></Image>
        </div>
        <div className="ship">
        <Image className="shipimg" src={php} height={70} alt="react"></Image>
        </div>
        <div className="ship">
        <Image className="shipimg" src={redis} height={70} alt="react"></Image>
        </div>
        <div className="ship">
        <Image className="shipimg" src={next} height={70} alt="react"></Image>
        </div>
        <div className="ship">
        <Image className="shipimg" src={django} height={70} alt="react"></Image>
        </div>
      </div>

      <div className="concepts">
            <h5 className="coceptsTitle" >Acquired concepts</h5>
            <ul className="conceptsList topbottom" ref={listElem}>
                <li>Algorithms</li>
                <li>System design</li>
                <li>Data-structure</li>
            </ul>
        </div>
    </div>
  );
}
