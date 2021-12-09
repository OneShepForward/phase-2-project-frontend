import React from "react";

function GuestEntry(guestInfo) {

    const { name, message } = guestInfo

    return (
    <div className="guest-entry">
        <p> Test test test </p>
        <p>{message}</p>
        <br/>
        <p>-{name}</p>
    </div>
  );
}

export default GuestEntry;