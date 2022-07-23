import React from "react";

function Button(props){

  return(
    <div className="button">
      <p>{props.text}</p>
      <img src={props.img}></img>
    </div>
  )

}