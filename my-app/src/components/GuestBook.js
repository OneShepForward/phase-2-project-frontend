import React, { useEffect, useState } from "react";
import GuestEntry from "./GuestEntry"

function GuestBook() {

    const [guestEntries, setEntries] = useState([]);
    const [isRendered, setRendered] = useState(false);
    
    const JSON_URL = "http://localhost:3000/logs"

    const getEntries = () => {
        fetch(JSON_URL)
        .then(r => r.json())
        .then(setEntries)
        .catch(error => console.warn("Issue with fetch occurred: ", error));
        // console.log(guestEntries)
    }

    useEffect(getEntries, [])

    const renderEntries = () => {
        return guestEntries.map((entry) => <GuestEntry guestinfo={entry}/>)
    }

    const testEntry = {
        "id": 2,
        "name": "New York Times Person",
        "message": "Great crossword! We totally want to publish it!"
    }

    return (
    <div className="guest-book">
            <h1>Guest Book</h1>
            <GuestEntry guestinfo={testEntry} />      
        {renderEntries}
    </div>
  );
}

export default GuestBook;