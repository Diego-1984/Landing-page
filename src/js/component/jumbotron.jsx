import React from "react";
import { Jumbotron,Button } from 'react-bootstrap';

const MyJumbotron=()=>{
    return(
    <>
    <div className="container bg-light my-2">
  
      <Jumbotron>
        <div className="container mx-1"><h1>Hello, world!</h1>
          <p>
          Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". 
          </p>
          <button type="button" class="btn btn-primary my-3">Call to action!</button>
      </div>     
    </Jumbotron>
    </div>
    </>
    )
}
export default MyJumbotron;