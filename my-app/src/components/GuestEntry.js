import React from "react";

// Material imports
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


function GuestEntry({ guestInfo }) {

    // console.log(guestInfo, "Guest info")

    const { name, message } = guestInfo

  return (
    <div className="guest-entry">
    <Card sx={{ minWidth: 50, border: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {message}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default GuestEntry;