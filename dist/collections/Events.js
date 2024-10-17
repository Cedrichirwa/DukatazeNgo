"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
exports.Events = {
    slug: "events",
    admin: {
        useAsTitle: "name",
    },
    access: {},
    fields: [
        {
            name: "name",
            label: "Name",
            type: 'text',
            required: true
        },
        {
            name: "Description",
            label: "Decription",
            type: 'text',
            required: true
        },
        {
            name: 'images',
            type: 'array',
            label: "Event Image",
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