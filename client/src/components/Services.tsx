import { services } from "@/lib/services";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function Services() {
  const { ref, revealed } = useRevealOnScroll();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="servicos" className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={revealed ? "show" : "hidden"}
          >
            <p className="text-accent font-bold mb-2">NOSSAS SOLUÇÕES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serviços de <span className="text-accent">Automação</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Soluções personalizadas para automatizar, otimizar e transformar
              seus processos de negócio usando n8n.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={revealed ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-primary rounded-xl overflow-hidden transition-transform hover:scale-[1.02] duration-300 shadow-lg h-full"
              variants={itemVariants}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="text-gray-400 space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-accent mr-2">
                        <Check size={16} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="text-accent font-bold flex items-center hover:underline"
                >
                  Saiba mais <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
