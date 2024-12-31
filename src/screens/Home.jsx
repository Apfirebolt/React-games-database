import { Container, Typography, Box, Paper } from '@mui/material';

const Home = () => {
    return (
        <Container color="primary" maxWidth="lg" sx={{ mt: 2 }} background="secondary">
            <Box my={4} background="secondary">
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Home
                    </Typography>
                    <Typography variant="body1">
                        Welcome to our games database! We are dedicated to providing you with the most comprehensive and up-to-date information on all your favorite games.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default Home;