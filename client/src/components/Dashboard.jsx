import React, { useState, useEffect } from "react";
import Song from "./Song";

export default function Dashboard({ socket }) {
    const [played, setPlayed] = useState(true);
    const [messages, setMessages] = useState([]);
    console.log(messages)
    useEffect(() => {
        socket.on("receive-message", (message) => {
            setMessages((messages) => [...messages, message]);
            console.log(socket.id)
        });
    
        return () => {
            socket.off("message");
        };
    }, [socket]);

    return (
        <div className="pt-20 px-36 pb-14">
            <h1>Dashboard Page</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
            {/* <p className="text-4xl md:text-5xl font-bold text-blue-900 text-center">
                Requests
            </p>
            <Song title="Rush" artist="Arya Starr" album="19 & Dangerous" time="4:09" />
            <Song title="Rapstar" artist="Polo G" album="Hall of Fame" time="3:32" />
            <Song title="Moonlight Sonata" artist="Ludwig Van Beethoven" album="" time="7:49" />
            <p className="pt-20 text-3xl md:text-4xl font-bold text-blue-900 text-center">
                Recently Played
            </p>
            <Song title="Rush" artist="Arya Starr" album="19 & Dangerous" time="4:09" played={played} />
            <Song title="Rapstar" artist="Polo G" album="Hall of Fame" time="3:32" played={played} /> */}
        </div>
    )
}
