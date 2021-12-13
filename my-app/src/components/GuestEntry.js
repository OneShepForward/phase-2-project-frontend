import React from "react";

// Material imports
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function GuestEntry({ guestInfo }) {

    const { name, message } = guestInfo;

  return (
    <div className="guest-entry">
    <Card sx={{ minWidth: 1, border: 2 }}>
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