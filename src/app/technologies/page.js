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


export default function Technologies() {
  return (
    <div className="technomaster">
      <div className="shipsContainer">
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
            <h5 className="coceptsTitle">Acquired concepts</h5>
            <ul className="conceptsList">
                <li>Algorithms</li>
                <li>System design</li>
                <li>Data-structure</li>
            </ul>
        </div>
    </div>
  );
}
