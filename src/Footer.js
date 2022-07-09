import React from "react"
import logo from "./logo.svg"

export default function Footer() {
    return (
        <div className="footer">
            
            <div className="footer-react">
                Powered by <img alt="react-logo" src={logo}/> React
            </div>

        </div>
    )
}