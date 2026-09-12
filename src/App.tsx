import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      <Hero />
      <TechStack />
      <Footer />
    </div>
  );
}