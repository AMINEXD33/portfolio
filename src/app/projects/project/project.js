import "./project.css";



export default function Project({title, date, description, technologiesUsed=[], gitHubLink}){
    return (
        <div className="project">
            <div className="projectheader skip">
                <div className="projecttitle skip">{title}</div>
                <div className="projectdate skip">{date}</div>
            </div>
            <div className="desc skip"><p className="skip">{description}</p></div>

            <div className="projectfooter skip">
                <div className="technoUsed skip">
                    <div className="technostitle skip">Technologies or languages used </div>
                    <div className="technos skip">
                    {
                        technologiesUsed.map((value, index)=>{
                            return(
                                <div key={index} className="techno skip">{value}</div>
                            )
                        })    
                    }
                    </div>
                </div>
                <div className="gihubstuff skip">
                    <div className="gihubtitle skip">source code</div>
                    <div className="githubBtn skip">
                        <div className="gitIcon skip"></div>
                        <a className="gitlink skip" href={gitHubLink}></a>
                    </div>
                </div>
            </div>
        </div>
    )
}