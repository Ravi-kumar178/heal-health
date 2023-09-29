import img1 from "../assets/AI Website Banner 2[777].png";
import img2 from "../assets/Final Logo of 8th National Health Writers & Influencers Convention-2023[783].png";
import {FaBars } from "react-icons/fa";
import {SlCalender } from "react-icons/sl";
import { HashLink } from "react-router-hash-link";
import React, { useState } from 'react';
import './Navbar.css';
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";




const Navbar = (props) => {

   const pages = props.pages;
   console.log(pages);
   const titles = props.titles;

    const[sideBar,setSideBar] = useState(false);
   const [dropdown,setShowDropdown] = useState(false);
   const [navbar,setNavbar] = useState(true);

    function handleMouseEnter(){
      setShowDropdown(true);
    }
    
    function handleMouseLeave(){
      setShowDropdown(false);
    }

    function sideBarMouseEnter(){
      setSideBar(true);
      setNavbar(false);

    }

    function sideBarMouseLeave(){
      setSideBar(false);
      setNavbar(true)
    }

    return(
       <div className="relative">
           <div className="relative">
           
           <img src={img1} loading="lazy" alt="" className="h-[640px] w-[100vw]"></img>

           <nav className="absolute top-0 flex justify-between items-center space-x-[200px] pl-10 first w-full h-[100px]">
               <img src={img2} alt="" loading="lazy" className=" h-[75px] w-[220px] cursor-pointer"></img>

               <div className="flex justify-between items-center space-x-4  translate-x-[-80px]">
                 <div>
                  { navbar?
                    (
                    <div className="flex flex-row  space-x-3  ">
                      <ScrollLink to="/" smooth={true} duration={500}
                    className="text-[20px] spy={true} smooth={true} offset={50} duration={500} font-semibold text-white -translate-x-1 relative hover:text-[#0d86e8] transition-all duration-200 group">
                    <p>Home</p>
                    <div className="absolute -bottom-9 w-full h-1 bg-[#0d86e8] hidden group-hover:block transition-all duration-200  "></div>
                    </ScrollLink>

                     <ScrollLink to="overview" smooth={true} duration={500}
                   className="text-[20px] font-semibold text-white relative hover:text-[#0d86e8] transition-all duration-200 group">
                    <p>Overview</p>
                    <div className="absolute -bottom-9 w-full h-1 bg-[#0d86e8] hidden group-hover:block transition-all duration-200  "></div>
                      </ScrollLink>

                      <Link to="/previous-convention" className="text-[20px] font-semibold text-white relative hover:text-[#0d86e8] transition-all duration-200 group" >Previous Convention
                        </Link>

               { /*     <ScrollLink to="features" smooth={true} duration={500}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   className="text-[20px] font-semibold text-white translate-x-2 relative hover:text-[#0d86e8] transition-all duration-200 group">
                    <div>
                      <p>Previous Convention</p>
                     {
                       dropdown ? 
                       (
                       <div className="absolute top-7 -left-6 bg-[#2f435c] w-[250px] mx-auto text-center flex flex-col space-y-3 font-semibold border p-5 text-white">
                          {
                           pages.map((page) => (<div className="name">{page}</div> ) )
                          }
                          
                       </div>
                      
                       ) 
                       : 
                       (null) 
                     }
                     
                     </div>
                    
                     </ScrollLink>
                      */}
                      <ScrollLink to="Agenda" smooth={true} duration={2000} offset={50}
                   className="text-[20px] font-semibold text-white translate-x-3 relative hover:text-[#0d86e8] transition-all duration-200 group">
                    <p>Agenda</p>
                    <div className="absolute -bottom-9 w-full h-1 bg-[#0d86e8] hidden group-hover:block transition-all duration-200  "></div>
                      </ScrollLink>

                      <ScrollLink to="speakers" smooth={true} duration={1000}
                   className="text-[20px] font-semibold text-white translate-x-4 relative hover:text-[#0d86e8] transition-all duration-200 group">
                    <p>Speakers</p>
                    <div className="absolute -bottom-9 w-full h-1 bg-[#0d86e8] hidden group-hover:block transition-all duration-200  "></div>
                       </ScrollLink>

                       <ScrollLink to="overview" smooth={true} duration={500}
                   className="text-[20px] font-semibold text-white translate-x-5 relative hover:text-[#0d86e8] transition-all duration-200 group">
                    <p>Attendees</p>
                    <div className="absolute -bottom-9 w-full h-1 bg-[#0d86e8] hidden group-hover:block transition-all duration-200  "></div>
                       </ScrollLink>

                       <ScrollLink to="partners" smooth={true} duration={2300}
                   className="text-[20px] font-semibold text-white translate-x-6 relative hover:text-[#0d86e8] transition-all duration-200 group">
                    <p>Partners</p>
                    <div className="absolute -bottom-9 w-full h-1 bg-[#0d86e8] hidden group-hover:block transition-all duration-200  "></div>
                       </ScrollLink>

                       <ScrollLink to="about" smooth={true} duration={500}
                   className="text-[20px] font-semibold text-white relative translate-x-7 hover:text-[#0d86e8] transition-all duration-200 group">
                    <p>Contact us</p>
                    <div className="absolute -bottom-9 w-full h-1 bg-[#0d86e8] hidden group-hover:block transition-all duration-200  "></div>
                       </ScrollLink>
                       </div>
                       )
                       :
                       (null)
             }    
                 </div> 
 
               </div>

           </nav>

            <div className="absolute top-[100px] z-0 right-10 flex flex-col space-y-10 ">
            <img src={img2} className="h-[100px] w-[350px] z-0 translate-y-[30px] translate-x-[0px]"></img>
             <div className="flex flex-col justify-center items-center space-y-6">
                <div className="bg-white mt-2 py-2 pl-2 pr-2 rounded-md flex flex-row relative items-center justify-center space-x-4">
                   <SlCalender color="black" size={30}/>
                   <span className="font-semibold relative"><span>30</span><span className="font-semibold ">TH</span> <span className="">NOVEMBER - </span><span>1</span><span>ST</span> <span>DECEMBER 2023</span></span>
                </div>
            
               <div className="flex justify-center items-center">
                <button className="bg-red-600 py-2 px-8 text-white rounded-md font-semibold text-xl hover:bg-white hover:text-red-700 transition-all duration-200">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2Tcg7GPweYLIE89eR98cd1MuPhQvRNS1RpccgUqYL7nUzew/viewform?usp=sf_link">Express interest</a>
                  </button>
               </div>
             </div>
                
               
            </div>

         
          </div>
          
       </div>
    );

}

export default Navbar;