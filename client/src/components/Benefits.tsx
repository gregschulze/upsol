import { benefits } from "@/lib/benefits";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { motion } from "framer-motion";
import React from "react";

export default function Benefits() {
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
    <section className="bg-primary py-20" id="benefits">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={revealed ? "show" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a <span className="text-accent">automação?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubra como nossos serviços de automação podem revolucionar sua
              operação e levar sua empresa ao próximo nível.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={revealed ? "show" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-8 rounded-xl border border-[#2E2E2E]"
              variants={itemVariants}
            >
              <div className="text-accent text-3xl mb-4">
                {React.createElement(benefit.icon, { size: 36 })}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
