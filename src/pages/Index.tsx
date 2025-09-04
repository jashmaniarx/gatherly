import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { EventCategories } from "@/components/sections/EventCategories";
import { FeaturedEvents } from "@/components/sections/FeaturedEvents";
import { PartyStats } from "@/components/sections/PartyStats";
import { LiveEvents } from "@/components/sections/LiveEvents";
import { CommunityGallery } from "@/components/sections/CommunityGallery";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <PartyStats />
          <EventCategories />
          <FeaturedEvents />
          <LiveEvents />
          <CommunityGallery />
          <HowItWorks />
          <Testimonials />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;