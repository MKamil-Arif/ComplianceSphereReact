import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const footerSections = [
  {
    title: "Products",
    links: [
      { name: "Environmental Monitoring", href: "/products/environmental-monitoring-system" },
      { name: "Microbial Assay Reader", href: "/products/microbial-assay-zone-reader" },
      { name: "Audit Trail Manager", href: "#" },
      { name: "E-Signature Module", href: "#" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { name: "Pharmaceutical", href: "/solutions" },
      { name: "Biotechnology", href: "/solutions" },
      { name: "Medical Devices", href: "/solutions" },
      { name: "Clinical Research", href: "/solutions" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Training", href: "#" },
      { name: "Technical Support", href: "/contact" },
      { name: "Validation Services", href: "#" }
    ]
  }
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-white text-white py-16" 
      style={{
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 18s ease infinite",
      }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">4D Solutions.io</div>
            <p className="text-blue-200 leading-relaxed">
              Regulatory-grade software solutions for FDA 21 CFR Part 11 compliance 
              in pharmaceutical, biotech, and medical device industries.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-blue-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-200 text-sm">
            © 2024 4D Solutions. All rights reserved. | ISO 27001 Certified | FDA 21 CFR Part 11 Compliant
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
