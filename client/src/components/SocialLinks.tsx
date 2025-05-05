import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const socialLinks = [
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "#",
    label: "Twitter"
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "#",
    label: "Instagram"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "#",
    label: "LinkedIn"
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    href: "#",
    label: "Facebook"
  }
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
