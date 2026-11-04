import React from 'react'
import { GlobalContext } from '../Context'
import { useContext } from 'react'

export const Page = () => {
    let {state,dispatch} = useContext(GlobalContext)
    let chnge = () =>{
        dispatch({
            type : "CHANGE_NAME",
            payload : "Rifza"
        })
    }
  return (
   <>
   <h1>{state.name}</h1>
   <button onClick={chnge}>Changename</button>
   </>
  )
}
export default Page