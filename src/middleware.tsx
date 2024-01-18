import { NextFetchEvent, NextRequest, NextResponse, userAgent } from "next/server";

export default function Middleware(request: NextRequest, event: NextFetchEvent) {
    // 1.条件语句
    // if (request.nextUrl.pathname.startsWith("/routeT/settings")) {
    //     return NextResponse.redirect(new URL("/dashboard", request.url));
    // }
    // 2.cookies
    // // request.cookies
    // let cookie = request.cookies.get("nextjs");
    // console.log(cookie);
    // const allCookies = request.cookies.getAll();
    // console.log(allCookies);
    // request.cookies.has("nextjs");
    // request.cookies.delete("nextjs");
    // request.cookies.has("nextjs");
    // // response.cookies
    // const response = NextResponse.next();
    // response.cookies.set("vercel", "fast");
    // return response;
    // 3.头
    // const requestHeaders = new Headers(request.headers);
    // requestHeaders.set("x-next-middleware", "hello");
    // const response = NextResponse.next({
    //     request: {
    //         headers: requestHeaders,
    //     },
    // });
    // response.headers.set("x-next-middleware2", "hello");
    // return response;
    // 4.NextFetchEvent;
    // waitUntil 异步执行传入的 Promise
    // event.waitUntil(
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             // resolve("foo");
    //             console.log("foo");
    //         }, 1000);
    //     })
    // );
    // return Response.json({
    //     name: "niuboyi",
    // });
    const userAgentInfo = userAgent(request);
    console.log(userAgentInfo);
}
