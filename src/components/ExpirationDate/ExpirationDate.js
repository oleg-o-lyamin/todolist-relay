import React, { useState, useEffect } from "react";
import moment from "moment";
import "./ExpirationDate.css";

function ExpirationDate(props) {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (Date.now() >= props.date) setIsExpired(() => true);
    else {
      const interval = setInterval(() => {
        if (Date.now() >= props.date) setIsExpired(() => true);
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [props.date]);

  return (
    <div className={isExpired ? "expiration red" : "expiration"}>
      {isExpired ? "Overdue since " : "Due on "}
      {moment(props.date).format("dddd, MMMM Do YYYY, h:mm a")}
    </div>
  );
}

export default ExpirationDate;
