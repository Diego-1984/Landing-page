import React from "react";

const Card=()=>{
    return(
    <>
    <div className="card">
            <img className="card-img-top" src="https://loremflickr.com/350/150" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Find Out More</a>
            </div>
        </div>
    </>
    )
}
export default Card;