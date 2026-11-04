import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import About from './About.jsx';
import Contact from './Contact.jsx';
import Page from './Page.jsx';
import Home from './Home.jsx';


export const Navbaar = () => {
  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contact'>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/page'>page</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<Routes>
    <Route path='/' element={<Home/>}/>
   < Route path='/about' element={<About/>}/>
   < Route path='/contact' element={<Contact/>}/>
   < Route path='/page' element={<Page/>}/>

   
</Routes>

</>
  )
}

export default Navbaar