import { CollectionConfig } from "payload/types";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "name",
  },
  access: {},
  fields: [
   
    {
        name: "Description",
        label: "Decription",
        type: 'textarea',
        required: true
    },
    {
      name: 'images',
      type: 'array',
      label: "Blog Image",
      minRows: 1,
      maxRows: 4,
      required: true,
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      fields: [
        {
          name: 'image',
          type: "upload", 
          relationTo: 'media',
          required: true
        }
      ]
    }
  ]
};
