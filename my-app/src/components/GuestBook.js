import React, { useEffect, useState } from "react";
import GuestEntry from "./GuestEntry"

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
        // setRendered(true);

        // Using this code for now to simulate loading time
        setTimeout(() => {
            setRendered(true);
        }, 1000);
    }

    useEffect(getEntries, [])

    const renderEntries = guestEntries.map((entry) => 
    <GuestEntry 
    guestInfo={entry}
    key={entry.id}
    />
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
                    return (<p> Loading... </p>);
                }
}

export default GuestBook;