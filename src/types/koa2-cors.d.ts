import * as koa from 'koa'

declare function crossOrigin (opts?: any): koa.Middleware

declare namespace crossOrigin { }
export = crossOrigin;