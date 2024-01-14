import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // detsrtucture todoTitle from the incoming request
    const { movie, releasedate } = await req.json();

    if (!movie) {
      return new NextResponse("Title required", { status: 400 });
    }

    // Create and save todo on the database
    const movies = await db.movie.create({
      data: {
        title: movie,
        releaseDate: releasedate,
      },
    });

    return NextResponse.json(movies, { status: 200 }); // Respond with the created todo
  } catch (error) {
    console.log("movies", error);
    return new NextResponse("Internal Server Error", { status: 500 }); // Handle errors
  }
}
