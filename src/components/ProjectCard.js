import React from "react";

function ProjectCard(props){
  let deployment; 
  if (props.deploy){
    deployment = <a href= {props.deploy}>Deployment</a>
  }
  else {
    deployment = <span>No Deploy</span>
  }

  return (
    <div className="col">
	    <div className="card text-center border-dark">
		    <img src={props.img} className="card-img-top"/>
		    <div className="card-body">
			    <h5 className="card-title">{props.title}</h5>
			    <p className="card-text">{props.body}<br/>{deployment} | <a href={props.git} >GitHub Repo</a></p>
		    </div>
	    </div>
    </div>
  )
}

export default ProjectCard