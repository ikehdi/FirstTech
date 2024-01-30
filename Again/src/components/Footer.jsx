import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
    // const [time , setTime] = useState(times)

    // const times = new Date().getFullYear()
  return (
    <div className=" w-full bg-[#eee]">
      <div className="container">
        <h1>ACTIVATOR <span> HQ</span></h1>
        <div className="icons">
            <ul>
                <li><a href="#"><FaFacebookF /></a></li>
                <li><a href="#"><FaTwitter /></a></li>
                <li><a href="#"><FaYoutube /></a></li>
                <li><a href="#"><FaLinkedin /></a></li>
                <li><a href="#"><FaWifi /></a></li>
            </ul>
        </div>
        <div className="links">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Become a  Member</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Legal</a></li>
            </ul>
        </div>
        <div className="localtion">
        
            <p>Activator HQ</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
