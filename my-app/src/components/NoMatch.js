import React from "react";
import nomatch from "../image/nomatch.jpg";

function NoMatch() {

    return (
    <div className="no-match">
        <br/>
        <img 
        src={nomatch} 
        width="75%" 
        alt="Error 404 Doge" 
        />
    </div>
  );

}

export default NoMatch;

