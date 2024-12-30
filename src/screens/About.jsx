import { Container, Typography, Box, Paper } from '@mui/material';

const About = () => {
    return (
        <Container color="primary" maxWidth="lg" sx={{ mt: 10 }}>
            <Box my={4}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body1">
                        Welcome to our games database! We are dedicated to providing you with the most comprehensive and up-to-date information on all your favorite games.
                    </Typography>
                    <Typography variant="body1">
                        Our team of passionate gamers and developers work tirelessly to ensure that our database is accurate and informative. Whether you're looking for the latest releases, classic titles, or hidden gems, we've got you covered.
                    </Typography>
                    <Typography variant="body1">
                        Thank you for visiting our site. We hope you find it useful and enjoyable. If you have any questions or feedback, please don't hesitate to contact us.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default About;