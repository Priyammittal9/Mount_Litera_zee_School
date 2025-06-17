import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    'Home',
    'Administration', 
    'Faculty',
    'Parents & Students',
    'Photo Gallery',
    'Bookmarks',
    'Calendar'
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
              href="#" 
              className="text-white text-sm md:text-base font-normal hover:text-[#00e6ef] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mt-2">
          <span className="text-[#00e6ef] font-normal text-sm md:text-base mr-2">Follow Us:</span>
          {socialIcons.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href="#"
                className="w-8 h-8 flex items-center justify-center text-[#d1d5db] hover:text-[#00e6ef] transition-colors"
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>
        <div className="text-center text-xs mt-6 opacity-70">
          © {new Date().getFullYear()}mount litera zee school. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
