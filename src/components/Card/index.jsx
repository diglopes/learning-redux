import React from 'react'
import './card.css'

function getColor({red, blue, green, purple}) {
    if(red) return "red"
    if(blue) return "blue"
    if(green) return "green"
    if(purple) return "purple"
}

export default props => (
    <div className={`card ${getColor(props)}`}>
        <div className="header">
            <span className="title">{props.title}</span>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
)