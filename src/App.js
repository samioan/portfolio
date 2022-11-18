import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import theme from "theme";
import { Sidebar } from "components";

const Home = React.lazy(() => import("routes/home"));
const About = React.lazy(() => import("routes/about"));
const Resume = React.lazy(() => import("routes/resume"));
const Portfolio = React.lazy(() => import("routes/portfolio"));
// const Blog = React.lazy(() => import("routes/blog"));
const Contact = React.lazy(() => import("routes/contact"));

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Suspense
      fallback={
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "backgroundDark.main",
          }}
        >
          <CircularProgress sx={{ width: "64px", height: "64px" }} />
        </Grid>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
    <Sidebar />
  </ThemeProvider>
);

export default App;
