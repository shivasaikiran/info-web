import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-around font-medium">
        <div className="z-50 flex justify-between w-full p-5 md:w-auto">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="inline-block px-3 py-7">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="hidden md:block">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="inline-block px-3 py-7">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5 ">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;