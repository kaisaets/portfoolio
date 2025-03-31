import React from "react";
import './styles/Footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return(
        <div className="footer">
           <div className="icons">
           <FaGithub />
           <FaLinkedin />
           <HiOutlineMail />
           <MdEmail /> {/* meilivorm, kumb logo, logod ühte suurusesse? */}

           </div>
           {/* //script? */}
           <p> &copy; 2025</p> 
        </div>
    )
}
export default Footer