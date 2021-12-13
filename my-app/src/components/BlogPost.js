import React from "react";

// Material imports
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function BlogPost({ postInfo }) {

    const { title, link } = postInfo;

  return (
    <div className="blog-post">
    <Card variant="outlined" sx={{ minWidth: 275, gap: 2, border: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography component="a" href={link} sx={{ mb: 1.5 }} color="text.secondary">
          Check out this Blog Post!
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default BlogPost;