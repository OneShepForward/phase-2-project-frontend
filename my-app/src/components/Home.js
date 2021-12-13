import React from "react";
import Pic from "../image/ProfilePicture.png"

function Home() {

    const [isVisible, setVisible] = React.useState(false);

    React.useEffect(() => {        
        setVisible(true)
          }, [])

    return (
    <div className="home">
        <h1>hello, world</h1>
        <h2>I'm Nick Shephard and I'm working with React</h2><br/>
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <img src={Pic} alt="Nick's Pic" width="50%" />
        </div>


    </div>
  );
}

export default Home;