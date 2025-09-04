import { Clock, MapPin, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const liveEvents = [
  {
    title: "🎉 Pizza & Games Night",
    status: "Starting in 2 hours",
    location: "Game Cafe Downtown",
    attendees: 24,
    maxAttendees: 30,
    isLive: true,
    urgency: "high"
  },
  {
    title: "🎵 Open Mic Night",
    status: "Live now!",
    location: "The Corner Bar",
    attendees: 45,
    maxAttendees: 50,
    isLive: true,
    urgency: "live"
  },
  {
    title: "🏃‍♀️ Morning Run Club",
    status: "Tomorrow 7 AM",
    location: "Riverside Park",
    attendees: 18,
    maxAttendees: 25,
    isLive: false,
    urgency: "medium"
  },
  {
    title: "🍕 Food Truck Rally",
    status: "This weekend",
    location: "Harbor Square",
    attendees: 156,
    maxAttendees: 200,
    isLive: false,
    urgency: "low"
  }
];

export function LiveEvents() {
  return (
    <section className="py-20 px-4 bg-gradient-hero" id="live">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">Happening Right Now</h2>
          <p className="text-white/90 text-lg md:text-xl font-quicksand max-w-2xl mx-auto">
            Don't miss out! These events are starting soon or already underway. Jump in and join the fun!
          </p>
        </div>

        <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {liveEvents.map((event, index) => (
            <div
              key={event.title}
              className={`bento-card bg-white/10 backdrop-blur-lg border-white/20 hover-lift group ${
                event.isLive ? 'animate-glow' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Live Indicator */}
              {event.urgency === 'live' && (
                <div className="absolute -top-2 -right-2 flex items-center">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center animate-pulse">
                    <Zap className="w-3 h-3 mr-1" />
                    LIVE
                  </div>
                </div>
              )}

              {event.urgency === 'high' && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    SOON
                  </div>
                </div>
              )}

              <h3 className="text-white font-poppins font-semibold text-lg mb-3 group-hover:text-cyan-bright transition-colors">
                {event.title}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-white/80 text-sm">
                  <Clock className="w-4 h-4 mr-2 text-cyan-bright" />
                  <span className="font-medium">{event.status}</span>
                </div>
                
                <div className="flex items-center text-white/80 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-pink-vibrant" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center text-white/80 text-sm">
                  <Users className="w-4 h-4 mr-2 text-blue-vibrant" />
                  <span>{event.attendees}/{event.maxAttendees} people</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                <div 
                  className="bg-gradient-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                />
              </div>

              <Button 
                variant={event.isLive ? "party" : "outline"} 
                size="sm" 
                className={`w-full ${event.isLive ? 'animate-pulse' : ''}`}
              >
                {event.urgency === 'live' ? 'Join Now!' : 'Reserve Spot'}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/20">
            View All Live Events
          </Button>
        </div>
      </div>
    </section>
  );
}