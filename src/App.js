import { useState } from "react";
import ProjectDetail from "./pages/ProjectDetail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-gray-900 dark:bg-gray-100 min-h-screen text-gray-100 dark:text-gray-900 transition-colors duration-500">
        <Router>
          {/* Navbar */}
          <nav className="relative flex items-center p-4 max-w-6xl mx-auto">
            {/* Left side - navigation links */}
            <ul className="flex space-x-8 font-medium text-gray-100 dark:text-gray-800">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Center - your name */}
            <div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                         font-bold text-lg text-white dark:text-black"
            >
              Khushi Bhatia
            </div>

            {/* Right side - dark mode toggle button */}
            <button
              onClick={() => setDark(!dark)}
              className="ml-auto px-4 py-1 rounded-full border border-blue-500 text-blue-500
                         hover:bg-blue-500 hover:text-white transition duration-300 font-semibold"
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>

          {/* Animated page transitions */}
          <AnimatedRoutes />
        </Router>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
  path="/projects/:slug"
  element={
    <PageWrapper>
      <ProjectDetail />
    </PageWrapper>
  }
/>
        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
          
        />
      </Routes>
      
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto p-4"
    >
      {children}
    </motion.div>
  );
}

export default App;
