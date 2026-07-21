export const site = {
  name: "Alishba Arshad",
  firstName: "Alishba",
  email: "janjuaalishba05@gmail.com",
  github: "https://github.com/AlishbaJanjua/",
  linkedin: "https://linkedin.com/in/alishba-arshadd",
  degree: "Bachelor's in Business Data Analytics",
  roles: ["Business Data Analyst", "AI Automation Strategist"],
  tagline:
    "Building intelligent workflows, AI-powered automation systems, and data-driven solutions.",
};

export type NavItem = {
  id: string;
  label: string;
  icon: "home" | "user" | "education" | "skills" | "projects" | "contact";
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "education", label: "Education", icon: "education" },
  { id: "skills", label: "Skills", icon: "skills" },
  { id: "projects", label: "Projects", icon: "projects" },
  { id: "contact", label: "Contact", icon: "contact" },
];
