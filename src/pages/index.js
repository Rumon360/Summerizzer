import Layout from "@/components/Layout";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import MainSection from "@/components/sections/MainSection";
import Nav from "@/components/sections/Nav";

export default function Home() {
  return (
    <Layout title="Summerizzer">
      <Nav />
      <div data-scroll-section>
        <Hero />
        <MainSection />
        <About />
        <Footer />
      </div>
    </Layout>
  );
}
