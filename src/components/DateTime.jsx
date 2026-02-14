import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const options = {
        weekday: "short",   
        month: "short",     
        day: "numeric",     
        hour: "numeric",    
        minute: "2-digit",  
        hour12: true
      };

      const formatted = now.toLocaleString("en-US", options);
      setDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {dateTime.replace(/,/g, "")}
    </div>
  );
};

export default DateTime;
