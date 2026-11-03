import { useState } from 'react'
import Comp1 from './assets/Components/Comp1'
import Comp2 from './assets/Components/Comp2'
import Navbaar from './assets/Components/Navbaar'

import React from 'react'

export const App = () => {
  return (
    <>
    <Navbaar/>
    <Comp1/>
    <hr />
    <Comp2/>
    </>
  )
}


export default App
