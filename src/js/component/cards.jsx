import React from "react";

const Card=(props)=>{
    return(
    <>
    <div className="card mx-1 rounded my-3">
            <img className="card-img-top" src="https://loremflickr.com/350/350" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
                <p className="card-text d-flex text-center">{props.text}</p>
                <a href="#" className="btn btn-primary my-3 mx-5 justify-content-center w-50">{props.buttom}</a>
            </div>
    </div>
    </>
    )
}
const Cards=()=>{
    return(
        <>
        
        <Card 
            title="Hola" 
            text="No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, 
            simplemente porque es el dolor."
            buttom="Pulsa aqui"/>

        <Card 
            title="¡Perfecto!" 
            text="No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, 
            simplemente porque es el dolor."
            buttom="¡Dale duro!"/>

        <Card 
            title="Lo estoy logrando"
            text="No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, 
            simplemente porque es el dolor."
            buttom="Haz click"/>

        <Card 
            title="¡Yuhuuu!" 
            text="No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, 
            simplemente porque es el dolor."
            buttom="Mas info"/>
        
        </>
    )
}


export default Cards;