import React, { useEffect, useState } from "react";
import GuestEntry from "./GuestEntry"
import loadingAnimation from "../image/output-onlinegiftools.gif"

// Materials imports 
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';




function GuestBook() {

    const [guestEntries, setEntries] = useState([]);
    const [isRendered, setRendered] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        message: "",
    })
    
    const JSON_URL = "http://localhost:3000/logs"

    const getEntries = () => {
        fetch(JSON_URL)
        .then(r => r.json())
        .then(setEntries)
        .catch(error => console.warn("Issue with fetch occurred: ", error));
        // Use next line to just check for actual load
        // setRendered(true);

        // Use this code to simulate loading time
        const timer = setTimeout(() => {
            setRendered(true);
        }, 3000);

        // cleanup
        return function cleanup() {
            console.log("Running cleanup");
            // ✅ clear the interval so state is no longer updated
            clearInterval(timer);
          };
    }

    useEffect(getEntries, [])

    const renderEntries = guestEntries.map((entry) => {
    return (<>
    <GuestEntry 
    guestInfo={entry}
    key={entry.id}
    />
    <br/>
    </>)
    }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        fetch(JSON_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(resp => resp.json())
        .then((newEntry) => {
            handleAddEntry(newEntry)
            console.log("Submitting: ", newEntry)
        })
        .catch(error => console.log("Error submit new project: ", error))
    }

    const handleAddEntry = (newEntry) => {
        const newEntryArray = [newEntry, ...guestEntries];
        setEntries(newEntryArray);
    }

    const handleFormUpdate = (e) => {
        if (e.target.id === "new-entry-name") {
            setFormData({
                ...formData,
                name: e.target.value
            });
            console.log(formData)
        } else {
            setFormData({
                ...formData,
                message: e.target.value
            });
            console.log(formData)            
        }
    }

    if (isRendered) {
    return (
    <div className="guest-book">
            <h1>Guest Book</h1>
        {renderEntries}
        <div className="add-entry">
            <form onSubmit={handleSubmit} className="form">
                <h2>Sign the Guest Book!</h2>
                <TextField 
                    id="new-entry-message" 
                    label="Message" 
                    variant="outlined" 
                    onChange={handleFormUpdate}
                    value={formData.message}
                />
                <TextField 
                    id="new-entry-name" 
                    label="Name" 
                    variant="outlined" 
                    onChange={handleFormUpdate}
                    value={formData.name}
                /> 
                <br/>
                <br/>
                <Button 
                    startIcon={<AddIcon />}
                    variant="contained" 
                    style={{
                        fontSize: "24"
                    }}
                    color="primary" 
                    size="large" 
                    type="submit"
                >
                    Add
                </Button>
            </form>
        </div>
    </div>
  );
                } else {
                    return (<img src={loadingAnimation} width="100" />);
                }
}

export default GuestBook;