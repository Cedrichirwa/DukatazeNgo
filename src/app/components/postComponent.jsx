import React from "react";
import Image from "next/image";
import { trpc } from "@/trpc/client";
import SkeletonLoader from "./skeletonLoader"; // Adjust the path as needed

const FALLBACK_LIMIT = 3;

const PostComponent = (props) => {
  const { query } = props;
  const { data: queryResults, isLoading } = trpc.getInfiniteBlogs.useInfiniteQuery(
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
      {isLoading ? (
        // Render the skeleton loader while loading
        Array.from({ length: 3 }).map((_, i) => <SkeletonLoader key={i} />)
      ) : (
        blogs.map((blog, i) => (
          <div
            key={i}
            className="relative p-1 flex flex-col items-center border rounded-lg mx-2 gap-1"
          >
            {blog.images && blog.images.length > 0 && (
              <Image
                src={
                  typeof blog.images[0].image === "string"
                    ? blog.images[0].image
                    : blog.images[0].image.url
                }
                width={320}
                height={100}
                className="rounded-lg h-80"
                alt="Blog Image"
                style={{ objectFit: "cover" }}
              />
            )}
            <div className="bg-white p-2 bottom-1 left-0 right-0 mx-auto text-sm">
              {blog.Description}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default PostComponent;



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
