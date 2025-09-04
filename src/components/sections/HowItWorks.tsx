import { UserPlus, Search, Calendar, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your free account in less than 2 minutes",
    gradient: "bg-gradient-primary",
    step: "01"
  },
  {
    icon: Search,
    title: "Browse Events",
    description: "Discover events based on your interests and location",
    gradient: "bg-gradient-secondary",
    step: "02"
  },
  {
    icon: Calendar,
    title: "RSVP & Connect",
    description: "Reserve your spot and connect with other attendees",
    gradient: "bg-gradient-accent",
    step: "03"
  },
  {
    icon: PartyPopper,
    title: "Attend & Enjoy",
    description: "Show up, make friends, and have amazing experiences",
    gradient: "bg-gradient-primary",
    step: "04"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">How Gatherly Works</h2>
          <p className="subheading max-w-2xl mx-auto">
            Getting started is simple. Follow these four easy steps to begin discovering amazing events in your community.
          </p>
        </div>

        <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bento-card hover-lift text-center group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">{step.step}</span>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="heading-md text-xl mb-3">{step.title}</h3>
              <p className="body-text">{step.description}</p>

              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-accent transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bento-card max-w-lg mx-auto bg-gradient-hero text-white">
            <h3 className="heading-md text-xl mb-4">Ready to Get Started?</h3>
            <p className="body-text text-white/90 mb-6">
              Join thousands of people who have found their community through Gatherly.
            </p>
            <button 
              className="w-full bg-white text-purple-deep font-poppins font-semibold py-3 px-6 rounded-xl hover-lift transition-all duration-300 hover:bg-white/90"
              onClick={() => window.location.href = '#signup'}
            >
              Create Your Free Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}