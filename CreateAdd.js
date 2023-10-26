import React from "react";
import { Link } from "react-router-dom";
const CreateAdd= () => {
    return (
       
        <div className=" p-10 m-10 border border-red-500 flex space-between">
        <ul className="flex p-4 m-4">
             <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
             <img
        className="rounded-lg"
        alt="res-logo"
        src="https://as1.ftcdn.net/v2/jpg/02/23/61/78/1000_F_223617813_4eAwGvv1igCq19IxQShZxHY4Unuv2hmw.jpg"
      />
                    <li className="p-4 hover:bg-green-400">
                    <Link to = "/create-add/text"> Text Advertisement </Link>
                     </li>
                     </div>
                     <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
                     <img
        className="rounded-lg"
        alt="res-logo"
        src="https://img.freepik.com/premium-vector/social-media-template-aesthetic-fashion-color-flyer-banner-square-ads-promotion_8259-576.jpg?w=2000" />
                     <li className="p-4 hover:bg-green-400">
                         <Link to = "/create-add/img">Image Advertisement</Link>
                         </li>
                  </div>
                     </ul>
  
 </div>
       
    );
};
export default CreateAdd;