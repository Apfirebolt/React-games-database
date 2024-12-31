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
  TextField,
} from "@mui/material";
import Loader from "../components/Loader";

const Games = () => {
  const [games, setGames] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setLoading(true);
    axios.get(`https://softgenie.org/api/games`).then((response) => {
      if (response.data) {
        setLoading(false);
        setGames(response.data);
      }
    });
  }, []);

  const handlePageChange = async (event, value) => {
    // call the api with offset 50 query params
    console.log("Value is ", value);
    setLoading(true);
    setPage(value);
    if (value === 1) {
      setPageSize(0);
    } else {
      setPageSize((value - 1) * 50);
    }
    await axios
      .get(`https://softgenie.org/api/games?&offset=${pageSize}`)
      .then((response) => {
        if (response.data) {
          setLoading(false);
          setGames(response.data);
        }
      });
  };

  // debounce search here
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setLoading(true);
      axios
        .get(`https://softgenie.org/api/games?search=${searchText}`)
        .then((response) => {
          if (response.data) {
            setLoading(false);
            setGames(response.data);
          }
        });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  return (
    <Container color="primary" maxWidth="lg" sx={{ mb: 5 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ mt: 2, mb: 2 }}
      >
        Games Database
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search games..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{ mb: 2 }}
      />
      {loading && <Loader />}
      <Grid container spacing={4} sx={{ mt: 2, mb: 2 }}>
        {games &&
          games.results &&
          games.results.map((game) => (
            <Grid item xs={12} sm={6} md={4} key={game.id}>
              <Card sx={{ mb: 3 }} background="secondary">
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
