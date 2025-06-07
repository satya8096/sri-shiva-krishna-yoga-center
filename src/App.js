import { Route, Routes, useLocation } from "react-router";
import { Suspense, lazy, useEffect } from "react";
import "./App.css";

// Components
import Navbar from "./Components/NavBar";
import YogaFooter from "./Components/Footer";
import FloatingButtons from "./Components/TopAndWhatsappBtn";

// Lazy Loaded Pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Classes = lazy(() => import("./Pages/Classes"));
const ContactPage = lazy(() => import("./Pages/Contact"));
const YogaGallery = lazy(() => import("./Pages/Gallery"));
const BlogList = lazy(() => import("./Pages/Blogs"));
const BlogDetails = lazy(() => import("./Pages/BlogDetail"));
const NotFound = lazy(() => import("./Components/Error404"));

function App() {
  const location = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <FloatingButtons />
      <Suspense
        fallback={
          <div className="loader-wrapper">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            ></div>
            <span className="mt-3">Loading...</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/gallery" element={<YogaGallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <YogaFooter />
    </div>
  );
}

export default App;
