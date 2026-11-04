import React from 'react'
import { useState } from 'react'

export const Home = () => {
    let[name,setName] = useState("Fabiha")
    let[color,setColor] = useState("Black")
    let[future,setFuture] = useState("web")

    let chngeName=()=>{
        setName("Hamna!")
    }
    let chngeColor=()=>{
        setColor("Purple!")
    }
    let chngePlan=()=>{
        setFuture("AI!")
    }
  return (
    <>
    <h1 style={{backgroundColor : name == "Hamna!" ? "pink" : "gray"}}>my name is {name}</h1>
    <button onClick={chngeName}>changeName</button>
    <br />
    <h1 style={{backgroundColor : color == "Purple!" ? "purple" : "blue",
        color : color == "Purple!" ? "white" : "black" }}>
            My fvrt Color is {color} </h1>
    <button onClick={chngeColor}>changeColor</button>
    <br />
    <h1 style={{
        backgroundColor : future == "AI!" ? "green" : "aqua"}}>My future plan is  {future}</h1>
    <button onClick={chngePlan}>changePlan</button>
    <div style={{backgroundColor : name == "Fabiha" ? "blue" : name == "Hamna!" ? "green" : "black",
        color :  name == "Fabiha" ? "pink" : name == "Hamna!" ? "white" : "black"
    }}>
        <h1>{name}</h1>
        <button onClick={chngeName}>changes</button>
    </div>
    </>
  )
}
export default Home