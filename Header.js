import React from "react";
import { LOGO_URL } from "./constants";
import { Link } from "react-router-dom";
const Header= () => {
    return (
        <div className="flex justify-between bg-orange-300 shadow-lg">
            <div className="p-4 m-4">
                <img className= "w-10"src={LOGO_URL} />
            </div>

            <div className="nav-items ">
                <ul className="flex p-4 m-4">
                    <li className="p-4 hover:bg-green-400">
                        <Link to = "/dashboard">Dashboard</Link>
                        </li>
                    <li className="p-4 hover:bg-green-400">
                        <Link to = "/create">create add </Link>
                        </li>
                </ul>
            </div>
        </div>
    );
};
export default Header;