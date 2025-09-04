import { Music, Dumbbell, Lightbulb, Handshake, Palette, UtensilsCrossed } from "lucide-react";

const categories = [
  {
    name: "Music & Concerts",
    icon: Music,
    count: "2.1K Events",
    gradient: "bg-gradient-primary",
    description: "Live music, festivals, and concerts"
  },
  {
    name: "Sports & Fitness",
    icon: Dumbbell,
    count: "1.8K Events", 
    gradient: "bg-gradient-secondary",
    description: "Workouts, games, and outdoor activities"
  },
  {
    name: "Workshops",
    icon: Lightbulb,
    count: "3.2K Events",
    gradient: "bg-gradient-accent",
    description: "Learn new skills and grow together"
  },
  {
    name: "Networking",
    icon: Handshake,
    count: "1.5K Events",
    gradient: "bg-gradient-primary",
    description: "Professional meetups and connections"
  },
  {
    name: "Arts & Culture",
    icon: Palette,
    count: "950 Events",
    gradient: "bg-gradient-secondary",
    description: "Gallery walks, theater, and exhibitions"
  },
  {
    name: "Food & Drink",
    icon: UtensilsCrossed,
    count: "1.2K Events",
    gradient: "bg-gradient-accent",
    description: "Tastings, cooking classes, and dining"
  }
];

export function EventCategories() {
  return (
    <section className="py-20 px-4" id="categories">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Explore Event Categories</h2>
          <p className="subheading max-w-2xl mx-auto">
            From music festivals to professional workshops, find events that match your interests and passions.
          </p>
        </div>

        <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="bento-card hover-lift cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${category.gradient} flex items-center justify-center group-hover:animate-glow`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="heading-md text-base">{category.name}</h3>
                  <div className="micro-text">{category.count}</div>
                </div>
              </div>
              
              <p className="body-text">{category.description}</p>
              
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl ${category.gradient}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}