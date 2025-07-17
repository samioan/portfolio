import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Sidebar } from "components";

const Home = React.lazy(() => import("routes/home"));
const About = React.lazy(() => import("routes/about"));
const Resume = React.lazy(() => import("routes/resume"));
const Portfolio = React.lazy(() => import("routes/portfolio"));
const Contact = React.lazy(() => import("routes/contact"));

const App = () => (
  <>
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-screen h-screen bg-[#222831]">
          <div className="w-[128px] h-[128px] border-8 border-[rgba(0,173,181,0.2)] border-t-[#00ADB5] rounded-full animate-spin" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
    <Sidebar />
  </>
);

export default App;
