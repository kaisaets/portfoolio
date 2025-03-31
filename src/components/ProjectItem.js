import React from "react";

const ProjectItem = ({ image, name, description, url }) => {
    return (
        <div className="projectItem">
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h2> {name} </h2>
            <p> {description} </p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="viewProjectLink">View project</a>
        </div>
    )
}

export default ProjectItem;