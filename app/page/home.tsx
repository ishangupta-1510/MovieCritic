import Search from "../_components/Search";
import HF from "../_components/HF";
import Link from "next/link";

export default function Home() {
  const About = [
    {
      MovieName: "Star Wars",
      Released: "1st August, 2022",
      Rating: "9/10",
    },
    {
      MovieName: "Star Wars",
      Released: "1st August, 2022",
      Rating: "9/10",
    },
    {
      MovieName: "Star Wars",
      Released: "1st August, 2022",
      Rating: "9/10",
    },
    {
      MovieName: "Star Wars",
      Released: "1st August, 2022",
      Rating: "9/10",
    },
    {
      MovieName: "Star Wars",
      Released: "1st August, 2022",
      Rating: "9/10",
    },
    {
      MovieName: "Star Wars",
      Released: "1st August, 2022",
      Rating: "9/10",
    },
  ];
  return (
    <main>
      <HF>
        <div className="p-5">
          <h1 className="mt-10 text-3xl">The best movie reviews site!</h1>
          <div className="mt-8">
            <Search />
          </div>
          <div>
            <Link
              href="/movie/1"
              className="grid mt-20 grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {About.map((movie, index) => (
                <div key={index} className="bg-purple-200">
                  <div className="p-10 flex flex-col gap-4">
                    <h1>{movie.MovieName}</h1>
                    <h2>Released: {movie.Released}</h2>
                    <h2>Rating: {movie.Rating}</h2>
                  </div>
                </div>
              ))}
            </Link>
          </div>
        </div>
      </HF>
    </main>
  );
}
