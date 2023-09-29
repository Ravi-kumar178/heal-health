import React from 'react'
import img2 from "../assets/Final Logo of 8th National Health Writers & Influencers Convention-2023[783].png"
import './Navbar2.css'
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar2() {
  return (
    <div className='relative secondBg h-[100px] w-[full]'>

        <div className='relative h-full w-full  flex flex-row items-center justify-between'>
            <img src={img2} className='h-[70px] ml-[50px]'></img>

            <h1 className='font-bold text-white text-[70px]  animate-pulse'>Previous</h1>

            <div className='flex flex-row mr-[60px] flex-wrap  space-x-6'>
                
                <ScrollLink to="features" smooth={true} duration={500}
                   className="text-[20px] font-semibold text-white relative hover:text-[#0d86e8] transition-all duration-200 group">
                    <p>Highlights</p>
                    <div className="absolute -bottom-9 w-full h-1 bg-[#0d86e8] hidden group-hover:block transition-all duration-200  "></div>
                      </ScrollLink>

                      <ScrollLink to="speakers" smooth={true} duration={500}
                   className="text-[20px] font-semibold text-white relative hover:text-[#0d86e8] transition-all duration-200 group">
                    <p>Key Speakers</p>
                    <div className="absolute -bottom-9 w-full h-1 bg-[#0d86e8] hidden group-hover:block transition-all duration-200  "></div>
                      </ScrollLink>

                      <ScrollLink to="attendee" smooth={true} duration={500}
                   className="text-[20px] font-semibold text-white relative hover:text-[#0d86e8] transition-all duration-200 group">
                    <p>Attendees</p>
                    <div className="absolute -bottom-9 w-full h-1 bg-[#0d86e8] hidden group-hover:block transition-all duration-200  "></div>
                      </ScrollLink>

                      <ScrollLink to="partners" smooth={true} duration={1500}
                   className="text-[20px] font-semibold text-white relative hover:text-[#0d86e8] transition-all duration-200 group">
                    <p>Partners</p>
                    <div className="absolute -bottom-9 w-full h-1 bg-[#0d86e8] hidden group-hover:block transition-all duration-200  "></div>
                      </ScrollLink>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar2
