import { useEffect, useRef } from "react";
import "./page.css";
import Project from "./project/project";
import elementIsVisibleInViewport from "../utils";



function activateAnimation(element){
  element.classList.remove('unactive_scroller');
  element.classList.add('active_scroller');
}

function deactivateAnimation(element){
  element.classList.remove('active_scroller');
  element.classList.add('unactive_scroller');
}

export default function Projects() {
  const scroller = useRef(null);
  

  useEffect(()=>{
    if (elementIsVisibleInViewport(scroller.current, true)){
      activateAnimation(scroller.current);
    }
    else{
      deactivateAnimation(scroller.current);
    }
  });
  return (
    <div className="projects-container">
      <div className="scroller" ref={scroller}>
        <Project
          title={"test"}
          date={"2025"}
          description={
            "aoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfaaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfsfaoijfaofhahfahfafaosfasf"
          }
          technologiesUsed={["Python", "Django", "PHP"]}
          gitHubLink={"https://www.google.com"}
        />
        <Project
          title={"test"}
          date={"2025"}
          description={
            "aoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfaaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfsfaoijfaofhahfahfafaosfasf"
          }
          technologiesUsed={["Python", "Django", "PHP"]}
          gitHubLink={"https://www.google.com"}
        />
        <Project
          title={"test"}
          date={"2025"}
          description={
            "aoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfaaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfsfaoijfaofhahfahfafaosfasf"
          }
          technologiesUsed={["Python", "Django", "PHP"]}
          gitHubLink={"https://www.google.com"}
        />

        <Project
          title={"test"}
          date={"2025"}
          description={
            "aoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfaaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfsfaoijfaofhahfahfafaosfasf"
          }
          technologiesUsed={["Python", "Django", "PHP"]}
          gitHubLink={"https://www.google.com"}
        />

        <Project
          title={"test"}
          date={"2025"}
          description={
            "aoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfaaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfaoijfaofhahfahfafaosfasfsfaoijfaofhahfahfafaosfasf"
          }
          technologiesUsed={["Python", "Django", "PHP"]}
          gitHubLink={"https://www.google.com"}
        />
      </div>
    </div>
  );
}
