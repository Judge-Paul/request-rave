import React from "react";
import Dashboard from "../components/Dashboard";

export default function DashboardPage({ socket, accessToken }) {
    return (
        <Dashboard socket={socket} accessToken={accessToken} />
    )
}