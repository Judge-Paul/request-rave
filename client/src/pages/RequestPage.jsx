import React from "react";
import Request from "../components/Request";

export default function RequestPage({ socket, accessToken }) {
  return (
    <div className="min-h-screen">
      <Request socket={socket} accessToken={accessToken} />
    </div>
  )
}