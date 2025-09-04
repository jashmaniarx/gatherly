import { Calendar, Twitter, Instagram, Facebook, Linkedin, Github } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: ["Features", "Events", "Communities", "Pricing", "Download"]
  },
  {
    title: "Support",
    links: ["Help Center", "Safety", "Guidelines", "Contact Us", "Status"]
  },
  {
    title: "Company", 
    links: ["About", "Blog", "Careers", "Press", "Partners"]
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies", "Licenses", "Accessibility"]
  }
];

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Github, href: "#", name: "GitHub" }
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-16 px-4">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="font-poppins font-bold text-xl text-foreground">Gatherly</span>
            </div>
            <p className="body-text mb-6 max-w-sm">
              Connecting communities through meaningful events and experiences. 
              Discover, attend, and create memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gradient-card rounded-full flex items-center justify-center hover-lift border border-border/50"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-secondary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-poppins font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="body-text hover:text-secondary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bento-card bg-gradient-card mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md text-xl mb-2">Stay Updated</h3>
              <p className="body-text">
                Get notified about the latest events, features, and community updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-purple-deep focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-primary text-white font-poppins font-semibold rounded-xl hover-lift">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <p className="body-text mb-4 md:mb-0">
            © 2024 Gatherly by Jash Maniar. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="body-text hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="body-text hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="body-text hover:text-secondary transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}