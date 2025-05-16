import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="Automação digital de processos empresariais"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-bold tracking-wider mb-2 text-lg md:text-xl">
              AGÊNCIA DE AUTOMAÇÃO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforme seu negócio com{" "}
              <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                automação inteligente
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              Economize tempo, reduza erros e aumente a produtividade da sua
              empresa com soluções personalizadas de automação de processos
              usando n8n.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contato">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-black px-8 py-7 rounded-lg font-bold transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(255,193,7,0.3)] w-full sm:w-auto"
                >
                  Comece Agora
                </Button>
              </a>
              <a href="#servicos">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-7 rounded-lg font-bold transition-all duration-300 w-full sm:w-auto"
                >
                  Nossos Serviços
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center z-10"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <a href="#servicos" className="text-white/70 hover:text-white">
          <ChevronDown size={30} />
        </a>
      </motion.div>
    </section>
  );
}
