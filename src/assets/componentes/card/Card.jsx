import React from 'react'
import "./Card.css"

const Card = ({lang,img,scolor,fcolor}) => {
    return(
        <div className='container' style={{
            background:"linear-gradient(to left ${fcolor},${scolor})"
        }}>
            <img src={img} alt="images" />
            <h2>{lang}</h2>
        </div>
    )
}

export default Card