// import { CollectionConfig } from "payload/types";

// export const Blogs: CollectionConfig = {
//   slug: "blogs",
//   admin: {
//     useAsTitle: "name",
//   },
//   access: {},
//   fields: [

//     {
//         name: "Description",
//         label: "Decription",
//         type: 'textarea',
//         required: true
//     },
//     {
//       name: 'images',
//       type: 'array',
//       label: "Blog Image",
//       minRows: 1,
//       maxRows: 4,
//       required: true,
//       labels: {
//         singular: 'Image',
//         plural: 'Images',
//       },
//       fields: [
//         {
//           name: 'image',
//           type: "upload",
//           relationTo: 'media',
//           required: true
//         }
//       ]
//     }
//   ]
// };

import { CollectionConfig } from "payload/types";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "heading",
  },
  access: {},
  fields: [
    {
      name: "heading",
      label: "Blog Heading",
      type: "text",
      required: true,
    },
    {
      name: "mainImage",
      label: "Main Blog Image",
      type: "upload",
      relationTo: "media", // make sure your media collection exists
      required: true,
    },
    {
      name: "description",
      label: "Decription",
      type: "textarea",
      required: true,
    },
    {
      name: "contentBlocks",
      label: "Content Blocks",
      type: "array",
      fields: [
        {
          name: "paragraph",
          label: "Paragraph Text",
          type: "textarea", // for formatted text; alternatively, use "textarea" for plain text
          required: true,
        },
        {
          name: "paragraphImage",
          label: "Paragraph Image",
          type: "upload",
          relationTo: "media",
          required: false, // optional image for the paragraph
        },
      ],
    },
  ],
};

export default Blogs;
