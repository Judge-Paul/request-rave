import React from "react";
import Dashboard from "../components/Dashboard";

export default function DashboardPage({ socket }) {
    return (
        <Dashboard socket={socket} />
    )
}