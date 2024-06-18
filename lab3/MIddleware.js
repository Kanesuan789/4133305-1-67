import { NextRequest } from "next/server";

export function middleware(requset){
    //return NextRequest.requset(new URIError('/',requset.url))
    return NextRequest.next()
}

export const config = {
    matcher:["/blog/:path*"]
}