"use client";
import { useEffect, useRef } from "react";
import "./page.css";

function handleScrollEvent(pageElement) {
  console.log("scrolled");
}
/**
 *
 * @param {*} param0
 * @returns
 */
export default function PageIntety({
  children,
  rotation,
  ElementAnimationCallBack,
}) {
  const page = useRef(null);

  useEffect(() => {
    console.log("rejusting ", rotation);
    ElementAnimationCallBack(page.current, rotation);
  }, [rotation]);
  return (
    <div className="page" ref={page}>
      {children}
    </div>
  );
}
