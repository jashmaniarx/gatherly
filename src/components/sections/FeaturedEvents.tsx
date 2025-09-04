import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredEvents = [
  {
    id: 1,
    title: "Tech Startup Pitch Night",
    date: "March 15, 2024",
    time: "7:00 PM",
    location: "Downtown Convention Center",
    attendees: 245,
    category: "Networking",
    image: "bg-gradient-primary",
    featured: true
  },
  {
    id: 2,
    title: "Live Jazz & Wine Tasting",
    date: "March 18, 2024", 
    time: "6:30 PM",
    location: "Riverside Jazz Club",
    attendees: 89,
    category: "Music",
    image: "bg-gradient-secondary"
  },
  {
    id: 3,
    title: "Morning Yoga in the Park",
    date: "March 20, 2024",
    time: "8:00 AM", 
    location: "Central Park",
    attendees: 156,
    category: "Fitness",
    image: "bg-gradient-accent"
  },
  {
    id: 4,
    title: "Digital Photography Workshop",
    date: "March 22, 2024",
    time: "2:00 PM",
    location: "Creative Studios",
    attendees: 67,
    category: "Workshop",
    image: "bg-gradient-primary"
  },
  {
    id: 5,
    title: "Food Truck Festival",
    date: "March 25, 2024",
    time: "11:00 AM",
    location: "Harbor Square",
    attendees: 892,
    category: "Food",
    image: "bg-gradient-secondary"
  },
  {
    id: 6,
    title: "Indie Film Screening",
    date: "March 28, 2024",
    time: "7:30 PM", 
    location: "The Arthouse Cinema",
    attendees: 134,
    category: "Culture",
    image: "bg-gradient-accent"
  }
];

export function FeaturedEvents() {
  return (
    <section className="py-20 px-4 bg-muted/30" id="events">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Upcoming Featured Events</h2>
          <p className="subheading max-w-2xl mx-auto">
            Don't miss these popular events happening in your area. RSVP now to secure your spot!
          </p>
        </div>

        <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {featuredEvents.map((event, index) => (
            <div
              key={event.id}
              className={`bento-card hover-lift cursor-pointer group ${
                event.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Event Image/Gradient */}
              <div className={`w-full h-32 ${event.image} rounded-xl mb-4 flex items-end p-4 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
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
                  <Calendar className="w-4 h-4 mr-2 text-purple-deep" />
                  <span>{event.date}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2 text-purple-deep" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-blue-vibrant" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground text-sm">
                  <Users className="w-4 h-4 mr-2 text-cyan-bright" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>

              <Button 
                size="sm" 
                className="w-full bg-gradient-secondary hover:opacity-90 font-poppins font-semibold"
              >
                RSVP Now
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-poppins font-semibold">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}