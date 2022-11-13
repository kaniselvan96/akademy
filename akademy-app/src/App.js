import "./App.css";
import HeroSection from "./pages/Hero/HeroSection";
import CoursesList from "./pages/Courses/CoursesList";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/About/AboutUs";
import Stats from "./components/Stats";
import Footer1 from "./components/Footer1";

function App() {
  return (
    
    <>
      <HeroSection />
      <Stats/>
      <AboutUs/>
      <CoursesList/>
      <Contact/>
      <Footer1/>
      </>
      
  );
}

export default App;
