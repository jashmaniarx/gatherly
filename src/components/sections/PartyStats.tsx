import { Zap, Heart, Trophy, Sparkles } from "lucide-react";

const partyStats = [
  {
    icon: Zap,
    number: "98%",
    label: "Fun Guaranteed",
    description: "Event satisfaction rate",
    gradient: "bg-gradient-primary"
  },
  {
    icon: Heart,
    number: "50K+",
    label: "Connections Made",
    description: "New friendships formed",
    gradient: "bg-gradient-secondary"
  },
  {
    icon: Trophy,
    number: "15K+",
    label: "Events Hosted",
    description: "Successful gatherings",
    gradient: "bg-gradient-accent"
  },
  {
    icon: Sparkles,
    number: "24/7",
    label: "Something Happening",
    description: "Events around the clock",
    gradient: "bg-gradient-primary"
  }
];

export function PartyStats() {
  return (
    <section className="py-16 px-4 bg-muted/30" id="stats">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">The Party Never Stops</h2>
          <p className="subheading max-w-2xl mx-auto">
            Join a community that's always celebrating life, learning, and making memories together.
          </p>
        </div>

        <div className="bento-grid grid-cols-2 lg:grid-cols-4">
          {partyStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bento-card text-center hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="micro-text text-3xl font-bold mb-2">{stat.number}</div>
              <div className="heading-md text-lg mb-2">{stat.label}</div>
              <div className="body-text text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}