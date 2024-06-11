"use client";

import React, { useState, useEffect } from "react";
import "../../styles/global.css";
import Image from "next/image";
import { logo, logodark } from "@/public";
import { navigation } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isscroll, setIsScroll] = useState(false);
  const [isOpen,setIsOpen]=useState(false);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  useEffect(() => {
    let paths = pathname.split("/");
    paths = paths[1];
    setActivePath(paths);
  }, [pathname]);
  return (
    <div className={isscroll === true ? "navigation scroll" : "navigation"} style={{position:isOpen?"absolute":"fixed"}}>
      <div className="nav_box wrapper">
        <div className="nav_logo">
          {
            isscroll===false ? <Link href="/">
            <Image src={logo} />
          </Link> :<Link href="/">
            <Image src={logodark} />
          </Link>
          }
        </div>
        <ul className="nav_items">
          {navigation.map(({ nav, subnav, navLink, haveLink = false }) => (
            <div className="hide">
              <li>
                {haveLink ? (
                  <Link
                    href={`/${navLink}`}
                    style={{ color: isscroll === true ? "#333" : "#fff" }}
                  >
                    <h5
                      style={
                        nav.toLowerCase() === activePath
                          ? { fontWeight: "600" }
                          : {}
                      }
                    >
                      {nav}
                    </h5>
                  </Link>
                ) : (
                  <div style={{ color: isscroll === true ? "#333" : "#fff" }}>
                    <h5
                      style={
                        nav.toLowerCase() === activePath
                          ? { fontWeight: "600" }
                          : {}
                      }
                    >
                      {nav}
                    </h5>
                  </div>
                )}
                <div
                  className="after"
                  style={
                    nav.toLowerCase() === activePath ? { display: "block" } : {}
                  }
                ></div>
              </li>
              {subnav?.length > 0 && (
                <div className="subnav">
                  <div className="wrapper">
                    {subnav?.length > 0 &&
                      subnav.map(({ heading, headingLink, options }) => (
                        <div>
                          <Link
                            className="subnav-heading"
                            href={`/${navLink}/${headingLink}`}
                          >
                            {heading}
                          </Link>
                          <div>
                            {options?.length > 0 &&
                              options.map(({ option, optionLink }) => (
                                <Link
                                  className="subnav-option"
                                  href={`/${navLink}/${headingLink}/${optionLink}`}
                                >
                                  {option}
                                </Link>
                              ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className={isOpen?"sidebar-icon active":"sidebar-icon"} onClick={()=>{setIsOpen(!isOpen)}} style={{height:"auto",padding:'5px'}}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
        </ul>
        <ul className="sidebar nav_items" style={{display:isOpen?'block':'none'}}>
          {navigation.map(({ nav, subnav, navLink, haveLink = false }) => (
            <div >
              <li>
                {haveLink ? (
                  <Link
                    href={`/${navLink}`}
                    onClick={()=>{setIsOpen(false)}}
                  >
                    <h5
                      style={
                        nav.toLowerCase() === activePath
                          ? { fontWeight: "600" }
                          : {}
                      }
                    >
                      {nav}
                    </h5>
                  </Link>
                ) : (
                  <div >
                    <h5
                      style={
                        nav.toLowerCase() === activePath
                          ? { fontWeight: "600" }
                          : {}
                      }
                    >
                      {nav}
                    </h5>
                  </div>
                )}
                <div
                  className="after"
                  style={
                    nav.toLowerCase() === activePath ? { display: "block" } : {}
                  }
                ></div>
              </li>
              {subnav?.length > 0 && (
                <div className="subnav">
                  <div>
                    {subnav?.length > 0 &&
                      subnav.map(({ heading, headingLink, options }) => (
                        <div>
                          <Link
                            className="subnav-heading"
                            href={`/${navLink}/${headingLink}`}
                            onClick={()=>{setIsOpen(false)}}
                          >
                            {heading}
                          </Link>
                          <div>
                            {options?.length > 0 &&
                              options.map(({ option, optionLink }) => (
                                <Link
                                  className="subnav-option"
                                  href={`/${navLink}/${headingLink}/${optionLink}`}
                                  onClick={()=>{setIsOpen(false)}}
                                >
                                  {option}
                                </Link>
                              ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
