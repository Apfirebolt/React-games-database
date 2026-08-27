import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  Chip,
  Stack,
} from "@mui/material";

// Icons
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";

const FEATURES = [
  {
    icon: <SportsEsportsRoundedIcon sx={{ color: "#38bdf8", fontSize: 28 }} />,
    title: "Comprehensive Archive",
    description:
      "Search, filter, and inspect detailed records across PlayStation, Xbox, Nintendo, and PC classics.",
  },
  {
    icon: <TrendingUpRoundedIcon sx={{ color: "#4ade80", fontSize: 28 }} />,
    title: "Market Sales Analytics",
    description:
      "Access verified multi-region unit sales and tracking data sourced directly from industry charts.",
  },
  {
    icon: <StorageRoundedIcon sx={{ color: "#a855f7", fontSize: 28 }} />,
    title: "Live Database Sync",
    description:
      "Instantaneous debounced search queries, multi-sort ordering, and paginated game artwork discovery.",
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-hero",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out" },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container ref={containerRef} maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 860,
          mx: "auto",
          mb: 8,
        }}
      >
        <Chip
          className="gsap-hero"
          icon={
            <AutoAwesomeRoundedIcon
              sx={{ fontSize: 16, color: "#38bdf8 !important" }}
            />
          }
          label="Next-Gen Video Game Explorer"
          sx={{
            mb: 3,
            px: 1,
            py: 2.2,
            borderRadius: 3,
            bgcolor: "rgba(56, 189, 248, 0.08)",
            color: "#38bdf8",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            fontWeight: 700,
            fontSize: "0.85rem",
          }}
        />

        <Typography
          className="gsap-hero"
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 900,
            letterSpacing: "-0.03em",
            fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4.2rem" },
            lineHeight: 1.1,
            mb: 3,
            background: "linear-gradient(180deg, #ffffff 0%, #94a3b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Discover, track, and analyze your favorite games.
        </Typography>

        <Typography
          className="gsap-hero"
          variant="body1"
          sx={{
            color: "#94a3b8",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: 1.7,
            mb: 5,
            maxWidth: 680,
            mx: "auto",
          }}
        >
          Explore a rich catalog of game records, critic ratings, sales figures,
          and publisher credits across generations in one streamlined dashboard.
        </Typography>

        {/* Action Buttons */}
        <Stack
          className="gsap-hero"
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            component={Link}
            to="/games"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2.5,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 700,
              background: "linear-gradient(135deg, #0284c7 0%, #6366f1 100%)",
              boxShadow: "0 0 24px rgba(99, 102, 241, 0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #0369a1 0%, #4f46e5 100%)",
                boxShadow: "0 0 32px rgba(99, 102, 241, 0.6)",
              },
            }}
          >
            Explore Game Library
          </Button>

          <Button
            component={Link}
            to="/about"
            variant="outlined"
            size="large"
            sx={{
              px: 3.5,
              py: 1.5,
              borderRadius: 2.5,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
              color: "#cbd5e1",
              borderColor: "rgba(255, 255, 255, 0.15)",
              "&:hover": {
                borderColor: "#38bdf8",
                color: "#38bdf8",
                bgcolor: "rgba(56, 189, 248, 0.05)",
              },
            }}
          >
            About Database
          </Button>
        </Stack>
      </Box>

      {/* Feature Cards Grid */}
      <Grid container spacing={3} sx={{ width: "100%", m: 0 }}>
        {FEATURES.map((feature) => (
          <Grid
            item
            xs={12}
            md={4}
            key={feature.title}
            className="gsap-hero"
            sx={{ pl: { xs: "0 !important", sm: "24px !important" }, pt: { xs: "16px !important", sm: "24px !important" } }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3.5,
                height: "100%",
                bgcolor: "rgba(15, 23, 42, 0.75)",
                backdropFilter: "blur(12px)",
                borderRadius: 3,
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                transition: "transform 0.2s ease, border-color 0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(56, 189, 248, 0.4)",
                },
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                {feature.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{ color: "#f8fafc", fontWeight: 700 }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#94a3b8", lineHeight: 1.6 }}
              >
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;