import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cityscape.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-bright rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-vibrant rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-vibrant rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-purple-vibrant rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="heading-xl mb-6">
            Discover Amazing Events in Your City
          </h1>
          
          {/* Subheading */}
          <p className="subheading mb-8 max-w-2xl mx-auto">
            Connect with your community through local meetups, workshops, concerts, and networking events. 
            Never miss out on what's happening around you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="default"
              className="text-lg px-8 py-4 h-auto animate-glow"
              onClick={() => window.location.href = '#events'}
            >
              Find Events Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => window.location.href = '#community'}
            >
              Host an Event
            </Button>
          </div>

          {/* Stats Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bento-card text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-accent mx-auto mb-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="micro-text mb-1">50+ Cities</div>
              <div className="body-text text-xs">Worldwide Coverage</div>
            </div>
            
            <div className="bento-card text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-secondary mx-auto mb-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="micro-text mb-1">10K+ Events</div>
              <div className="body-text text-xs">Monthly Hosted</div>
            </div>
            
            <div className="bento-card text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="micro-text mb-1">1M+ Members</div>
              <div className="body-text text-xs">Active Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}