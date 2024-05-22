import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="flex items-center justify-between pr-5 py-7 md:pr-0 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="inline text-xl md:hidden">
                <ion-icon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
              </span>
              <span className="hidden text-xl md:mt-1 md:ml-2 md:block group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute z-20 hidden top-20 group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="absolute w-4 h-4 mt-1 rotate-45 bg-white left-3"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-10 p-5 bg-white shadow-lg ">
                    {link.sublinks.map((mysublinks, subIndex) => (
                      <div key={subIndex}>
                        <h1 className="relative text-lg font-semibold text-black hover:text-orange-400">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, subLinkIndex) => (
                          <li key={subLinkIndex} className="text-xs text-gray-600 my-2.5 flex items-center">
                            {slink.icon}
                            <Link to={slink.link} className="ml-2 hover:text-orange-400">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks, subIndex) => (
              <div key={subIndex}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")
                    }
                    className="flex items-center justify-between py-4 pr-5 font-semibold pl-7 md:pr-0"
                  >
                    {slinks.Head}
                    <span className="inline text-xl md:mt-1 md:ml-2">
                      <ion-icon
                        name={`${subHeading === slinks.Head ? "chevron-up" : "chevron-down"}`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                    {slinks.sublink.map((slink, subLinkIndex) => (
                      <li key={subLinkIndex} className="flex items-center py-3 pl-14">
                        {slink.icon}
                        <Link to={slink.link} className="ml-2">
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
