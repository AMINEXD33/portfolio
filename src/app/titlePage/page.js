"use client";
import { useEffect, useRef } from "react";
import elementIsVisibleInViewport from "../utils";
import "./page.css";


function switchToActive(thisElement){
    thisElement.classList.remove("normalBigTitle");
    thisElement.classList.add("activeBigTitle");
}
function switchToUnactive(thisElement){
    thisElement.classList.remove("activeBigTitle");
    thisElement.classList.add("normalBigTitle");
}

function mouseEnterLetterAnimation(e){
    e.target.classList.add("titlePageLetterActive");
    e.target.classList.remove("titlePageLetterUnactive");

}
function mouseLeaveLetterAnimation(e){
    e.target.classList.add("titlePageLetterUnactive");
    e.target.classList.remove("titlePageLetterActive");

}
function addSpaces(words){
    let newList = [];
    for (let x = 0; x < words.length; x++){
        newList.push(words[x]);
        newList.push(" ");
    }
    return newList;
}
export default function TitlePage({title}){
    let thisElement = useRef(null);
    let spaceCount = useRef(0);
    let titleList = title.split(" ");
    titleList = addSpaces(titleList);

    useEffect(()=>{
        if (elementIsVisibleInViewport(thisElement.current,false)){
            switchToActive(thisElement.current);
        }
        else{
            switchToUnactive(thisElement.current);
        }
        // in case this is a touch device
        if ("ontouchstart" in document.documentElement) {
            switchToActive(thisElement.current);
        }
    })
    return(
        <dev ref={thisElement} className="Bigtitle normal">
            {titleList.map((val, index)=>{
                if (val === " ") {
                    spaceCount.current += 1;
                }
                return (
                    <span 
                    key={index}className="titlePageLetter" 
                    onMouseEnter={(e)=>{mouseEnterLetterAnimation(e)}} 
                    onMouseLeave={(e)=>{mouseLeaveLetterAnimation(e)}}
                    >
                        {val == " "? "\u00A0": val}
                    </span>
                )
            
            })
            }
        </dev>
    )
}