"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: 'users',
    auth: true,
    access: {
        read: function () { return true; },
        create: function () { return true; },
    },
    admin: {
        hidden: function (_a) {
            var user = _a.user;
            return user.role !== 'admin';
        },
        defaultColumns: ['id'],
    },
    fields: [
        {
            name: 'role',
            defaultValue: 'admin',
            required: true,
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
            ],
        },
    ],
};
