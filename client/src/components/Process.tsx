import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: 1,
    title: "Diagnóstico",
    description:
      "Analisamos seus processos atuais para identificar oportunidades de automação e ganhos potenciais.",
  },
  {
    number: 2,
    title: "Planejamento",
    description:
      "Desenvolvemos uma estratégia personalizada e um roteiro para implementação das soluções de automação.",
  },
  {
    number: 3,
    title: "Implementação",
    description:
      "Configuramos e integramos a solução n8n, com testes rigorosos para garantir seu funcionamento ideal.",
  },
  {
    number: 4,
    title: "Suporte Contínuo",
    description:
      "Oferecemos manutenção, otimização e suporte constante para garantir o sucesso da sua automação.",
  },
];

export default function Process() {
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
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="w-full h-full bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={revealed ? "show" : "hidden"}
          >
            <p className="text-accent font-bold mb-2">NOSSA METODOLOGIA</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como <span className="text-accent">Trabalhamos</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Um processo estruturado para entregar soluções de automação que
              realmente transformam seu negócio.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={revealed ? "show" : "hidden"}
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.number}
              className="bg-secondary p-8 rounded-xl border border-[#2E2E2E] relative"
              variants={itemVariants}
            >
              <div className="bg-accent text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold absolute -top-5 left-8">
                {step.number}
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
