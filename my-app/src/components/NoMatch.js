import React from "react";
import nomatch from "../image/nomatch.jpg"

function NoMatch() {

    return (
    <div className="no-match">
        <img 
        src={nomatch} 
        width="100%" 
        alt="Error 404 Doge" 
        />
    </div>
  );

}

export default NoMatch;

