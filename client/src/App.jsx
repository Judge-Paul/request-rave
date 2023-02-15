import React from "react";
import DjIcon from "./assets/DjIcon";
import { FaUserAlt } from "react-icons/fa";

export default function App() {
  return  (
    <div className="md:flex md:items-center justify-center h-screen">
      <div className="w-full md:w-[700px] text-center">
        <p className="text-5xl font-bold">
          Which are you?
        </p>
        <div className="mt-24 md:flex">
          <button
            className="p-0 md:mr-10 rounded-xl bg-black hover:bg-white hover:border hover:border-black"
          >
            <FaUserAlt className="text-[270px] fill-current text-white hover:text-black mx-4 px-7" />
          </button>
          <button
            className="p-0 md:ml-10 rounded-xl bg-black hover:bg-white hover:border hover:border-black"
          >
            <DjIcon className="fill-current text-white hover:text-black p-5" />
          </button>
        </div>
      </div>
    </div>
  )
}