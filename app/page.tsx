import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SelectedWork } from "@/components/SelectedWork";
import { Research } from "@/components/Research";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { Credentials } from "@/components/Credentials";
import { Notes } from "@/components/Notes";
import { GitHubSection } from "@/components/GitHubSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Assembly */}
      <main className="flex-1">
        {/* Firstbase-Style 3D Halftone Globe Hero Section */}
        <Hero />

        {/* 01 About Section */}
        <About />

        {/* 02 Selected Work (Flagship Systems) */}
        <SelectedWork />

        {/* 03 Research & Stability-Plasticity Retention Simulator */}
        <Research />

        {/* 04 Experience & Leadership Timeline */}
        <Experience />

        {/* 05 Technical Stack Matrix */}
        <TechStack />

        {/* 06 Verified Credentials */}
        <Credentials />

        {/* 07 Notes on AI */}
        <Notes />

        {/* 08 Open Source & Experiments */}
        <GitHubSection />

        {/* 09 Contact & Collaboration */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
