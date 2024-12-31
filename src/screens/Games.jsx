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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Modal,
  Button,
  Box,
} from "@mui/material";

import Loader from "../components/Loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Games = () => {
  const [games, setGames] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [open, setOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState({});

  const handleOpen = (game) => {
    setSelectedGame(game);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    setLoading(true);
    let sortBy = "";
    if (event.target.value === "desc") {
      sortBy = "-title";
    } else {
      sortBy = "title";
    }
    axios
      .get(
        `https://softgenie.org/api/games?search=${searchText}&ordering=${sortBy}`
      )
      .then((response) => {
        if (response.data) {
          setLoading(false);
          setGames(response.data);
        }
      });
  };

  const handlePageChange = async (event, value) => {
    // call the api with offset 50 query params
    setLoading(true);
    setPage(value);
    await axios
      .get(`https://softgenie.org/api/games?&page=${value}`)
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
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Search games..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="sort-order-label">Sort Order</InputLabel>
            <Select
              labelId="sort-order-label"
              id="sort-order"
              value={sortOrder}
              label="Sort Order"
              onChange={handleSortChange}
            >
              <MenuItem value="desc">Descending</MenuItem>
              <MenuItem value="asc">Ascending</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {loading && <Loader />}
      <Grid container spacing={4} sx={{ mt: 2, mb: 2 }}>
        {games.results && games.results.length === 0 ? (
          <Typography variant="h6" component="div" sx={{ mt: 2, mb: 2 }} style={{ textAlign: "center" }}>
            No games available
          </Typography>
        ) : null}
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
                  <Button onClick={() => handleOpen(game)}>Full Image</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      {games && games.count ? (
        <Pagination
          count={Math.ceil(games.count / 50)}
          page={page}
          onChange={handlePageChange}
          sx={{ mt: 4 }}
        />
      ): null}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Image {selectedGame.title ? `of ${selectedGame.title}` : "Nothing"}
          </Typography>
          <CardMedia
            component="img"
            height="450"
            width="650"
            image={`https://www.vgchartz.com/${selectedGame.img}`}
            alt={selectedGame.title}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default Games;
