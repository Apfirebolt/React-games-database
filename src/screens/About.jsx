import gsap from "gsap";
import { useRef, useEffect } from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const About = () => {
  const el = useRef(null);

  useEffect(() => {
    gsap.fromTo(el.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }, []);
  return (
    <Container ref={el} color="primary" maxWidth="lg" sx={{ mt: 2 }}>
      <Box my={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to our games database! We are dedicated to providing you
            with the most comprehensive and up-to-date information on all your
            favorite games.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our team of passionate gamers and developers work tirelessly to
            ensure that our database is accurate and informative. Whether you're
            looking for the latest releases, classic titles, or hidden gems,
            we've got you covered.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Thank you for visiting our site. We hope you find it useful and
            enjoyable. If you have any questions or feedback, please don't
            hesitate to contact us.
          </Typography>
          <Typography variant="body1">
            <a
              href="https://softgenie.org/api/games"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://softgenie.org/api/games
            </a>{" "}
            - API used for this project
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
