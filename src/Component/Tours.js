import React from "react";
import Card from "./Card";


const Tours = ({ tours, removeTour }) => {

    console.log(tours, removeTour);



    return (<div>
        {
            tours.map((tour) => {
                //isme ek ek karkar ek ek tour ka object return ho ra hai kyuki yeh array of data ko iterate karra hai
                return (

                    <Card {...tour} removeTour={removeTour}></Card>)
                //isme spread operator object me laga hai ??

            }
            )
        }
    </div>
    )
}

export default Tours