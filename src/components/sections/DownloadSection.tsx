import { Apple, Play, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadSection() {
  return (
    <section className="py-20 px-4 bg-gradient-hero text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6 leading-tight">
            Start Discovering Events Today
          </h2>
          <p className="font-quicksand text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Download the Gatherly app or use our web platform to never miss another amazing event in your city.
          </p>
        </div>

        {/* Download Options Bento Grid */}
        <div className="bento-grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto mb-12">
          {/* iOS App */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover-lift text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Apple className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins font-semibold text-xl mb-2">iOS App</h3>
            <p className="text-white/80 text-sm mb-4">Download from the App Store</p>
            <Button className="w-full bg-white text-purple-deep hover:bg-white/90 font-poppins font-semibold">
              Download
            </Button>
          </div>

          {/* Android App */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover-lift text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins font-semibold text-xl mb-2">Android App</h3>
            <p className="text-white/80 text-sm mb-4">Get it on Google Play</p>
            <Button className="w-full bg-white text-purple-deep hover:bg-white/90 font-poppins font-semibold">
              Download
            </Button>
          </div>

          {/* Web App */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover-lift text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins font-semibold text-xl mb-2">Web App</h3>
            <p className="text-white/80 text-sm mb-4">Use in your browser</p>
            <Button className="w-full bg-white text-purple-deep hover:bg-white/90 font-poppins font-semibold">
              Launch App
            </Button>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-white text-purple-deep hover:bg-white/90 font-poppins font-bold text-xl px-12 py-6 h-auto">
            Start Discovering Events
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <p className="mt-4 text-white/70 text-sm">No credit card required • Free to join</p>
        </div>
      </div>
    </section>
  );
}