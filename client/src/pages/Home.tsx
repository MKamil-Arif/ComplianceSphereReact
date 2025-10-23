import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";
import Solutions from "@/components/Solutions";
import Compliance from "@/components/Compliance";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>FDA 21 CFR Part 11 Compliant Software Systems</title>
        <meta 
          name="description" 
          content="Trusted by regulated industries worldwide. Our FDA 21 CFR Part 11-compliant software systems ensure audit-ready documentation, secure data integrity, and seamless regulatory compliance." 
        />
        <meta 
          name="keywords" 
          content="FDA compliance, 21 CFR Part 11, pharmaceutical software, biotech solutions, environmental monitoring, microbial assay, regulatory compliance" 
        />
      </Helmet>
      
      <Hero />
      <ProductHighlights />
      <Solutions />
      <Compliance />
      <CaseStudies />
      <About />
      <Contact />
    </>
  );
}
