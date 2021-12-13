import React, {useState, useEffect} from "react";
import BlogPost from "./BlogPost"

import loadingAnimation from "../image/output-onlinegiftools.gif"

   
function Links() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isRendered, setRendered] = useState(false);
    
    const JSON_URL = "http://localhost:3000/blog-posts"

    const getEntries = () => {
        fetch(JSON_URL)
        .then(r => r.json())
        .then(setBlogPosts)
        .catch(error => console.warn("Issue with fetch occurred: ", error));
        // setRendered(true);

        // Using this code for now to simulate loading time
        const timer = setTimeout(() => {
            setRendered(true);
        }, 3000);

        //cleanup function 
        return function cleanup() {
            console.log("Running cleanup");
            // ✅ clear the interval so state is no longer updated
            clearInterval(timer);
            };
    }

    useEffect(getEntries, [])

    const renderBlogPosts = blogPosts.map((post) => {
        return (
    <>
    <BlogPost 
    postInfo={post}
    key={post.id}
    />
    <br/>
    </>
    )}
    )



    if (isRendered) {
        return (
        <div className="links">

                <h1>Blog Posts</h1>
                {renderBlogPosts}
    
        </div>
        );
    } else {
        return (<img src={loadingAnimation} width="100" />);
    }
}

export default Links;