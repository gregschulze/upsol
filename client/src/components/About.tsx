import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Timer, Handshake } from "lucide-react";

export default function About() {
  const { ref, revealed } = useRevealOnScroll();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    {
      icon: <Users className="text-accent text-3xl" />,
      title: "Especialistas",
      description: "Em automação n8n",
    },
    {
      icon: <Trophy className="text-accent text-3xl" />,
      title: "Projetos",
      description: "Personalizados",
    },
    {
      icon: <Timer className="text-accent text-3xl" />,
      title: "Agilidade",
      description: "Na implementação",
    },
    {
      icon: <Handshake className="text-accent text-3xl" />,
      title: "Suporte",
      description: "Contínuo ao cliente",
    },
  ];

  return (
    <section id="sobre" className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={revealed ? "show" : "hidden"}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700"
              alt="Equipe de especialistas da UP Soluções"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={revealed ? "show" : "hidden"}
          >
            <p className="text-accent font-bold mb-2">SOBRE NÓS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A <span className="text-accent">UP Soluções</span> é especialista em automação de processos
            </h2>
            <p className="text-gray-400 mb-6">
              Somos uma agência especializada em automação de processos de negócios usando a plataforma n8n. 
              Nossa equipe de especialistas combina conhecimento técnico e experiência em negócios para 
              desenvolver soluções personalizadas que realmente atendem às necessidades dos nossos clientes.
            </p>
            <p className="text-gray-400 mb-8">
              Com anos de experiência no mercado, já ajudamos empresas de diversos setores a transformar
              digitalmente seus processos, economizando tempo e recursos, enquanto aumentam sua produtividade
              e competitividade.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-4">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{stat.title}</h4>
                    <p className="text-gray-400 text-sm">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contato">
              <Button className="bg-accent hover:bg-accent/90 text-black px-8 py-6 rounded-lg font-bold transition-all hover:-translate-y-1 hover:shadow-lg">
                Fale com um Especialista
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
