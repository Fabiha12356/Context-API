import { GlobalContext } from '../Context';
import { useContext } from "react";


import React from 'react'

export const Comp1 = () => {
     let { state, dispatch } = useContext(GlobalContext);
  return (
<h1>{state.name}</h1>
  )
}

export default Comp1;