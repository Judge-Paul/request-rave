import React from "react";
import DjIcon from "../assets/DjIcon";
import UserIcon from "../assets/UserIcon";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full px-8 md:px-24 lg:px-48 xl:px-80 pt-24 mx-auto pb-14">
            <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-900">
                Which are you?
            </p>
            <div className="mt-10 px-5 grid md:grid-cols-2 gap-16 place-items-center">
                <Link to="/request">
                    <button
                    href="/request"
                    className="p-0 rounded-xl bg-white hover:bg-blue-900 border border-blue-900 w-full"
                    >
                        <UserIcon className="fill-current text-blue-900 hover:text-white p-5" />
                    </button>
                </Link>
                <Link to="/dashboard">
                    <button
                    href="/dashboard"
                    className="p-0 rounded-xl bg-white hover:bg-blue-900 border border-blue-900 w-full"
                    >
                        <DjIcon className="fill-current text-blue-900 hover:text-white p-5" />
                    </button>
                </Link>
            </div>
            </div>
        </div>
    )
}