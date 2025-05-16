import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="bg-accent py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Pronto para automatizar seus processos?
          </h2>
          <p className="text-black/80 text-lg md:text-xl mb-8">
            Entre em contato hoje mesmo e descubra como a UP Soluções pode transformar seu negócio com automação inteligente.
          </p>
          <a href="#contato">
            <Button 
              className="bg-black text-white px-8 py-6 rounded-lg font-bold transition-all hover:bg-black/80 hover:scale-105"
              size="lg"
            >
              Solicite uma Demonstração Gratuita
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
