import { User } from "../payload-types";
import { Access, CollectionConfig } from "payload/types";

const isAdminOrHasAccessToImages =
  (): Access =>
  async ({ req }) => {
    const user = req.user as User | undefined

    if (!user) return false
    if (user.role === 'admin') return true

    return {
      user: {
        equals: req.user.id,
      },
    }
  }
export const Media: CollectionConfig = {
  slug: "media",
  hooks: {
    beforeChange: [
      ({ req, data }) => ({
        ...data,
        user: req.user.id,
      }),
    ],
  },
  access: {
    read: () => true, // Public access for media files
    delete: isAdminOrHasAccessToImages(),
    update: isAdminOrHasAccessToImages(),
  },
  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "event",
      type: "relationship",
      relationTo: "events",
      hasMany: true,
    },
    {
      name: "blog",
      type: "relationship",
      relationTo: "blogs",
      hasMany: true,
    },
  ],
};



  
// export const Media: CollectionConfig = {
//   slug: "media",
//   hooks: {
//     beforeChange: [
//       ({ req, data }) => {
//         return { ...data, user: req.user.id }
//       },
//     ],
//   },
//   access: {
//     read: async ({ req }) => {
//       const referer = req.headers.referer

//       if (!req.user || !referer?.includes('sell')) {
//         return true
//       }

//       return await isAdminOrHasAccessToImages()({ req })
//     },
//     delete: isAdminOrHasAccessToImages(),
//     update: isAdminOrHasAccessToImages(),
//   },
//   admin: {
//     hidden: ({ user }) => user.role !== 'admin',
//   },
//   upload: {
//     staticURL: "/media",
//     staticDir: "media",
//     imageSizes: [
//       {
//         name: "thumbnail",
//         width: 400,
//         height: 300,
//         position: "centre",
//       },
//       {
//         name: "card",
//         width: 768,
//         height: 1024,
//         position: "centre",
//       },
//       {
//         name: "tablet",
//         width: 1024,
//         height: undefined,
//         position: "centre",
//       },
//     ],
//     mimeTypes: ["image/*"],
//   },
//   fields: [
//     {
//       name: "event",
//       type: "relationship",
//       relationTo: "events",
//       hasMany: true,
//     },
//     {
//       name: "blog",
//       type: "relationship",
//       relationTo: "blogs",
//       hasMany: true,
//     },
//   ],
// };
