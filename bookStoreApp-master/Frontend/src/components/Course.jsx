import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import list from "../../public/list.json"

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-16 pt-16 items-center justify-center text-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-[#A0522D]"> Here! :)</span>
          </h1>
          <p className="mt-8">
            Hey there, bookworm! 🐛
            Looking for your next adventure, drama, or fantasy?We’ve got a library full of treasures waiting just for you.
            <br/>
            So, grab a book, open your mind, and let the magic begin! 🎩📖
          </p>
          <Link to="/">
            <button className="mt-10 bg-[#A0522D] text-white px-4 py-2 rounded-md hover:bg-gray-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
