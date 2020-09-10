import React from "react"
import NavBar from "./NavBar"
import MasterHead from "./MasterHead"
import Portfolio from "./Portfolio"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Copyright from "./Copyright"

import "./styles.css"

const App=()=>{
    return(
        <div>
        <NavBar/>
        <MasterHead/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
        <Copyright/>
        
        </div>
       
    )
}
export default App