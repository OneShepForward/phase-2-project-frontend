import React, { useEffect, useState } from "react";
import GuestEntry from "./GuestEntry"
import loadingAnimation from "../image/output-onlinegiftools.gif"
import '../App.css';

// Materials imports 
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import { Container } from "@mui/material";

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
            setFormData({
                name: "",
                message: "",
            })
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
        <Container>
        {renderEntries}
        </Container>
        <div className="add-entry">
            <form onSubmit={handleSubmit} className="form">
                <h2>Sign the Guest Book!</h2>
                <TextField 
                    id="new-entry-message" 
                    label="Message" 
                    variant="outlined" 
                    onChange={handleFormUpdate}
                    value={formData.message}
                    sx={{backgroundColor: "#ffffff"}}
                /> {" "}
                <TextField 
                    id="new-entry-name" 
                    label="Name" 
                    variant="filled" 
                    onChange={handleFormUpdate}
                    value={formData.name}
                    sx={{backgroundColor: "#ffffff"}}
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
                <br/>
                <br/>
            </form>
        </div>
    </div>
  );
    } else {
        return (<img src={loadingAnimation} alt="Compass loading animation" width="150" />);
    }
}

export default GuestBook;