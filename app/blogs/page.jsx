"use client";

import Banner from "@/components/banner";
import { client } from "@/lib/contentful/client";
import { aboutBanner,arrow } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();
  const handlePage = (e) => {
    const newPage = Number(e.target.innerText);
    setPage(newPage);
  };

  useEffect(() => {
    async function getBlogs() {
      const response = await client.getEntries({
        content_type: "blogs",
        // limit: 1,
        // skip: 1*(page-1),
      });
      setBlogs([...response.items]);
    }
    getBlogs();
  }, [page]);
  return (
    <div>
      <Banner image={aboutBanner} heading="Blogs" height="560px" />
      <div className="wrapper page-heading">
        <p>Blogs</p>
      </div>
      <div className="wrapper blogs-container">
        <div className="blogs-all-container">
          {blogs?.map(
            ({
              fields: { author, slug, title, excerpt, coverImage },
              sys: { createdAt },
            }) => {
              const date = new Date(createdAt);
              const d = date.getDate();
              const m = date.getMonth();
              const y = date.getFullYear();
              return (
                <div className="blog-card">
                  <div>
                    <Image
                      src={`http:${coverImage?.fields?.file?.url}`}
                      width={coverImage?.fields?.file?.details?.image?.width}
                      height={coverImage?.fields?.file?.details?.image?.height}
                    />
                  </div>
                  <div className="blog-content">
                    <div>
                      <h3>{title}</h3>
                      <p>{excerpt}</p>
                    </div>
                    <div style={{ position: "relative",marginTop:'10px',height:'50px' }}>
                      <Link href={`/blogs/${slug}`} className="cardLink">
                        <span style={{ fontSize: "16px" }}>READ MORE</span>
                      </Link>
                    </div>
                  </div>
                  <div className="blogs-author">
                    <div>
                      <p>{author.fields.name}</p>
                    </div>
                    <div>
                      <p>{`${d}/${m + 1}/${y}`}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="trending-posts-container">
          <h3>Trending Posts</h3>
          {blogs?.map(({ fields: { author, title, slug } }) => (
            <div>
              <Link href={`/blogs/${slug}`}>
                <h4>{title}</h4>
              </Link>
              <p>{`By ${author.fields.name}`}</p>
            </div>
          ))}
        </div>
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
