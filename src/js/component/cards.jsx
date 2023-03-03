import React from "react";

const Card=()=>{
    return(
    <>
    <div className="card mx-1 rounded my-3">
            <img className="card-img-top" src="https://loremflickr.com/350/350" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">Card title</h5>
                <p className="card-text d-flex text-center">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary mx-5 my-5">Find Out More</a>
            </div>
        </div>
    </>
    )
}
const Cards=()=>{
    return(
        <>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </>
    )
}
export default Cards;