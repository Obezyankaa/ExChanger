import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function OrderItem({ order }) {
  console.log('--------->', order);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Номер заказа:
          {' '}
          {order.id}
        </Typography>
        <Typography variant="h5" component="div">
          {/* <Link to={`/item/${order.RentProducts[0].id}`}> */}
          Объявление:
          {' '}
          {order.name}
          {/* </Link> */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Сообщение от пользователя
          {' '}
          <Link to={`/user/${order?.RentProducts[0]?.user_renter?.id}`}>
            {order.RentProducts[0].f_name}
            {' '}
            {order.RentProducts[0].l_name}
          </Link>
          :
          {' '}
        </Typography>
        <Typography variant="body2">
          {order.RentProducts[0].message}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${order.id}`}><Button size="small">Посмотреть карточку товара</Button></Link>
      </CardActions>
    </Card>
  );
}
