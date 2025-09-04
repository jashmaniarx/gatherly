import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Engineer",
    avatar: "SC",
    rating: 5,
    content: "I've met my closest friends through Gatherly events. The tech meetups are especially well-organized and welcoming to newcomers.",
    eventsAttended: 23,
    gradient: "bg-gradient-primary"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Freelance Designer",
    avatar: "MJ",
    rating: 5,
    content: "As someone new to the city, Gatherly helped me build a social circle quickly. The variety of events is incredible!",
    eventsAttended: 15,
    gradient: "bg-gradient-secondary"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Marketing Manager",
    avatar: "ER",
    rating: 5,
    content: "I love hosting workshops on Gatherly. The platform makes it so easy to reach engaged audiences and build community.",
    eventsAttended: 31,
    gradient: "bg-gradient-accent"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Entrepreneur",
    avatar: "DK",
    rating: 5,
    content: "The networking events have been game-changing for my startup. I've found mentors, partners, and amazing team members.",
    eventsAttended: 18,
    gradient: "bg-gradient-primary"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-muted/20" id="community">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What Our Community Says</h2>
          <p className="subheading max-w-2xl mx-auto">
            Real stories from real people who have transformed their social lives through Gatherly.
          </p>
        </div>

        <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bento-card hover-lift group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-purple-deep" />
              </div>

              {/* Avatar & Info */}
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="body-text mb-4 italic">"{testimonial.content}"</p>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="micro-text">
                  {testimonial.eventsAttended} Events Attended
                </div>
                <div className="text-xs text-muted-foreground">Verified Attendee</div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bento-card text-center">
            <div className="micro-text text-2xl font-bold mb-1">4.9/5</div>
            <div className="body-text text-xs">Average Rating</div>
          </div>
          <div className="bento-card text-center">
            <div className="micro-text text-2xl font-bold mb-1">95%</div>
            <div className="body-text text-xs">Would Recommend</div>
          </div>
          <div className="bento-card text-center">
            <div className="micro-text text-2xl font-bold mb-1">50K+</div>
            <div className="body-text text-xs">Success Stories</div>
          </div>
          <div className="bento-card text-center">
            <div className="micro-text text-2xl font-bold mb-1">200K+</div>
            <div className="body-text text-xs">Connections Made</div>
          </div>
        </div>
      </div>
    </section>
  );
}