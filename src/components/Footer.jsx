import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="relative" color="primary">
            <Container maxWidth="md">
                <Toolbar>
                    <Typography variant="body1" color="inherit">
                        © 2025 React Games Database. All rights reserved.
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Footer;