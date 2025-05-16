import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
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
    <section id="depoimentos" className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={revealed ? "show" : "hidden"}
          >
            <p className="text-accent font-bold mb-2">DEPOIMENTOS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos <span className="text-accent">clientes dizem</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubra como nossas soluções de automação transformaram os negócios de nossos clientes.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={revealed ? "show" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-8 rounded-xl border border-[#2E2E2E]"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="text-accent flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      className={i < testimonial.rating ? "text-accent" : "text-gray-400"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-white italic mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center text-black font-bold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
