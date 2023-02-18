import React from "react";

export default function NavBar() {
return (
    <nav className="flex items-center justify-between px-32 pt-5">
        <h2 className="logo">
            <span className="text-black text-2xl font-sans font-bold">REQUEST</span>
            <span className="text-blue-900 text-2xl font-sans font-bold">RAVE</span>
        </h2>
        <button className="btn1 bg-blue-900 text-white font-bold py-3 px-6 rounded-lg">
            LOGIN
        </button>
    </nav>
);
}