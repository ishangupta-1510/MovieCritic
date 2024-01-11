"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddMovie = () => {
  interface Data {
    movie: string;
    name: string;
    rating: string;
    comments: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  const movies = ["a", "b", "c", "d", "e", "f"];
  const onSubmit = (data: Data) => {
    console.log(data);
  };
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="bg-white w-96 p-10 flex flex-col gap-5">
        <h1 className="text-2xl flex-2">Add new movie</h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="border rounded-md">
                <div className="p-3">
                  <select
                    className="w-full outline-none"
                    {...register("movie")}
                  >
                    {movies.map((movie) => (
                      <option value={movie}>{movie}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="border rounded-md">
                <input
                  placeholder="Your Name"
                  type="text"
                  {...register("name")}
                  name="name"
                  className="p-3 outline-none w-full"
                />
              </div>
              <div className="border rounded-md">
                <input
                  placeholder="Rating"
                  type="string"
                  {...register("rating")}
                  name="releasedate"
                  className="p-3 outline-none w-full"
                />
              </div>
              <div className="border h-40 rounded-md">
                <input
                  placeholder="Review Comments"
                  type="string"
                  {...register("rating")}
                  name="releasedate"
                  className="p-3 outline-none w-full"
                />
              </div>
              <div className="w-full mt-6 flex justify-end">
                <button
                  className=" ml-0 bg-purple-600 text-white py-2 px-4 rounded-md"
                  type="submit"
                >
                  Create Movie
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
