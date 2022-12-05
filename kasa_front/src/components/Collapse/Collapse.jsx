/* react  */
import React, {useState} from "react";
/* css  */
import './collapse.css'

export default function Collapse({ formatting,title, children }) {
    const [isOpen, setOpen] = useState(false)
    let widthSvg = 25
    let heightSvg = 15
    if (formatting ==="small") {
        widthSvg = 15
        heightSvg = 5  } 
  return (
    <div className="container__collapse">
      
    <button
      className={`button ${formatting} ${isOpen ? "open" : ""}  `}
      onClick={() => setOpen(!isOpen)}
      >
      {title}
      {!isOpen ? (
               <svg width={widthSvg} height={heightSvg} viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2.66344 0.85955L0.530518 3.00468L12.4604 14.9234L24.3903 2.99263L22.2574 0.85955L12.4604 10.6572L2.66344 0.85955Z" fill="white"/>
               </svg>
          ) : (
                <svg width={widthSvg} height={heightSvg} viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7268 14.1403L23.8597 11.9951L11.9298 0.0764155L-5.01125e-05 12.0072L2.13287 14.1403L11.9298 4.34257L21.7268 14.1403Z" fill="white"/>
                </svg>
          )}



    </button>
    <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
      <div className={`accordion-content ${formatting}`}>{children}</div>
    </div>
  </div>
  );
}