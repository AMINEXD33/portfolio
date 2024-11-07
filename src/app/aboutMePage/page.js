
import { useState } from "react";
import "./page.css";
const GMAIL = "aminemeftahlinkedin@gmail.com"

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
export default function AboutMePage(){
    const [status, setStatus] = useState("copie email");

    return (
        <div className="aboutMeMater">
            <div className="aboutSection1">
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
            <div className="aboutSection2">
                <h5 className="abouttitle">quick introduction</h5>
                <p>Hello! I'm Amine Meftah, a 21-year-old full-stack developer passionate about building seamless, efficient, and user-friendly applications. With experience across both front-end and back-end technologies, I bring a well-rounded approach to web development, tackling each project with a commitment to quality and a deep attention to detail. I’m always eager to expand my skill set and dive into new challenges, whether it’s creating dynamic interfaces or ensuring robust server-side performance. Welcome to my portfolio, where you can explore my projects and see my dedication to crafting exceptional digital experiences!</p>
            </div>
            <div className="aboutSection3">
                <h5 className="abouttitle">Contact me </h5>
                <div className="copysection">
                    <div className="gmailicon"></div>
                    <div className="copybtn" onClick={()=>{copyIntoClipBoard(setStatus)}}>{status}</div>
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