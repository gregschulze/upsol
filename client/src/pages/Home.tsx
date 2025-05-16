import { Helmet } from 'react-helmet';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  const { ref, revealed } = useRevealOnScroll();

  const contactInfoItems = [
    {
      icon: <MapPin className="text-accent text-xl mt-1 mr-4" />,
      title: "Endereço",
      content: (
        <>
          Av. Paulista, 1000, Sala 301<br />
          Bela Vista, São Paulo - SP<br />
          CEP: 01310-100
        </>
      ),
    },
    {
      icon: <Mail className="text-accent text-xl mt-1 mr-4" />,
      title: "E-mail",
      content: (
        <>
          <a href="mailto:contato@upsolucoes.com.br" className="hover:text-accent">
            contato@upsolucoes.com.br
          </a>
          <br />
          <a href="mailto:suporte@upsolucoes.com.br" className="hover:text-accent">
            suporte@upsolucoes.com.br
          </a>
        </>
      ),
    },
    {
      icon: <Phone className="text-accent text-xl mt-1 mr-4" />,
      title: "Telefone",
      content: (
        <>
          <a href="tel:+551121234567" className="hover:text-accent">
            (11) 2123-4567
          </a>
          <br />
          <a href="tel:+5511987654321" className="hover:text-accent">
            (11) 98765-4321
          </a>{" "}
          (WhatsApp)
        </>
      ),
    },
    {
      icon: <Clock className="text-accent text-xl mt-1 mr-4" />,
      title: "Horário de Atendimento",
      content: (
        <>
          Segunda a Sexta: 9h às 18h<br />
          Sábado: 9h às 13h
        </>
      ),
    },
  ];

  const socialIcons = [
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
  ];

  return (
    <>
      <Helmet>
        <title>UP Soluções - Automação de Negócios</title>
        <meta name="description" content="Transforme seu negócio com soluções de automação inteligente. Economize tempo, reduza erros e aumente a produtividade da sua empresa com a UP Soluções." />
        <meta property="og:title" content="UP Soluções - Automação de Negócios" />
        <meta property="og:description" content="Soluções personalizadas de automação de processos para empresas que buscam eficiência e inovação." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Benefits />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <ContactCTA />

        {/* Contact Section */}
        <section id="contato" className="bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div ref={ref} className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-accent font-bold mb-2">CONTATO</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Fale com a <span className="text-accent">UP Soluções</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Estamos prontos para discutir seu projeto e ajudar a transformar seus processos de negócio.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

                <div className="space-y-8 mb-12">
                  {contactInfoItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                      {item.icon}
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-gray-400">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4">Siga-nos</h3>
                <div className="flex space-x-4">
                  {socialIcons.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="bg-[#2E2E2E] hover:bg-accent w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-black transition-colors"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
