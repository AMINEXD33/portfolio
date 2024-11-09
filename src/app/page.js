"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import PageIntety from "./page/page";
import TitlePage from "./titlePage/page";
import FirstPage from "./firstPage/page";
import AboutMePage from "./aboutMePage/page";
import Technologies from "./technologies/page";
import Projects from "./projects/page";
const LIMIT = 7;

export default function Home() {
  const [page, setPage] = useState(0);
  const pageElement = useRef(null);
  const [scrollLock, setScrollLock] = useState(false);
  let [rotation, setRotation] = useState(0);

  useEffect(() => {
    transitionRule(
      pageElement.current,
      rotation,
      page,
      setPage,
      setRotation,
      setScrollLock
    );
  }, [rotation]);


  // just one time to at the start
  // check if we're a scrolling or toutching device
  // if toutching switch the overflow
  useEffect(() => {
    if ("ontouchstart" in document.documentElement) {
      convertTotoutch(pageElement.current);
    }
  });
  return (
    <div
      className="main"
      ref={pageElement}
      onWheel={(event) => {
        handleScrolling(event, rotation, setRotation, scrollLock);
      }}
    >
      <PageIntety
        rotation={rotation}
        ElementAnimationCallBack={scrollingAnimationOne}
      >
        <FirstPage />
      </PageIntety>

      <PageIntety
        rotation={rotation}
        ElementAnimationCallBack={scrollingAnimationOne}
      >
        <TitlePage title={"About me?"} />
      </PageIntety>

      <PageIntety
        rotation={rotation}
        ElementAnimationCallBack={scrollingAnimationOne}
      >
        <AboutMePage />
      </PageIntety>

      <PageIntety
        rotation={rotation}
        ElementAnimationCallBack={scrollingAnimationOne}
      >
        <TitlePage title={"Technologies and Languages I worked with"} />
      </PageIntety>

      <PageIntety
        rotation={rotation}
        ElementAnimationCallBack={scrollingAnimationOne}
      >
        <Technologies/>
      </PageIntety>

      <PageIntety
        rotation={rotation}
        ElementAnimationCallBack={scrollingAnimationOne}
      >
        <TitlePage title={"Projects"} />
      </PageIntety>

      <PageIntety
        rotation={rotation}
        ElementAnimationCallBack={scrollingAnimationOne}
      >
         <Projects/>
      </PageIntety>
     
    </div>
  );
}

/**
 * A function that returns the next page with respect to
 * the LIMIT set
 * @param {number} current the current page
 * @returns the next page
 */
function goNextPage(current) {
  if (current + 1 >= LIMIT) {
    return LIMIT - 1;
  }
  return current + 1;
}

/**
 * A function that returns the previous page with respect
 * to the LIMIT set
 * @param {*} current the current page
 * @returns the previous page
 */
function goPrevPage(current) {
  if (current - 1 < 0) {
    return 0;
  }
  return current - 1;
}

/**
 * A function that canculates the jump from a slide to an other
 * Slide
 * @param {*} pageElement the page element (the container)
 * @param {*} targetPage the number of the target page 0 to X
 */
function pageTransitionTrigger(pageElement, targetPage) {
  const maxHeight = window.innerHeight;
  pageElement.scrollTo({ top: targetPage * maxHeight, behavior: "smooth" });
}

/**
 * A scrolling animation
 * @param {*} element the element
 * @param {*} rotation the value of the rotation or (animation stage tracker)
 */
function scrollingAnimationOne(element, rotation) {
  if (element) {
    if (rotation < 0) {
      element.style.filter = `blur(${rotation * -1}px)`;
      element.style.transform = `translateY(-${rotation * 4}px)`;
    } else {
      element.style.filter = `blur(${rotation}px)`;
      element.style.transform = `translateY(-${rotation * 4}px)`;
    }
  }
}

/**
 * This function change the rotation value with respect to the
 * scrolling direction
 * @param {*} event the event of the scrolling
 * @param {number} rotation the value of rotation
 * @param {Function} setRotation a setter for rotation
 * @param {*} scrollLock scroll lock
 */
function handleScrolling(event, rotation, setRotation, scrollLock) {
  function shouldIskipThis(event){
    const skipableClasses = ["ship", "shipsContainer", "shipimg", "scroller", "project", "skip"];
    const werePointingOn = document.elementFromPoint(event.clientX, event.clientY);
    for (let x = 0; x < skipableClasses.length; x++){
      if (werePointingOn.classList.contains(skipableClasses[x])){
        return true;
      }
    }
    return false;
  }
  if (shouldIskipThis(event)){
    return;
  }
  if (scrollLock) {
    // scrolling is locked
    return;
  }
  if (event.deltaY > 0) {
    setRotation(rotation + 1);
  } else if (event.deltaY === 0) {
    // pass
  } else {
    setRotation(rotation - 1);
  }
}

/**
 * this function tracks if the rotation value is above or bellow
 * a threashold, if so the next page will be calculated
 * the rotation value is reseted , a page transition is triggered
 * and a lock for scrolling is set for 1.5 seconds
 * @param {*} pageElement the pageElemen (container)
 * @param {*} rotation the rotation current value
 * @param {*} page page number
 * @param {*} setPage set page number value
 * @param {*} setRotation  set rotation value
 * @param {*} setScrollLock set scroll lock value
 */
function transitionRule(
  pageElement,
  rotation,
  page,
  setPage,
  setRotation,
  setScrollLock
) {
  if (rotation >= 10) {
    const targetPage = goNextPage(page);
    setPage(targetPage);
    setRotation(0);
    pageTransitionTrigger(pageElement, targetPage);
    setScrollLock(true);
    setTimeout(() => {
      setScrollLock(false);
    }, 500);
  } else if (rotation <= -10) {
    const targetPage = goPrevPage(page);
    setPage(targetPage);
    setRotation(0);
    pageTransitionTrigger(pageElement, targetPage);
    setScrollLock(true);
    setTimeout(() => {
      setScrollLock(false);
    }, 500);
  }
}

/**
 * allow overflow for page Element
 * @param {HTMLElement} pageElement
 */
function convertTotoutch(pageElement) {
  pageElement.style.overflow = "visible";
}
