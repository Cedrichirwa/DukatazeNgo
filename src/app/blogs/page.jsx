"use client"
import React from "react";
import PostComponent from "@/app/components/postComponent";

const BlogsPage = () => {
  return (
    <>
      <div className="py-4">
        <h1 className="md:text-5xl text-cyan-700 text-3xl text-center my-8 font-semibold">
          My Period is ARTsome
        </h1>
        <div className="grid md:grid-cols-3 lg:gap-6 gap-2">
          <PostComponent query={{ sort: "desc", limit: 3 }} />
        </div>
      </div>
    </>
  );
};
export default BlogsPage;
