import React, { useState } from "react";

function Card({ image, price, name, id, info, removeTour }) {
    console.log({ image, price, name, id, info, removeTour });
    const [readmore, setReadmore] = useState(false)
    let description = readmore ? info : `${info.substring(0, 200)}....`
    function readMoreHandler() {
        setReadmore(!readmore)
    }
    return (
        <div>
            <img src={image}></img>
            <h4> {price}</h4>
            <h4> {name}</h4>
            <div>
                {description}
            </div>
            <span onClick={readMoreHandler}>{
                readmore ? `show less` : `read more`
            }</span>
            <button onClick={() => removeTour(id)}>Not Interested</button>

        </div>
    )
}
export default Card;