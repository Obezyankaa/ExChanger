import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function CommentOne({ el }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Avatar src={`http://localhost:3001/images/${el?.User?.photo}`} />
          {el?.User?.f_name}
          {' '}
          {el?.User?.l_name}
        </Typography>
        <Typography variant="h5" component="div">
          {el?.text}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {el?.createdAt.slice(0, 10).replaceAll('-', ' ')
            .split('')}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
