"use client";
import React from "react";
import PostComponent from "./postComponent";
import Link from "next/link";

const Blog = () => {

  return (
    <>
      <div className="my-10 sm:mx-12">
        <div>
          <h2 className="sm:text-5xl text-3xl font-bold text-cyan-700 md:py-10 text-center">
            Blogs
          </h2>
          <p className="text-center text-gray-600 p-1">
            Here are our latest news
          </p>
        </div>

        <div className="grid md:grid-cols-3 ">
          <PostComponent query={{ sort: "desc", limit: 4 }} />
        </div>
        {/* <div className="grid md:grid-cols-3 ">{blog}</div> */}
        <div className="flex items-center justify-center gap-4 my-4">
          <button className="px-3 animate-wobble text-yellow-600">{`>>>`}</button>
          <Link href="/blogs" className="text-cyan-700 font-semibold">
             See more blogs
          </Link>
        </div>
      </div>
    </>
  );
};
export default Blog;
