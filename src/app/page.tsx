import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import DreamSpaceSection from "@/components/DreamSpaceSection";
import AmazingProjectsSection from "@/components/AmazingProjectsSection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <DreamSpaceSection/>
    <AmazingProjectsSection/>
    <TestimonialsSection/>
    <Footer/>
    </>
  );
}
