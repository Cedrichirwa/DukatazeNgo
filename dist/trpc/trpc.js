"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure = exports.router = void 0;
// import { User } from '@/payload-types'
// import { ExpressContext } from '@/server'
var server_1 = require("@trpc/server");
// import { PayloadRequest } from 'payload/types'
var t = server_1.initTRPC.context().create();
// const middleware = t.middleware
// const isAuth = middleware(async ({ ctx, next }) => {
//   const req = ctx.req as PayloadRequest
//   // const { user } = req as { user: User | null }
//   // if (!user || !user.id) {
//   //   throw new TRPCError({ code: 'UNAUTHORIZED' })
//   // }
//   // return next({
//   //   ctx: {
//   //     user,
//   //   },
//   // })
// })
exports.router = t.router;
exports.publicProcedure = t.procedure;
// export const privateProcedure = t.procedure.use(isAuth)
