import { Box, Container, Grid, Typography, IconButton, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Games", path: "/games" },
  { label: "About", path: "/about" },
];

const SOCIAL_LINKS = [
  { icon: <GitHubIcon fontSize="small" />, url: "https://github.com", label: "GitHub" },
  { icon: <TwitterIcon fontSize="small" />, url: "https://twitter.com", label: "Twitter" },
  { icon: <RedditIcon fontSize="small" />, url: "https://reddit.com", label: "Reddit" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: "auto",
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#94a3b8",
        pt: 5,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          {/* Brand & Description */}
          <Grid item xs={12} md={4}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                color: "#f8fafc",
                mb: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #0284c7 0%, #6366f1 100%)",
                  boxShadow: "0 0 12px rgba(99, 102, 241, 0.3)",
                }}
              >
                <SportsEsportsIcon sx={{ color: "#fff", fontSize: 20 }} />
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  background: "linear-gradient(90deg, #ffffff 0%, #cbd5e1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                GameDB
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#64748b", maxWidth: 300 }}>
              Your comprehensive hub for discovering, tracking, and exploring video games across all platforms.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: { xs: "flex-start", md: "center" },
              }}
            >
              {NAV_LINKS.map((link) => (
                <MuiLink
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: "#94a3b8",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                      color: "#38bdf8",
                    },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Social Icons */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: { xs: "flex-start", md: "flex-end" },
              }}
            >
              {SOCIAL_LINKS.map((social) => (
                <IconButton
                  key={social.label}
                  aria-label={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#94a3b8",
                    bgcolor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    p: 1,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      color: "#38bdf8",
                      bgcolor: "rgba(56, 189, 248, 0.1)",
                      borderColor: "rgba(56, 189, 248, 0.2)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright & Sub-bar */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
          }}
        >
          <Typography variant="caption" sx={{ color: "#64748b" }}>
            © {currentYear} React Games Database. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: "#475569" }}>
            Built with React, MUI & Redux
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;