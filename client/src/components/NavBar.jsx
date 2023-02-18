import React from "react";

export default function NavBar() {
return (
    <div className="flex items-center justify-between px-32 py-3 bg-blue-900">
        <h2 className="logo">
            <span className="text-white text-2xl font-sans font-bold">REQUEST</span>
            <span className="text-blue-400 text-2xl font-sans font-bold">RAVE</span>
        </h2>
        <button className="bg-white text-blue-900 border border-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-blue-400 hover:text-white">
            LOGIN
        </button>
    </div>
);
}