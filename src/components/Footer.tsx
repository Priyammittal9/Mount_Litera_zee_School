import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Announcement", href: "#announcement" },
  { label: "Why Choose us", href: "#why-choose-us" },
  { label: "Courses", href: "#courses" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#Contact" },
];
  const contactDetails = [
    {
      icon: MapPin,
      label: 'Mount Litera zee School, kundeshwar Road, near life care hospital, Tikamgarh, Madhya Pradesh, India - 472001',
    },
    {
      icon: Phone,
      label: '+91 90098 25058 / +91 99933 81700 / +91 97533 57555',
    },
    {
      icon: Mail,
      label: 'srupadhyaymemorial@gmail.com\nmountliterazeeschool773@gmail.com',
    },
  ];

  const socialIcons = [
    { icon: Instagram },
    { icon: Facebook },
    { icon: Twitter },
    { icon: Globe },
    { icon: Youtube },
    { icon: Linkedin },
  ];

  return (
    <footer className="bg-[#39365B] text-white py-8 mt-10 pb-16 pt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-4">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white text-sm md:text-base font-normal hover:text-[#00e6ef] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Contact Details */}
        <div id='Contact' className="flex flex-wrap flex-col md:flex-row justify-center gap-10 md:gap-6 mb-16 mt-16 text-base md:text-lg w-full max-w-4xl items-center">
          {contactDetails.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center align-middle gap-4 w-full md:w-auto">
                <Icon className="w-10 h-10 min-w-10 min-h-10 text-[#00e6ef] mt-1" />
                <span className="whitespace-pre-line">{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mt-2">
          <span className="text-[#00e6ef] font-normal text-sm md:text-base mr-2">Follow Us:</span>
          {socialIcons.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href="#"
                className="w-10 h-10 flex items-center justify-center text-[#d1d5db] hover:text-[#00e6ef] transition-colors"
              >
                <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
              </a>
            );
          })}
        </div>
        <div className="text-center text-xs mt-6 opacity-70">
          © {new Date().getFullYear()} mount litera zee school. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
