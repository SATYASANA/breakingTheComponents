import React from "react"
import PortfolioNew from "./PortfolioNew"


const Portfolio=()=>{
    return(
        <section className="page-section portfolio" id="portfolio">
        <div className="container">
            
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            
            <div className="row">
                <PortfolioNew src="assets/img/portfolio/cabin.png"/>
              <PortfolioNew src="assets/img/portfolio/cake.png"/>
                <PortfolioNew src="assets/img/portfolio/circus.png"/>
               
              <PortfolioNew src="assets/img/portfolio/game.png"/>
              
              <PortfolioNew src="assets/img/portfolio/safe.png"/> 
               
              
              
               
                <PortfolioNew src="assets/img/portfolio/submarine.png"/>
            </div>
        </div>
    </section>
    )
}
export default Portfolio