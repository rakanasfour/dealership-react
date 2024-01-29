import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Error = React.lazy(() => import("pages/Error"));
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
         
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
