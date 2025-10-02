import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import DreamSpaceSection from "@/components/DreamSpaceSection";
import AmazingProjectsSection from "@/components/AmazingProjectsSection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import UniqueDesignsSection from "@/components/UniqueDesignsSection";
import DesignIntroSection from "@/components/DesingIntroSection";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <DreamSpaceSection/>
    <DesignIntroSection/>
    <AmazingProjectsSection/>
    <UniqueDesignsSection/>
    <TestimonialsSection/>
    <CallToAction/>
    <Footer/>
    </>
  );
}
