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
    <div className={isscroll === true ? "header scroll" : "header"}>
      <nav className="nav wrapper">
        <div className="nav_data">
        <div className="nav_logo">
          {
            isscroll===false ? <Link href="/">
            <Image src={logo} />
          </Link> :<Link href="/">
            <Image src={logodark} />
          </Link>
          }
        </div>
        <div className={isOpen?"nav_toggle active":"nav_toggle"} onClick={()=>{setIsOpen(!isOpen)}}>
          <div className="toggle"></div>
          <div className="toggle"></div>
          <div className="toggle"></div>
        </div>
        </div>
        <div className="nav_menu" style={{display:isOpen?'block':'none'}}>
        <ul className="nav_list">
          {
            navigation.map(({ nav, subnav, navLink, haveLink = false })=>(
              <li className={haveLink==false && 'dropdown_item'}>
              {haveLink ? (
                  <Link
                    href={`/${navLink}`}
                    className="nav_link"
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
                  <div className="dropdown_button">
                  <div className="nav_link">
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
                  {
                    subnav?.length > 0 && (
                  <div className="dropdown_container wrapper" >
                  <div className="dropdown_content">
                    {
                      subnav.map(({ heading, headingLink, options }) => (
                        <div className="dropdown_group">
                          <Link
                            className="dropdown_title"
                            href={`/${navLink}/${headingLink}`}
                            onClick={()=>{setIsOpen(false)}}
                          >
                            {heading}
                          </Link>
                          <ul className="dropdown_list">
                            {options?.length > 0 &&
                              options.map(({ option, optionLink }) => (
                                <li>
                                <Link
                                  className="dropdown_link"
                                  href={`/${navLink}/${headingLink}/${optionLink}`}
                                  onClick={()=>{setIsOpen(false)}}
                                >
                                  {option}
                                </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
              </div>
              </div>
                    )
                  }
              </div>
              )}
              </li>
            ))
          }
        </ul>
        </div>
        <div className="nav_menu hide">
        <ul className="nav_list">
          {
            navigation.map(({ nav, subnav, navLink, haveLink = false })=>(
              <li className={haveLink==false && 'dropdown_item'}>
              {haveLink ? (
                  <Link
                    href={`/${navLink}`}
                    style={{ color: isscroll === true ? "#333" : "#fff" }}
                    className="nav_link"
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
                  <div className="dropdown_button">
                  <div className="nav_link" style={{ color: isscroll === true ? "#333" : "#fff" }}>
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
                  {
                    subnav?.length > 0 && (
                  <div className="dropdown_container wrapper" >
                  <div className="dropdown_content">
                    {
                      subnav.map(({ heading, headingLink, options }) => (
                        <div className="dropdown_group">
                          <Link
                            className="dropdown_title"
                            href={`/${navLink}/${headingLink}`}
                            onClick={()=>{setIsOpen(false)}}
                          >
                            {heading}
                          </Link>
                          <ul className="dropdown_list">
                            {options?.length > 0 &&
                              options.map(({ option, optionLink }) => (
                                <li>
                                <Link
                                  className="dropdown_link"
                                  href={`/${navLink}/${headingLink}/${optionLink}`}
                                  onClick={()=>{setIsOpen(false)}}
                                >
                                  {option}
                                </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
              </div>
              </div>
                    )
                  }
              </div>
              )}
              </li>
            ))
          }
        </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
