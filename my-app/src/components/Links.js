import React, {useState, useEffect} from "react";
import BlogPost from "./BlogPost"

   
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
        setTimeout(() => {
            setRendered(true);
        }, 1000);
    }

    useEffect(getEntries, [])

    const renderBlogPosts = blogPosts.map((post) => 
    <BlogPost 
    postInfo={post}
    key={post.id}
    />
    )



    if (isRendered) {
        return (
        <div className="links">

                <h1>Blog Posts</h1>
                {renderBlogPosts}
    
        </div>
        );
    } else {
        return (<p> Loading... </p>);
    }
}

export default Links;