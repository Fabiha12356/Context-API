import React from 'react'
import { GlobalContext } from '../Context';
import { useContext } from "react";

export const Contact = () => {
    let { state, dispatch } = useContext(GlobalContext);
    let chnge = ()=>{
        dispatch({
            type : "CHANGE_NAME",
            payload : "Areeba"
        })
    }
  return (
 <>
  <h1>{state.name}</h1>
  <button onClick={chnge}>Click</button>
 </>
  )
}
export default Contact