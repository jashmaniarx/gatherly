import { Camera, Users, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryEvents = [
  {
    title: "Rooftop Summer Party",
    location: "Downtown Terrace",
    attendees: 180,
    image: "bg-gradient-primary",
    category: "Party"
  },
  {
    title: "Food Truck Festival",
    location: "Central Park",
    attendees: 450,
    image: "bg-gradient-secondary",
    category: "Food"
  },
  {
    title: "Live Music Night",
    location: "Riverside Club",
    attendees: 220,
    image: "bg-gradient-accent",
    category: "Music"
  },
  {
    title: "Art & Wine Walk",
    location: "Gallery District",
    attendees: 95,
    image: "bg-gradient-primary",
    category: "Art"
  },
  {
    title: "Tech Meetup",
    location: "Innovation Hub",
    attendees: 160,
    image: "bg-gradient-secondary",
    category: "Tech"
  },
  {
    title: "Beach Volleyball",
    location: "Sunset Beach",
    attendees: 80,
    image: "bg-gradient-accent",
    category: "Sports"
  }
];

export function CommunityGallery() {
  return (
    <section className="py-20 px-4 bg-background" id="gallery">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">See The Magic Happen</h2>
          <p className="subheading max-w-2xl mx-auto">
            Take a peek at the incredible moments our community creates together. Every event is a new adventure!
          </p>
        </div>

        <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {galleryEvents.map((event, index) => (
            <div
              key={event.title}
              className={`bento-card group cursor-pointer hover-lift ${
                index === 0 ? 'md:row-span-2' : ''
              } ${index === 2 ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Event Image Placeholder */}
              <div className={`w-full ${index === 0 ? 'h-64' : 'h-48'} ${event.image} rounded-xl mb-4 relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 text-center">
                  <Camera className="w-12 h-12 text-white mb-3 mx-auto opacity-80" />
                  <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <h3 className="heading-md text-lg mb-3 group-hover:text-secondary transition-colors">
                {event.title}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-blue-vibrant" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Users className="w-4 h-4 mr-2 text-cyan-bright" />
                  <span>{event.attendees} people joined</span>
                </div>
              </div>

              <Button variant="ghost" size="sm" className="w-full text-secondary hover:text-secondary font-medium">
                View Event Photos
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="party" className="font-poppins font-semibold">
            Share Your Event Photos
          </Button>
        </div>
      </div>
    </section>
  );
}