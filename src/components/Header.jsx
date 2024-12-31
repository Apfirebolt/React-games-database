import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <AppBar backgroundColor="dark" position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
                    React Games Database
                </Typography>
                <Button sx={{ color: 'white' }} component={Link} to="/">Home</Button>
                <Button sx={{ color: 'white' }} component={Link} to="/games">Games</Button>
                <Button sx={{ color: 'white' }} component={Link} to="/about">About</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;