import React from "react";
import { Link } from "react-router-dom"

export default function NavBar() {
return (
    <div className="flex items-center justify-between px-4 md:px-20 lg:px-32 py-3 bg-blue-900">
        <Link to="/">
            <h2 className="logo">
                <span className="text-white text-2xl font-sans font-bold">REQUEST</span>
                <span className="text-blue-400 text-2xl font-sans font-bold">RAVE</span>
            </h2>
        </Link>
    </div>
);
}