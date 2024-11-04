"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import PageIntety from "./page/page";
const LIMIT = 2;


function goNextPage(current){
  if ((current + 1) > LIMIT){
    console.warn("next page is ", 0);
    return 0;
  }
  console.warn("next page is ", current + 1);
  return current + 1;
}

function goPrevPage(current){
  if ((current - 1) <= 0){
    console.warn("prev page is ", LIMIT);
    return LIMIT;
  }
  console.warn("prev page is ", current - 1);
  return current - 1;
}
function pageTransitionTrigger(pageElement, targetPage, direction){
  function wantedPositition(targetPage, maxHeight, direction){
    if (targetPage === 0){
      console.warn("here1");
      return 0;
    }
    else if (targetPage === LIMIT && direction === -1){
      return (((targetPage) * maxHeight));
    }

    console.warn("here2");
    console.warn("[++++]calculation >>>", `${targetPage} * ${maxHeight} = ${(targetPage+1) * maxHeight * direction}`)
    return (((targetPage) * maxHeight) * direction);
  }
  const maxHeight = window.innerHeight;
  const wantedPosition = wantedPositition(targetPage, maxHeight, direction);
  
  pageElement.scrollTo({ top: wantedPosition, behavior: 'smooth' });
  console.log("scrolling to , ", wantedPosition)
}

function scrollingAnimationOne(element, rotation){
  console.log("element", element)
  if (element){
    element.style.filter = `blur(${rotation}px)`;
    element.style.transform = `skewX(${rotation}deg)`;
    element.style.transform = `translateY(-${rotation}px)`
  }

}

function handleScrolling(page, event, rotation, setRotation){
  const screenHeight = window.innerWidth;
  if (event.deltaY > 0){
    setRotation(rotation + 1);
  }
  else if (event.deltaY === 0){
    // pass
  }
  else{
    setRotation(rotation - 1);
  }
}

function transitionRule(pageElement, rotation, page, setPage, setRotation){
  if (rotation >= 10){
    const targetPage = goNextPage(page);
    setPage(targetPage);
    setRotation(0);
    pageTransitionTrigger(pageElement, targetPage, 1);
    console.warn("+readjusting pageRef", targetPage);
  }
  else if (rotation <= -10){
    const targetPage = goPrevPage(page);
    setPage(targetPage);
    setRotation(0);
    pageTransitionTrigger(pageElement, targetPage, -1);
    console.warn("+readjusting pageRef", targetPage);
  }

}
export default function Home() {
  const [page, setPage] = useState(0);
  const pageElement = useRef(null);
  let [rotation, setRotation] = useState(0);

  useEffect(()=>{
    transitionRule(pageElement.current, rotation, page, setPage, setRotation);
  }, [rotation])

  useEffect(()=>{
    console.warn("current page", page)
  }, [page])

  return (
    <div className="main" ref={pageElement} onWheel={(event)=>{handleScrolling(pageElement, event, rotation, setRotation)}}>
      <PageIntety
        rotation={rotation}
        ElementAnimationCallBack = {scrollingAnimationOne}
      >
        <h1>damn</h1>
      </PageIntety>

      <PageIntety 
        rotation={rotation}
        ElementAnimationCallBack = {scrollingAnimationOne}
      >
        <h1>damn</h1>
      </PageIntety>

      <PageIntety
        rotation={rotation}
        ElementAnimationCallBack = {scrollingAnimationOne}
      >
        <h1>damn</h1>
      </PageIntety>
    </div>
  );
}
