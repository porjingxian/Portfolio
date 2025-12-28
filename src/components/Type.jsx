import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Type() {
  return (
    <div
      style={{
        textAlign: "left",
        minHeight: "50px", 
      }}
      className="typical-custom"
    >
      <Typewriter
        words={["Automation Technologist", "System Integrator", "Software Developer"]}
        loop={0}          
        cursor
        cursorStyle="|"
        typeSpeed={100}    
        deleteSpeed={50}   
        delaySpeed={1500}  
        
      />
    </div>
  );
}

export default Type;
