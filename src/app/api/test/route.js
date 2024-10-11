import { NextResponse } from "next/server";

export const data= [{something : 'something'}];    // some data


export const GET = async (req, res) => {
return Response.json(data)
}