import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import './index.css';

export default function CommentOne({ el }) {
  return (
    <Card className="comments__cart">
      <CardContent>
        <Typography className="comments__cart__text" color="text.secondary" gutterBottom>
          <Avatar className="comments__cart__avatar" src={`http://localhost:3001/images/${el?.User?.photo}`} />
          <Typography>
            {el?.User?.f_name}
            {' '}
            {el?.User?.l_name}
            {' '}
            <Typography style={{ color: '#9e9e9e', fontSize: '11px' }}>
              {el?.createdAt.slice(0, 10).replaceAll('-', ' ')
                .split('')}
            </Typography>
          </Typography>
        </Typography>
        <Typography variant="h6" component="div">
          {el?.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
