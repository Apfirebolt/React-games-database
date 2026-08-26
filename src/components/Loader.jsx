import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";

const Loader = ({ message = "Loading games...", fullScreen = false }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: fullScreen ? "100vh" : "400px",
        width: "100%",
        gap: 3,
        position: "relative",
      }}
    >
      {/* Outer ambient glow effect */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(99, 102, 241, 0) 70%)",
            filter: "blur(12px)",
            animation: "pulseGlow 2s infinite ease-in-out",
          },
          "@keyframes pulseGlow": {
            "0%, 100%": { transform: "scale(0.85)", opacity: 0.5 },
            "50%": { transform: "scale(1.2)", opacity: 0.9 },
          },
        }}
      >
        {/* Background track circle */}
        <CircularProgress
          variant="determinate"
          value={100}
          size={74}
          thickness={3.5}
          sx={{
            color: "rgba(255, 255, 255, 0.06)",
            position: "absolute",
          }}
        />

        {/* Animated gradient-accented spinner */}
        <CircularProgress
          variant="indeterminate"
          disableShrink
          size={74}
          thickness={3.5}
          sx={{
            color: "#38bdf8",
            animationDuration: "1000ms",
            "& .MuiCircularProgress-circle": {
              strokeLinecap: "round",
            },
          }}
        />

        {/* Pulsing center gaming badge */}
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            borderRadius: "50%",
            bgcolor: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            animation: "iconBeat 2s infinite ease-in-out",
            "@keyframes iconBeat": {
              "0%, 100%": { transform: "scale(0.92)" },
              "50%": { transform: "scale(1.05)" },
            },
          }}
        >
          <SportsEsportsRoundedIcon
            sx={{
              color: "#38bdf8",
              fontSize: 24,
            }}
          />
        </Box>
      </Box>

      {/* Loading message */}
      {message && (
        <Typography
          variant="body2"
          sx={{
            color: "#94a3b8",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontSize: "0.78rem",
            animation: "fadeText 1.6s infinite ease-in-out",
            "@keyframes fadeText": {
              "0%, 100%": { opacity: 0.5 },
              "50%": { opacity: 1 },
            },
          }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Loader;