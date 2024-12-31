import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="static" style={{ width: '100%', marginTop: '20px' }} backgroundColor="secondary">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © 2025 React Games Database. All rights reserved.
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;