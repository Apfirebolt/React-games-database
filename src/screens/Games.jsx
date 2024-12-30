import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Stack,
} from "@mui/material";

const games = [
  {
    id: 1,
    title: "Game 1",
    description: "Description for game 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Game 2",
    description: "Description for game 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Game 3",
    description: "Description for game 3",
    image: "https://via.placeholder.com/150",
  },
];

const Games = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Games Database
      </Typography>
      <Stack spacing={4}>
        {games.map((game) => (
          <Box key={game.id} sx={{ width: "100%", maxWidth: 345 }}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={game.image}
                alt={game.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {game.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {game.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Games;
