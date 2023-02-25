import React, { useState, useEffect } from "react";
import { Alert } from "@mui/material";

export default function Countdown( {onCountdownEnd} ) {
  const [timeRemaining, setTimeRemaining] = useState(5 * 60); // 5 minutes in seconds
    console.log(typeof(onCountdownEnd))
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // When time runs out, do something (e.g. show a message)
    if (timeRemaining === 0) {
      onCountdownEnd()
    }
  }, [timeRemaining]);

  return (
    <Alert severity="warning" sx={{ mb: 2 }}>
      <strong>Already Requested</strong> - You have to wait for {`${Math.floor(timeRemaining / 60)} minutes and ${timeRemaining % 60} seconds`} until you can request again
    </Alert>
  );
}