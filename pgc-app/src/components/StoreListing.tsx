import { useState } from "react";

interface Props {
    title: string,
    button: string,
    XReviews: number,
    review: string,
    link: string,
}



function StoreListing(props: Props) {


function numOfReviews(){
    {
        if (props.XReviews === 0) {
          return  <p>Leave the first review!</p>
        } else if (props.XReviews === 1) {
           return <p>***** {props.XReviews} Review</p>
        } else {
          return  <p>***** {props.XReviews} Reviews</p>
        }
    }

}


    return (

        <>
            {/* <p>pictures</p> */}
            <h2>{props.title}</h2>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button>{props.button}</button>
            </a>
            {/* <p>(HALFFOFF applied through link)</p> */}
           
           {numOfReviews()}
            {props.review}

        </>
    )
}

export default StoreListing;