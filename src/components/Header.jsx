import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

// Modern Gaming & UI Icons
import MenuIcon from "@mui/icons-material/Menu";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const NAV_ITEMS = [
  { label: "Home", path: "/", icon: <HomeRoundedIcon /> },
  { label: "Games", path: "/games", icon: <GridViewRoundedIcon /> },
  { label: "About", path: "/about", icon: <InfoRoundedIcon /> },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#0f172a",
        color: "#f8fafc",
      }}
      role="presentation"
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2.5,
          py: 2.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <SportsEsportsIcon sx={{ color: "#38bdf8", fontSize: 28 }} />
          <Typography variant="subtitle1" fontWeight={700} letterSpacing={0.5}>
            GameVault
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#94a3b8" }}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />

      {/* Navigation List */}
      <List sx={{ px: 1.5, py: 2 }}>
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  py: 1.2,
                  px: 2,
                  bgcolor: isActive ? "rgba(56, 189, 248, 0.12)" : "transparent",
                  color: isActive ? "#38bdf8" : "#94a3b8",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    color: "#f8fafc",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? "#38bdf8" : "#94a3b8",
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    fontWeight: isActive ? 600 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#f8fafc",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          {/* Brand Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "inherit",
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 5 },
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #0284c7 0%, #6366f1 100%)",
                boxShadow: "0 0 16px rgba(99, 102, 241, 0.35)",
              }}
            >
              <SportsEsportsIcon sx={{ color: "#fff", fontSize: 24 }} />
            </Box>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.02em",
                background: "linear-gradient(90deg, #ffffff 0%, #cbd5e1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              GameDB
            </Typography>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1 }}>
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  disableRipple
                  sx={{
                    px: 2,
                    py: 0.8,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "0.925rem",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#38bdf8" : "#94a3b8",
                    backgroundColor: isActive
                      ? "rgba(56, 189, 248, 0.08)"
                      : "transparent",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      color: "#f8fafc",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Mobile Hamburger Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="open navigation drawer"
              sx={{
                color: "#f8fafc",
                bgcolor: "rgba(255, 255, 255, 0.05)",
                borderRadius: 2,
                p: 1,
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
            bgcolor: "#0f172a",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Header;