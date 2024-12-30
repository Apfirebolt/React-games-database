import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="static" color="primary" style={{ width: '100%' }}>
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © 2025 React Games Database. All rights reserved.
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;