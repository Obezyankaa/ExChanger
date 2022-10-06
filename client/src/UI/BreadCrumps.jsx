import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

export default function BreadCrumps({ night, itemName, category }) {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      to="/"
      style={night === true ? ({ color: 'black' }) : ({ color: 'white' })}
    >
      Главная
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      style={night === true ? ({ color: 'black' }) : ({ color: 'white' })}
      to="/material-ui/getting-started/installation/" // линка на категорию
    >
      {category}
    </Link>,
    <Typography key="3" color="text.primary">
      {itemName}
    </Typography>,
  ];
  return (
    <Stack style={night === true ? ({ color: 'black' }) : ({ color: 'white' })} spacing={1}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
