import { Route, Routes, useLocation } from "react-router";
import Home from "./Pages/Home";
import "./App.css";
import Navbar from "./Components/NavBar";
import YogaFooter from "./Components/Footer";
import About from "./Pages/About";
import Classes from "./Pages/Classes";
import ContactPage from "./Pages/Contact";
import YogaGallery from "./Pages/Gallery";
import BlogList from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetail";
import FloatingButtons from "./Components/TopAndWhatsappBtn";
import { useEffect } from "react";
import NotFound from "./Components/Error404";

function App() {
  const Location = useLocation().pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Location]);
  return (
    <div className="App">
      <Navbar />
      <FloatingButtons />
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
      <YogaFooter />
    </div>
  );
}

export default App;
