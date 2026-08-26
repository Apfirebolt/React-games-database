import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import axios from "axios";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Pagination,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button,
  Box,
  Chip,
  Stack,
  InputAdornment,
} from "@mui/material";

// Components
import Loader from "../components/Loader";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Games = () => {
  const [games, setGames] = useState({ results: [], count: 0 });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [openModal, setOpenModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const headerRef = useRef(null);
  const controlsRef = useRef(null);

  // Consolidated Fetch Function
  const fetchGames = useCallback(async (currentPage, search, sort) => {
    setLoading(true);
    const sortBy = sort === "desc" ? "-title" : "title";
    try {
      const response = await axios.get("https://softgenie.org/api/games", {
        params: {
          page: currentPage,
          search: search || undefined,
          ordering: sortBy,
        },
      });
      if (response.data) {
        setGames(response.data);
      }
    } catch (err) {
      console.error("Failed to load games:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Intro GSAP Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
      gsap.fromTo(
        controlsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  // Unified Debounced Fetch Effect
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchGames(page, searchText, sortOrder);
    }, 350);

    return () => clearTimeout(delayDebounce);
  }, [page, searchText, sortOrder, fetchGames]);

  const handleOpen = (game) => {
    setSelectedGame(game);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedGame(null);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setPage(1);
  };

  const handlePageChange = (_, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      {/* Page Header */}
      <Box ref={headerRef} sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#1977d4",
            mb: 1,
          }}
        >
          Explore Games
        </Typography>
        <Typography variant="body1" sx={{ color: "#94a3b8" }}>
          Browse ratings, sales figures, and release information across platforms.
        </Typography>
      </Box>

      {/* Control Bar (Search + Sort) */}
      <Box
        ref={controlsRef}
        sx={{
          p: 2,
          mb: 4,
          borderRadius: 3,
          bgcolor: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8} md={9}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search by title, publisher, or genre..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setPage(1);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#64748b" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#0b0f19",
                  color: "#f8fafc",
                  borderRadius: 2,
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                  "&:hover fieldset": { borderColor: "#38bdf8" },
                  "&.Mui-focused fieldset": { borderColor: "#38bdf8" },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="sort-select-label" sx={{ color: "#94a3b8" }}>
                Sort By Title
              </InputLabel>
              <Select
                labelId="sort-select-label"
                value={sortOrder}
                label="Sort By Title"
                onChange={handleSortChange}
                sx={{
                  bgcolor: "#0b0f19",
                  color: "#f8fafc",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#38bdf8",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#38bdf8",
                  },
                  "& .MuiSvgIcon-root": { color: "#94a3b8" },
                }}
              >
                <MenuItem value="desc">Title: Z → A</MenuItem>
                <MenuItem value="asc">Title: A → Z</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Main Content Area */}
      {loading ? (
        <Loader message="Loading games database..." />
      ) : games.results && games.results.length > 0 ? (
        <Grid container spacing={3}>
          {games.results.map((game) => (
            <Grid item xs={12} sm={6} md={4} key={game.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#0f172a",
                  borderRadius: 3,
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  overflow: "hidden",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(56, 189, 248, 0.4)",
                    boxShadow: "0 12px 24px -10px rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    height="190"
                    image={`https://www.vgchartz.com/${game.img}`}
                    alt={game.title}
                    sx={{
                      objectFit: "cover",
                      bgcolor: "#020617",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.04)" },
                    }}
                  />
                  {game.console && (
                    <Chip
                      label={game.console}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        bgcolor: "rgba(15, 23, 42, 0.85)",
                        backdropFilter: "blur(6px)",
                        color: "#38bdf8",
                        fontWeight: 700,
                        fontSize: "0.72rem",
                        border: "1px solid rgba(56, 189, 248, 0.3)",
                      }}
                    />
                  )}
                </Box>

                <CardContent
                  sx={{
                    p: 2.5,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    title={game.title}
                    sx={{
                      color: "#f8fafc",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      lineHeight: 1.3,
                      mb: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {game.title}
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    {game.genre && (
                      <Chip
                        label={game.genre}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          color: "#94a3b8",
                          fontSize: "0.75rem",
                        }}
                      />
                    )}
                  </Stack>

                  {/* Metadata Grid */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 1.5,
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: "rgba(0, 0, 0, 0.25)",
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="caption" sx={{ color: "#64748b", display: "flex", alignItems: "center", gap: 0.5 }}>
                        <SportsScoreIcon sx={{ fontSize: 14 }} /> Critic Score
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#38bdf8", fontWeight: 700 }}>
                        {game.critic_score ? `${game.critic_score}/10` : "N/A"}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: "#64748b", display: "flex", alignItems: "center", gap: 0.5 }}>
                        <TrendingUpIcon sx={{ fontSize: 14 }} /> Global Sales
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#4ade80", fontWeight: 700 }}>
                        {game.total_sales ? `${game.total_sales}M` : "N/A"}
                      </Typography>
                    </Box>
                    <Box sx={{ gridColumn: "span 2" }}>
                      <Typography variant="caption" sx={{ color: "#64748b", display: "flex", alignItems: "center", gap: 0.5 }}>
                        <CalendarTodayIcon sx={{ fontSize: 13 }} /> Released
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#cbd5e1", fontSize: "0.825rem" }}>
                        {game.release_date || "Unknown"}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Action Button */}
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<VisibilityIcon />}
                    onClick={() => handleOpen(game)}
                    sx={{
                      mt: "auto",
                      textTransform: "none",
                      fontWeight: 600,
                      color: "#38bdf8",
                      borderColor: "rgba(56, 189, 248, 0.3)",
                      "&:hover": {
                        borderColor: "#38bdf8",
                        bgcolor: "rgba(56, 189, 248, 0.08)",
                      },
                    }}
                  >
                    View Artwork
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        /* Empty State */
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" sx={{ color: "#94a3b8", mb: 1 }}>
            No games found
          </Typography>
          <Typography variant="body2" sx={{ color: "#64748b" }}>
            Try tweaking your search term or clearing the filter.
          </Typography>
        </Box>
      )}

      {/* Pagination */}
      {!loading && games.count > 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Pagination
            count={Math.ceil(games.count / 50)}
            page={page}
            onChange={handlePageChange}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#94a3b8",
                borderColor: "rgba(255, 255, 255, 0.1)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.05)" },
                "&.Mui-selected": {
                  bgcolor: "#0284c7",
                  color: "#ffffff",
                  fontWeight: 700,
                  "&:hover": { bgcolor: "#0369a1" },
                },
              },
            }}
          />
        </Box>
      )}

      {/* Artwork Modal */}
      <Dialog
        open={openModal}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "#0f172a",
            borderRadius: 3,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#f8fafc",
            overflow: "hidden",
          },
        }}
      >
        {selectedGame && (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 3,
                py: 2,
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                {selectedGame.title}
              </Typography>
              <IconButton onClick={handleClose} sx={{ color: "#94a3b8" }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 3, textAlign: "center", bgcolor: "#020617" }}>
              <Box
                component="img"
                src={`https://www.vgchartz.com/${selectedGame.img}`}
                alt={selectedGame.title}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  borderRadius: 2,
                  objectFit: "contain",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              />
            </DialogContent>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Games;