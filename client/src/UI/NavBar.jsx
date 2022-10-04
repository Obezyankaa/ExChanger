import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAsync } from '../redux/actions/userAction';

export default function Navbar({
  setLogActive, setRegActive, setAddProdActive, setNight, night,
}) {
  const user = useSelector((state) => state.user);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="static" color="">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CachedOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#17494D' }} />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography
                style={{ textDecoration: 'none', color: '#17494D' }}
                variant="h6"
                noWrap
                component="a"
                link="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: '',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#17494D',
                  textDecoration: 'none',
                }}
              >
                ExChanger.
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem>
                  <Typography textAlign="center">Main</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            {!user.id ? (
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  sx={{ my: 2, color: '#17494D', display: 'block' }}
                  onClick={() => setRegActive(true)}
                  s
                >
                  Регистрация
                </Button>
                <Button
                  sx={{ my: 2, color: '#17494D', display: 'block' }}
                  onClick={() => setLogActive(true)}
                >
                  Авторизация
                </Button>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  sx={{ my: 2, color: '#17494D', display: 'block' }}
                  onClick={() => setAddProdActive(true)}
                >
                  Добавить объявление
                </Button>
              </Box>
            ) }
            {night === true ? (
              <Button
                sx={{ my: 2, color: '#17494D', display: 'block' }}
                onClick={() => setNight(false)}
                s
              >
                Night Mode
              </Button>
            ) : (
              <Button
                sx={{ my: 2, color: '#17494D', display: 'block' }}
                onClick={() => setNight(true)}
                s
              >
                Day Mode
              </Button>
            )}
            {user.id ? (
              <>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={`http://localhost:3001/images/${user.photo}`} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Link to="/profile" style={{ textDecoration: 'none', color: '#17494D' }}>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Личный кабинет</Typography>
                      </MenuItem>
                    </Link>
                    <Link to="/settings" style={{ textDecoration: 'none', color: '#17494D' }}>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" value="1">Настройки профиля</Typography>
                      </MenuItem>
                    </Link>
                    <Link to="/" onClick={() => dispatch(logoutUserAsync())} style={{ textDecoration: 'none', color: '#17494D' }}>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Выйти</Typography>
                      </MenuItem>
                    </Link>
                  </Menu>
                </Box>
              </>
            ) : (
              <Box sx={{ flexGrow: 0 }} />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
