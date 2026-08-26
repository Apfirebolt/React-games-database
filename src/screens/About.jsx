import { useRef, useEffect } from "react";
import gsap from "gsap";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Chip,
  Button,
  Stack,
  Link,
} from "@mui/material";

// Icons
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const HIGHLIGHTS = [
  {
    icon: <SportsEsportsRoundedIcon sx={{ color: "#38bdf8", fontSize: 32 }} />,
    title: "Vast Game Library",
    desc: "Discover titles across generations, platforms, and genres from retro classics to modern blockbusters.",
  },
  {
    icon: <SpeedRoundedIcon sx={{ color: "#4ade80", fontSize: 32 }} />,
    title: "Critical & Sales Data",
    desc: "Comprehensive insights including verified critic scores, global units sold, and developer credits.",
  },
  {
    icon: <StorageRoundedIcon sx={{ color: "#a855f7", fontSize: 32 }} />,
    title: "Curated Video Game API",
    desc: "Powered by up-to-date data structures supporting seamless querying, sorting, and pagination.",
  },
];

const TECH_STACK = ["React", "Material-UI", "Redux Toolkit", "GSAP", "Vite", "Axios"];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-fade-in",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container ref={containerRef} maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Box className="gsap-fade-in" sx={{ textAlign: "center", mb: 6 }}>
        <Chip
          icon={<CodeRoundedIcon sx={{ fontSize: 18 }} />}
          label="About React Games Database"
          sx={{
            mb: 2,
            px: 1,
            bgcolor: "rgba(56, 189, 248, 0.1)",
            color: "#38bdf8",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            fontWeight: 600,
          }}
        />
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#031221",
            mb: 2,
          }}
        >
          Building the Ultimate Game Archive
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#94a3b8",
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.7,
            fontSize: "1.05rem",
          }}
        >
          We are dedicated to providing players, developers, and researchers with
          the most comprehensive, clean, and accessible database of video game statistics
          and history.
        </Typography>
      </Box>

      {/* Highlights Grid */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {HIGHLIGHTS.map((item) => (
          <Grid item xs={12} md={4} key={item.title} className="gsap-fade-in">
            <Paper
              elevation={0}
              sx={{
                p: 3.5,
                height: "100%",
                bgcolor: "#0f172a",
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
                  width: 52,
                  height: 52,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                {item.icon}
              </Box>
              <Typography variant="h6" sx={{ color: "#f8fafc", fontWeight: 700 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#94a3b8", lineHeight: 1.6 }}>
                {item.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Tech Stack & Source Section */}
      <Paper
        elevation={0}
        className="gsap-fade-in"
        sx={{
          p: 4,
          bgcolor: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(12px)",
          borderRadius: 3,
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={7}>
            <Typography variant="h6" sx={{ color: "#f8fafc", fontWeight: 700, mb: 1 }}>
              Powered by Softgenie Games API
            </Typography>
            <Typography variant="body2" sx={{ color: "#94a3b8", mb: 2.5, lineHeight: 1.6 }}>
              All video game data, covers, platforms, and sales figures are dynamically
              retrieved in real time through the public endpoints provided below.
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
              {TECH_STACK.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    color: "#cbd5e1",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    fontSize: "0.75rem",
                  }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
            <Button
              variant="outlined"
              component={Link}
              href="https://softgenie.org/api/games"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNewRoundedIcon />}
              sx={{
                py: 1.2,
                px: 3,
                borderRadius: 2,
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
              Explore API Endpoint
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;