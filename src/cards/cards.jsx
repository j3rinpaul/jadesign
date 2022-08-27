import React from 'react'
import "./cards.css"

function Cards(props) {
    return(
        <div className="card">
            <div  >
                <img src={props.img} className="cimg"/>
            </div>
            <div className="cbody">
                <h2 className="ctitle">{props.title}</h2>
                <p className="cdesc">
                {props.desc}</p>
                {/* <h3 className="card__price">{props.price}</h3> */}
                <button className="cbtn">{props.btn}</button>
            </div>
        </div>
    )
}

export default Cards