import Layout from "@/components/Layout";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import MainSection from "@/components/sections/MainSection";
import Nav from "@/components/sections/Nav";
import Support from "@/components/sections/Support";

export default function Home() {
  return (
    <Layout title="Summarizzer">
      <Nav />
      <div data-scroll-section>
        <Hero />
        <MainSection />
        <About />
        <Support />
        <Footer />
      </div>
    </Layout>
  );
}
