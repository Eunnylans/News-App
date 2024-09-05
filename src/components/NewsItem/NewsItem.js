// components/NewsItem.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const NewsItem = ({ article }) => {
  return (
    <Card>
    <CardMedia
      component="img"
      height="280"
      image={article.urlToImage}
      alt={article.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {article.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {article.description}
      </Typography>
    </CardContent>
    <Button size="small" href={article.url} target="_blank">
      Read More
    </Button>
  </Card>
);

};

export default NewsItem;



  