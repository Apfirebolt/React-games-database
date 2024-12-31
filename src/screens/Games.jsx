import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Pagination,
} from "@mui/material";
import Loader from "../components/Loader";

const Games = () => {
  const [games, setGames] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://softgenie.org/api/games`)
      .then((response) => {
        if (response.data) {
          setLoading(false);
          setGames(response.data);
        }
      });
  }, []);

  const handlePageChange = (event, value) => {
    // call the api with offset 50 query params
    setLoading(true);
    setPage(value);
    setPageSize((value - 1) * 50);
    axios.get(`https://softgenie.org/api/games?&offset=${pageSize}`).then((response) => {
      if (response.data) {
        setLoading(false);
        setGames(response.data);
      }
    })
  };

  return (
    <Container color="primary" maxWidth="lg" sx={{ mt: 10, mb: 5 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ mt: 2, mb: 2 }}
      >
        Games Database
      </Typography>
      {loading && <Loader />}
      <Grid container spacing={4} sx={{ mt: 2, mb: 2 }}>
        {games &&
          games.results &&
          games.results.map((game) => (
            <Grid item xs={12} sm={6} md={4} key={game.id}>
              <Card sx={{ backgroundColor: "#f5f5f5", mb: 3 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://www.vgchartz.com/${game.img}`}
                  alt={game.title}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: "#3f51b5", mt: 2, mb: 2 }}
                  >
                    {game.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    {game.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    Genre: {game.genre}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    Console: {game.console}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    Publisher: {game.publisher}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    Developer: {game.developer}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    Critic Score: {game.critic_score}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    Total Sales: {game.total_sales} million
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    Release Date: {game.release_date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      {games && games.count && (
        <Pagination
          count={Math.ceil(games.count / 50)}
          page={page}
          onChange={handlePageChange}
          sx={{ mt: 4 }}
        />
      )}
    </Container>
  );
};

export default Games;
