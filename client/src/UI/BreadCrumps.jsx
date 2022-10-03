import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

export default function BreadCrumps({ itemName, category }) {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      to="/"
      style={{ textDecoration: 'none', color: 'black' }}
    >
      Главная
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      style={{ textDecoration: 'none', color: 'black' }}
      to="/material-ui/getting-started/installation/" // линка на категорию
    >
      {category}
    </Link>,
    <Typography key="3" color="text.primary">
      {itemName}
    </Typography>,
  ];
  return (
    <Stack spacing={1}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
