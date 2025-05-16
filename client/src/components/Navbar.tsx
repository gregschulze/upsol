import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Sobre", href: "#sobre" },
  { name: "Depoimentos", href: "#depoimentos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/90 backdrop-blur-md border-b border-highlight" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-accent transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href="#contato">
            <Button className="bg-accent hover:bg-accent/90 text-black font-bold transition-all hover:-translate-y-1 hover:shadow-lg">
              Fale Conosco
            </Button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-primary border-t border-highlight"
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contato" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-accent hover:bg-accent/90 text-black font-bold">
              Fale Conosco
            </Button>
          </a>
        </div>
      </motion.div>
    </header>
  );
}
