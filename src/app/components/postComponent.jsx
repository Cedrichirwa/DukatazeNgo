import React from "react";
import Image from "next/image";
import Link from "next/link";
import { trpc } from "@/trpc/client";
import SkeletonLoader from "./skeletonLoader"; // Adjust the path as needed
import MagicButton from "../components/ui/MagicButton"; // Import the MagicButton

const FALLBACK_LIMIT = 10;

const PostComponent = (props) => {
  const { query } = props;
  const { data: queryResults, isLoading } =
    trpc.getInfiniteBlogs.useInfiniteQuery(
      {
        limit: query.limit ?? FALLBACK_LIMIT,
        query,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    );

  const blogs = queryResults?.pages.flatMap((page) => page.items) || [];
  

  return (
    <>
      {isLoading
        ? Array.from({ length: 3 }).map((_, i) => <SkeletonLoader key={i} />)
        : blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative p-4 flex flex-col items-center border border-yellow-600 rounded-lg mx-2 gap-2 mb-10"
            >
              {/* Main Image */}
              {blog.mainImage && (
                <div className="relative w-full h-48 rounded-lg overflow-hidden group hover:cursor-pointer">
                <Image
                  src={
                    typeof blog.mainImage === "string"
                      ? blog.mainImage
                      : blog.mainImage.url
                  }
                  width={320}
                  height={180}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  alt="Blog Main Image"
                />
                
                {/* Hover overlay with description excerpt */}
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center p-4">
                  <p className="text-center text-sm line-clamp-3">{blog.description}</p>
                </div>
              </div>
              )}

              {/* Blog Heading */}
              <h2 className="text-lg font-bold text-left mt-2">
                {blog.heading}
              </h2>

              {/* Link to Full Blog Post */}
              <Link href={`/blog/${blog.id}`} className="flex items-center">
                <MagicButton
                  title="Read More"
                  bgColor="bg-cyan-600" // You can change this color as needed
                  otherClasses="w-full "
                />
              </Link>
            </div>
          ))}
    </>
  );
};

export default PostComponent;

// import React from "react";
// import Image from "next/image";
// import { trpc } from "@/trpc/client";
// import SkeletonLoader from "./skeletonLoader"; // Adjust the path as needed

// const FALLBACK_LIMIT = 3;

// const PostComponent = (props) => {
//   const { query } = props;
//   const { data: queryResults, isLoading } = trpc.getInfiniteBlogs.useInfiniteQuery(
//     {
//       limit: query.limit ?? FALLBACK_LIMIT,
//       query,
//     },
//     {
//       getNextPageParam: (lastPage) => lastPage.nextPage,
//     }
//   );

//   const blogs = queryResults?.pages.flatMap((page) => page.items) || [];

//   return (
//     <>
//       {isLoading ? (
//         // Render the skeleton loader while loading
//         Array.from({ length: 3 }).map((_, i) => <SkeletonLoader key={i} />)
//       ) : (
//         blogs.map((blog, i) => (
//           <div
//             key={i}
//             className="relative p-1 flex flex-col items-center border rounded-lg mx-2 gap-1"
//           >
//             {blog.images && blog.images.length > 0 && (
//               <Image
//                 src={
//                   typeof blog.images[0].image === "string"
//                     ? blog.images[0].image
//                     : blog.images[0].image.url
//                 }
//                 width={320}
//                 height={100}
//                 className="rounded-lg h-80"
//                 alt="Blog Image"
//                 style={{ objectFit: "cover" }}
//               />
//             )}
//             <div className="bg-white p-2 bottom-1 left-0 right-0 mx-auto text-sm">
//               {blog.Description}
//             </div>
//           </div>
//         ))
//       )}
//     </>
//   );
// };

// export default PostComponent;

// import React from "react";
// import Image from "next/image";
// import { trpc } from "@/trpc/client";

// const FALLBACK_LIMIT = 3;

// const PostComponent = (props) => {
//   const { query } = props;
//   const { data: queryResults } = trpc.getInfiniteBlogs.useInfiniteQuery(
//     {
//       limit: query.limit ?? FALLBACK_LIMIT,
//       query,
//     },
//     {
//       getNextPageParam: (lastPage) => lastPage.nextPage,
//     }
//   );

//   const blogs = queryResults?.pages.flatMap((page) => page.items);

//   let map = [];
//   if (blogs && blogs.length) {
//     map = blogs;
//   }
//   return (
//     <>
//       {map.map((blog, i) => (
//         <div
//           key={i}
//           className="relative p-1 flex flex-col items-center border rounded-lg mx-2 gap-1"
//         >
//            {blog.images && blog.images.length > 0 && (
//                   <Image
//                     src={
//                       typeof blog.images[0].image === "string"
//                         ? blog.images[0].image
//                         : blog.images[0].image.url
//                     }
//                     width= {320}
//                     height={100}
//                     className="rounded-lg h-80 "
//                     alt="Blog Image"
//                     style={{ objectFit: "cover" }}
//                   />
//                 )}

//           <div className="bg-white p-2 bottom-1 left-0 right-0 mx-auto text-sm">
//             {blog.Description}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };
// export default PostComponent;
