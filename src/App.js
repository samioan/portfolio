import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import theme from "theme/theme";
import { Home, About, Resume, Portfolio, Blog, Contact } from "routes";
import { Sidebar } from "components";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Sidebar />
  </ThemeProvider>
);

export default App;
