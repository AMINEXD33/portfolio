"use client";
import { useEffect, useRef, useState } from "react";
import "./page.css";
const GMAIL = "aminemeftahlinkedin@gmail.com"
import elementIsVisibleInViewport from "../utils";
function gotoUrl(url){
    window.open(url).focus();
}

function copyIntoClipBoard(setStatus){
    setStatus("copied !!");
    navigator.clipboard.writeText(GMAIL);
    setTimeout(()=>{
        setStatus("copie email");
    }, 2000);
}

function triggerAnimation(section1, section2, section3){
    let timing = 50;
    for (let section of [section1, section2, section3]){
        setTimeout(()=>{
            section.classList.add("animateWhenReady");
        }, timing);
        timing = timing + 50;
    }
}

function cleanCLasses(section1, section2, section3){
    for (let section of [section1, section2, section3]){
        section.classList.remove("animateWhenReady");
    }
}
export default function AboutMePage(){
    const [status, setStatus] = useState("copie email");
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const master = useRef(null);


    useEffect(()=>{
        if (elementIsVisibleInViewport(section1.current, false)){
            triggerAnimation(section1.current, section2.current, section3.current);
        }
        else{
            cleanCLasses(section1.current, section2.current, section3.current);
        }

        // in case this is a touch device
        if ("ontouchstart" in document.documentElement) {
            triggerAnimation(section1.current, section2.current, section3.current);
          }
    });

    return (
        <div className="aboutMeMater" ref={master}>
            <div className="aboutSection1" ref={section1}>
                <div className="aboutPhoto">
                    <img src={"./"} width={150} height={150}></img>
                </div>
                <div className="aboutName">
                    <div className="dash"></div>
                    <div className="dash"></div>
                    <div className="dash"></div>
                    <div className="nameship">Amine Meftah</div>
                </div>
            </div>
            <div className="aboutSection2" ref={section2}>
                <h5 className="abouttitle">quick introduction</h5>
                <p className="intro">Hello! I'm Amine Meftah, a 21-year-old full-stack developer passionate about building seamless, efficient, and user-friendly applications. With experience across both front-end and back-end technologies, I bring a well-rounded approach to web development, tackling each project with a commitment to quality and a deep attention to detail. I’m always eager to expand my skill set and dive into new challenges, whether it’s creating dynamic interfaces or ensuring robust server-side performance. Welcome to my portfolio, where you can explore my projects and see my dedication to crafting exceptional digital experiences!</p>
            </div>
            <div className="aboutSection3" ref={section3}>
                <h5 className="abouttitle">Contact me </h5>
                <div className="copysection">
                    <div className="gmailicon"></div>
                    <div className="" onClick={()=>{copyIntoClipBoard(setStatus)}}>{status}</div>
                </div>
                <div
                    onClick={()=>{gotoUrl("https://www.facebook.com")}} 
                    className="facebookicon" 
                ></div>
                <div 
                    onClick={()=>{gotoUrl("https://www.youtube.com")}} 
                    className="linkedinicon" 
                ></div>
            </div>
        </div>
    )
}