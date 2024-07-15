"use client";

import Banner from "@/components/banner";
import { assurance, diBanner, offerings1 } from "@/public";
import { getWork } from "@/services/workservice";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from 'next/image'

const page = () => {
  const [work, setWork] = useState({});
  const { slug } = useParams();
  useEffect(() => {
    async function fetchWork() {
      const work = await getWork(slug);
      setWork({ ...work });
    }
    fetchWork();
  }, []);

  const {
    heading,
    bannerPath,
    industry,
    services,
    overview,
    challenges,
    benifits,
  } = work;

  return (
    <div>
      {work && (
        <div>
          <Banner image={diBanner} height="560px" />
          <div className="wrapper">
            <div className="work-about-container">
              <Link href="/works" className="work-back-link">
                <span>BACK TO WORKS</span>
              </Link>
              <div style={{borderBottom:'1px solid black'}}>
                <h2>{heading}</h2>
                <div className="work-specification">
                  <div>
                    <h5>Industry</h5>
                    <h5>{industry}</h5>
                  </div>
                  <div>
                    <h5>Services</h5>
                    <h5>{services}</h5>
                  </div>
                </div>
              </div>
              <div className="work-overview-container">
                <div className="work-overview-content-box">
                  <div>
                  <h2>Overview</h2>
                  <p>{overview?.description}</p>
                  </div>
                  <Image src={offerings1} />
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper work-challenges-container padding-block qinsight-benifits-container">
            <h2>Challenges</h2>
            <div className="work-challenges-content-box">
              {
                challenges?.map(({picturePath,content})=>(
                  <div>
                    <Image src={assurance} />
                    <p>{content}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="wrapper padding-block work-benifits-container">
            <h2>Benifits</h2>
            <div>
              <ul>
                {
                  benifits?.benifitList?.map((points)=>(
                    <li>{points}</li>
                  ))
                }
              </ul>
              <Image src={offerings1} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
