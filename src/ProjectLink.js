import React from "react"

export default function ProjectLink(props) {
    return (
        <div className="projectlink">
            <p>{props.title}</p>
            <img alt="thumbnail" src={`${process.env.PUBLIC_URL}/img/${props.title}.PNG`}/>
        </div>
    )
}