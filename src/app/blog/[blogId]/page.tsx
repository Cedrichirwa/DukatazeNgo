// src/app/blog/[blogId]/page.tsx
import { notFound } from "next/navigation"; // Import notFound from Next.js
import { getPayloadClient } from "../../../get-payload"; // Adjust the import based on your structure
import Image from "next/image"; // Import Next.js Image component

interface PageProps {
  params: {
    blogId: string; // Change from productId to blogId
  };
}

const Page = async ({ params }: PageProps) => {
  const { blogId } = params; // Get the blogId from params

  const payload = await getPayloadClient(); // Initialize the Payload client

  // Fetch the blog post by ID
  const { docs: blogs } = await payload.find({
    collection: "blogs",
    limit: 1,
    where: {
      id: {
        equals: blogId,
      },
    },
  });

  const [blog] = blogs; // Destructure the first blog from the docs

  if (!blog) return notFound(); // Return a 404 page if the blog is not found

  // Render the blog post
  return (
    <div className="pt-20 px-4 md:px-6 max-w-5xl mx-auto mb-10">
      {blog.mainImage && (
        <div className="w-full rounded-lg overflow-hidden mb-8 shadow-md">
          {" "}
          <Image
            src={
              typeof blog.mainImage === "string"
                ? blog.mainImage
                : blog.mainImage.url // Access the URL directly if it's an object
            }
            width={1200} // Adjust the width for better display
            height={10} // Adjust the height accordingly
            className="w-full h-auto object-cover"
            alt="Blog Main Image"
          />
        </div>
      )}
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        {blog.heading}
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center px-2 leading-relaxed">
        {blog.description}
      </p>

      <div className="space-y-16 pt-10">
        {blog.contentBlocks?.map((block: any, index: number) => (
          <div
            key={index}
            className={`flex flex-col gap-2 mb-12 md:flex-row md:items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {block.paragraphImage && (
              <div className="md:w-1/3 md:mr-6 mb-4 md:mb-0 shadow-lg rounded-lg">
                <Image
                  src={
                    typeof block.paragraphImage === "string"
                      ? block.paragraphImage
                      : block.paragraphImage.url
                  }
                  width={320}
                  height={180}
                  className=" w-full rounded-lg object-cover"
                  alt="Paragraph Image"
                />
              </div>
            )}

            <div className="md:w-2/3">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {typeof block.paragraph === "string"
                  ? block.paragraph
                  : JSON.stringify(block.paragraph)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
