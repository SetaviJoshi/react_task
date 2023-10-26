import React from "react";
import {Submittedimg} from "./constants";

const Submitted = () => {
    return (
        
        <div >    
            <div className="p-4 m-4 border border-green-500" >
               
            < h1 className="font-bold text-5xl pt-10  m-35 text-left">Your Form has been </h1> 
            <h1 className="font-bold text-7xl text-left animate-pulse  text-green-400">SUBMITTED SUCCESSFULLY !!</h1>
                <img className = "margin-left-auto margin-right-auto w-25 h-20"
                 src= "https://icons.veryicon.com/png/o/miscellaneous/8atour/submit-successfully.png"/>
              
            </div>
            
    </div>
    );
};
export default Submitted;