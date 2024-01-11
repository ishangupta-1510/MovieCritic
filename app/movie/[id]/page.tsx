import React from "react";
import HF from "@/app/_components/HF";
import Header from "@/app/_components/Header";

const Page = ({ params }: { params: { id: string } }) => {
  const comments = [
    {
      key: "1",
      message: "Best Moive",
      rating: "9/10",
      Author: "User",
    },
    {
      key: "2",
      message: "Best Moive",
      rating: "9/10",
      Author: "User",
    },
    {
      key: "3",
      message: "Best Moive",
      rating: "9/10",
      Author: "User",
    },
  ];
  return (
    <>
      <HF>
        <div className="p-10">
          <div className="flex justify-between">
            <h1 className="text-3xl">Movie Name</h1>
            <h1 className="text-3xl text-purple-500">Rating</h1>
          </div>
          <div className="grid gap-10 mt-10">
            {comments.map((comment) => (
              <div className="border p-6 pl-10 pr-10 grid gap-4">
                <div className="flex justify-between">
                  <p className="text-xl">{comment.message}</p>
                  <p className="text-xl text-purple-500">{comment.rating}</p>
                </div>
                <p className="italic">By: {comment.Author}</p>
              </div>
            ))}
          </div>
        </div>
      </HF>
    </>
  );
};

export default Page;
