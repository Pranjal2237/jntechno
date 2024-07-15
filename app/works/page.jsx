"use client";

import Banner from "@/components/banner";
import { aboutBanner, arrow, contentBanner, offerings1 } from "@/public";
import { allWorks } from "@/services/workservice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [works, setWorks] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();

  const handlePage = (e) => {
    const newPage = Number(e.target.innerText);
    setPage(newPage);
  };

  useEffect(() => {
    async function fetchWorks() {
      const { total, works } = await allWorks(page);
      const mpage = Math.ceil(total / 6);
      setMaxPage(mpage);
      console.log(works);
      setWorks([...works]);
    }
    fetchWorks();
  }, [page]);

  return (
    <div>
      <Banner image={aboutBanner} heading="Works" height="560px" />
      <div className="wrapper page-heading">
        <p>Works</p>
      </div>
      <div className="wrapper work-container">
        {works.map(({ heading, industry, bannerPath, _id }) => (
          <div className="work-card">
            <div>
              <Image src={contentBanner} style={{minHeight:'250px'}} />
            </div>
            <div className="work-content">
              <div>
                <h6>{industry}</h6>
                <h4>{heading}</h4>
              </div>
              <div style={{ position: "relative",marginTop:'10px',height:'50px' }}>
                <Link href={`/works/${_id}`} className="cardLink">
                  <span>READ MORE</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="wrapper padding-block pagination-container">
        <div
          className="pagination-box"
          onClick={() => {
            setPage(page - 1);
          }}
          style={{ display: page == 1 ? "none" : "flex" }}
        >
          <Image src={arrow} />
        </div>
        <div
          className="pagination-box"
          style={{
            fontWeight: page == 1 && "700",
            borderBottom: page == 1 && "3px solid blue",
          }}
          onClick={(e) => {
            handlePage(e);
          }}
        >
          {page == 1 ? page : page == maxPage ? page - 2 : page - 1}
        </div>
        <div
          className="pagination-box"
          style={{
            fontWeight: page > 1 && page < maxPage && "700",
            borderBottom: page > 1 && page < maxPage && "3px solid blue",
          }}
          onClick={(e) => {
            handlePage(e);
          }}
        >
          {page == 1 ? page + 1 : page == maxPage ? page - 1 : page}
        </div>
        <div
          className="pagination-box"
          style={{
            fontWeight: page == maxPage && "700",
            borderBottom: page == maxPage && "3px solid blue",
          }}
          onClick={(e) => {
            handlePage(e);
          }}
        >
          {page == 1 ? page + 2 : page == maxPage ? page : page + 1}
        </div>
        <div
          className="pagination-box"
          onClick={() => {
            setPage(page + 1);
          }}
          style={{ display: page == maxPage ? "none" : "flex" }}
        >
          <Image src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default page;
