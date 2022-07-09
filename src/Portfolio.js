import React from "react"
import ProjectLink from "./ProjectLink"

export default function Portfolio() {
    return (
        <div className="portfolio">
            <h2>Projects</h2>
            <ProjectLink title="ClipShelf" />
            <ProjectLink title="Bunny Jumper" />
        </div>
    )
}