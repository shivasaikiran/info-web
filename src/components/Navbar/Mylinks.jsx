import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen, FaCode, FaBuilding, FaGlobe, FaMobileAlt, FaCloud, FaPuzzlePiece, FaExchangeAlt, FaTools, FaServer, FaNetworkWired, FaHdd, FaBullhorn, FaUserFriends, FaShieldAlt, FaComments, FaChartLine, FaLaptopCode, FaCogs, FaHeadset, FaClipboardCheck, FaRobot, FaSyncAlt, FaLightbulb, FaBriefcase, FaCloudSun, FaProjectDiagram, FaDatabase, FaHandshake, FaAws, FaHome, FaStethoscope, FaPlane, FaUniversity, FaShoppingCart, FaFilm, FaTruck, FaTags, FaUserTie, FaUsers, FaHandsHelping, FaCertificate, FaDraftingCompass, FaCommentsDollar, FaBlog, FaBook, FaFileAlt, FaDollarSign } from 'react-icons/fa';

export const links = [
  {
    name: "About Us",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { icon: <FaUserTie color="#33C1FF" />, name: "Careers", link: "/" },
          { icon: <FaBuilding color="#33FF57" />, name: "Company", link: "/" },
          { icon: <FaUsers color="#FF33A8" />, name: "Our Clients", link: "/" },
          { icon: <FaHandsHelping color="#FF33FF" />, name: "How WE Work", link: "/" },
          { icon: <FaCertificate color="#33FFBB" />, name: "Quality Assurance", link: "/" },
          { icon: <FaDraftingCompass color="#FF5733" />, name: "Development Approach", link: "/" },
          { icon: <FaCommentsDollar color="#33C1FF" />, name: "Communication Strategy", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Services",
    submenu: true,
    sublinks: [
      {
        Head: "Software Development",
        sublink: [
          { icon: <FaBoxOpen color="#FF5733" />, name: "Product Development", link: "/" },
          { icon: <FaCode color="#33C1FF" />, name: "Custom Software Development", link: "/" },
          { icon: <FaBuilding color="#33FF57" />, name: "Enterprise Software Development", link: "/" },
          { icon: <FaGlobe color="#FF33A8" />, name: "Web Application Development", link: "/" },
          { icon: <FaMobileAlt color="#FF33FF" />, name: "Mobile Application Development", link: "/" },
          { icon: <FaCloud color="#33FFBB" />, name: "Cloud Application Development", link: "/" },
        ],
      },
      {
        Head: "Infrastructure",
        sublink: [
          { icon: <FaPuzzlePiece color="#FF5733" />, name: "Integration", link: "/" },
          { icon: <FaExchangeAlt color="#33C1FF" />, name: "Migration", link: "/" },
          { icon: <FaTools color="#33FF57" />, name: "DevOps", link: "/" },
          { icon: <FaServer color="#FF33A8" />, name: "Cloud Infrastructure", link: "/" },
          { icon: <FaNetworkWired color="#FF33FF" />, name: "Hybrid Infrastructure", link: "/" },
          { icon: <FaHdd color="#33FFBB" />, name: "On-Premises Infrastructure", link: "/" },
        ],
      },
      {
        Head: "Digital",
        sublink: [
          { icon: <FaBullhorn color="#FF5733" />, name: "Digital Marketing", link: "/" },
          { icon: <FaUserFriends color="#33C1FF" />, name: "Influential Marketing", link: "/" },
          { icon: <FaShieldAlt color="#33FF57" />, name: "Online Reputation Management", link: "/" },
          { icon: <FaComments color="#FF33A8" />, name: "Digital Consultation", link: "/" },
          { icon: <FaChartLine color="#FF33FF" />, name: "Improved ROI", link: "/" },
        ],
      },
      {
        Head: "Maintenance and Support",
        sublink: [
          { icon: <FaLaptopCode color="#FF5733" />, name: "Application Support", link: "/" },
          { icon: <FaCogs color="#33C1FF" />, name: "Infrastructure Support", link: "/" },
          { icon: <FaHeadset color="#33FF57" />, name: "Customer Support", link: "/" },
        ],
      },
      {
        Head: "Testing",
        sublink: [
          { icon: <FaClipboardCheck color="#FF33A8" />, name: "Manual Testing", link: "/" },
          { icon: <FaRobot color="#FF33FF" />, name: "Automation Testing", link: "/" },
          { icon: <FaSyncAlt color="#33FFBB" />, name: "Continuous Testing", link: "/" },
        ],
      },
      {
        Head: "Advisory",
        sublink: [
          { icon: <FaLightbulb color="#FF5733" />, name: "Digital Transformation", link: "/" },
          { icon: <FaBriefcase color="#33C1FF" />, name: "Business Technology Consulting", link: "/" },
          { icon: <FaCloudSun color="#33FF57" />, name: "Cloud Strategy Consulting", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Solutions",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { icon: <FaProjectDiagram color="#FF33A8" />, name: "Sap", link: "/" },
          { icon: <FaBriefcase color="#FF33FF" />, name: "Workday", link: "/" },
          { icon: <FaProjectDiagram color="#33FFBB" />, name: "ERPNext", link: "/" },
          { icon: <FaProjectDiagram color="#FF5733" />, name: "Salesforce", link: "/" },
          { icon: <FaDatabase color="#33C1FF" />, name: "Data Solution", link: "/" },
          { icon: <FaHandshake color="#33FF57" />, name: "Contract Consulting", link: "/" },
          { icon: <FaAws color="#FF33A8" />, name: "Amazon Web Services", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Industries",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { icon: <FaHome color="#FF33FF" />, name: "Real Estate", link: "/" },
          { icon: <FaStethoscope color="#33FFBB" />, name: "Health Care", link: "/" },
          { icon: <FaPlane color="#FF5733" />, name: "Travel & Tourism", link: "/" },
          { icon: <FaDollarSign color="#33C1FF" />, name: "Banking & Finance", link: "/" },
          { icon: <FaShoppingCart color="#33FF57" />, name: "E-Commerce Solution", link: "/" },
          { icon: <FaUniversity color="#FF33A8" />, name: "Education & E-Learning", link: "/" },
          { icon: <FaFilm color="#FF33FF" />, name: "Media & Entertainment", link: "/" },
          { icon: <FaTruck color="#33FFBB" />, name: "Logistics & Transportation", link: "/" },
          { icon: <FaTags color="#FF5733" />, name: "Retail & Consumer Goods", link: "/" },
        ],
      },
    ],
  },
 
  {
    name: "Resources",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { icon: <FaBlog color="#33FF57" />, name: "Blog", link: "/" },
          { icon: <FaBriefcase color="#FF33A8" />, name: "Portfolio", link: "/" },
          { icon: <FaBook color="#FF33FF" />, name: "Web Stories", link: "/" },
          { icon: <FaFileAlt color="#33FFBB" />, name: "Case Study", link: "/" },
        ],
      },
    ],
  },
];
