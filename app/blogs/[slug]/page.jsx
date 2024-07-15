"use client";

import Banner from "@/components/banner";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [blog, setBlog] = useState();
  const { slug } = useParams();
  useEffect(() => {
    async function getBlog() {
      const response = await client.getEntries({
        content_type: "blogs",
        "fields.slug": slug,
      });
      setBlog(response?.items?.[0]);
    }
    getBlog();
  }, []);

  let title, author, content, coverImage, d, m, y;

  if (blog) {
    title = blog?.fields.title;
    author = blog?.fields.author;
    content = blog?.fields.content;
    coverImage = blog?.fields.coverImage;
    const { createdAt } = blog?.sys;
    const date = new Date(createdAt);
    d = date.getDate();
    m = date.getMonth();
    y = date.getFullYear();
    console.log(title);
  }

  return (
    <div>
      {blog && (
        <div>
          <Banner
            image={`http:${coverImage?.fields?.file?.url}`}
            width={coverImage?.fields?.file?.details?.image?.width}
            height={coverImage?.fields?.file?.details?.image?.height}
          />
          <div className="wrapper" style={{ paddingBottom: "5rem" }}>
            <div className="work-about-container">
              <Link href="/blogs" className="work-back-link">
                <span>BACK TO BLOGS</span>
              </Link>
              <div style={{ borderBottom: "1px solid black" }}>
                <h2>{title}</h2>
                <div className="work-specification">
                  <div>
                    <h5>Published Date</h5>
                    <h5>{`${d}/${m + 1}/${y}`}</h5>
                  </div>
                  <div>
                    <h5>Written By</h5>
                    <h5>{author.fields.name}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="blogs-content">
              {documentToReactComponents(content)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
