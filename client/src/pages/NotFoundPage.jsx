import React from "react";

export default function NotFoundPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div>
                <p className="text-4xl md:text-5xl font-bold text-blue-900 text-center">
                    Page Not Found
                </p>
                <p className="pt-4">
                    The URL entered is either incorrect or you don't have permission to access it Please check the URL and ensure you are authorized to access it
                </p>
                <p className="text-center">You can return back to the home page 
                    <a className="text-blue-400 hover:text-blue-900" href="/"> here</a>
                </p>
            </div>
        </div>
    )
}