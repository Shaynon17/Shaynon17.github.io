// import { useState } from "react";

interface Props {
    title: string,
    button: string,
    price: number,
    XReviews: number,
    review: string,
    link: string,
}




function StoreListing(props: Props) {


    let stars = <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
    </div>


function numOfReviews(){
    {
        if (props.XReviews === 0) {
            return <p className="reviewNumberContainer" ><em>Leave the first review!</em></p>
        } else if (props.XReviews === 1) {
           return <div className="reviewNumberContainer">
           <p>{stars}</p>
           <p>{props.XReviews} Review</p>
           </div>
        } else {
            return <div className="reviewNumberContainer">
                <p>{stars}</p>
                <p>{props.XReviews} Reviews</p>
            </div>
        }
    }

}

    return (

        <div className="productInfo">
            {/* <p>pictures</p> */}
            <h2>{props.title}</h2>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button className="buyBtn" >{props.button} ${props.price}</button>
            </a>
            {/* <p>(HALFFOFF applied through link)</p> */}
           
           {numOfReviews()}
            <p className="writtenReview" >{props.review}</p> 

        </div>
    )
}

export default StoreListing;