import "./App.css";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import WorkFlow from "./components/WorkFlow";

function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-10">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
