import React from "react";
import "./Services.css";
import Card from '../Card//Card';
import MotionDiv from "./MotionDiv";


import { motion } from "framer-motion";
import { FaBriefcase, FaChartLine, FaCode, FaCogs, FaNetworkWired, FaRobot } from "react-icons/fa";


const Services = () => {
  // context
  

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span >My Awesome</span>
        <span>services</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href= ''download>
          <button className="button s-button">Download</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
      <div className="cards1">
        {/* first card */}
        <MotionDiv className="one"
          initial={{ left: "10rem" }}
          whileInView={{ left: "9rem" }}
          transition={transition}
        >
          <Card
            emoji={<FaCode />}
            heading={"Sofytware Delopment"}
            detail={"Frontend,Backend,Testing,Database,devops"}
          />
        </MotionDiv>
        {/* second card */}
        <MotionDiv className="two"
          initial={{ left: "-10rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={<FaNetworkWired />}
            heading={"Infrastructure"}
            detail={"Natworking,Servers,Storage,Cloud,Security"}
          />
        </MotionDiv>
        {/* 3rd */}
        <MotionDiv className="three"
          initial={{ top: "19rem", left: "10rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
        >
          <Card
            emoji={<FaChartLine  />}
            heading={"Digital"}
            detail={ "Tranforamtion,Innovation,Technology,Connectivity,Automation"}
            
            color="rgba(252, 166, 31, 0.45)"
          />
        </MotionDiv>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      <div className="cards2">
        {/* first card */}
        <MotionDiv className="four"
          initial={{ left: "10rem" }}
          whileInView={{ left: "9rem" }}
          transition={transition}
        >
          <Card
            emoji={<FaCogs  />}
            heading={"Maintainence and Support"}
            detail={"Upkeep, Monitoring,Troubleshooting,Updates,Assistance"}
          />
        </MotionDiv>
        {/* second card */}
        <MotionDiv className="five"
          initial={{ left: "-10rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={ <FaRobot  />}
            heading={"Testing"}
            detail={"Unit,Integration, System, Acceptance, Performance"}
          />
        </MotionDiv>
        {/* 3rd */}
        <MotionDiv className="six"
          initial={{ top: "19rem", left: "10rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
        >
          <Card
            emoji={<FaBriefcase  />}
            heading={"Advisory"}
            detail={"Consulting,Guidance,Strategy, Analysi, Planning"}
            
            color="rgba(252, 166, 31, 0.45)"
          />
        </MotionDiv>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
       </div> 
      </div>
    </div>
  );
};

export default Services;