import React from 'react'
import { GlobalContext } from '../Context';
import { useContext } from "react";

export const About = () => {
 let { state, dispatch } = useContext(GlobalContext);

let change = () =>{
    console.log("hu raha hai!")
   dispatch({
    type : "CHANGE_NAME",
    payload: "Hamna"
   })
}

  return (
    <>
    <h1>{state.name}</h1>
    <button onClick={change}>ChangeName</button>
    </>
  )
}
export default About
