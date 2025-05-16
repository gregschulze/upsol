import { FullLogo } from "@/components/ui/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  MapPin,
  Mail,
  Phone,
  Clock 
} from "lucide-react";

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/newsletter", { email });
      toast({
        title: "Inscrição realizada!",
        description: "Você foi inscrito em nossa newsletter com sucesso.",
      });
      setEmail("");
    } catch (error) {
      console.error("Error submitting newsletter:", error);
      toast({
        title: "Erro ao se inscrever",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-[#2E2E2E]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <FullLogo className="h-12 mb-4" />
            <p className="text-gray-400 mb-6">
              A UP Soluções é especialista em automação de processos de negócios usando n8n. Ajudamos empresas a se transformarem digitalmente, economizando tempo e recursos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#2E2E2E] hover:bg-accent w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-black transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-[#2E2E2E] hover:bg-accent w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-[#2E2E2E] hover:bg-accent w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-black transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-[#2E2E2E] hover:bg-accent w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-black transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#servicos" className="text-gray-400 hover:text-accent transition-colors">Automação de Fluxos de Trabalho</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-accent transition-colors">Integração de Sistemas e APIs</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-accent transition-colors">Automação de Marketing e Vendas</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-accent transition-colors">Automação de Atendimento</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-accent transition-colors">Processamento e Análise de Dados</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-accent transition-colors">Soluções Personalizadas</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-accent transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#depoimentos" className="text-gray-400 hover:text-accent transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-accent transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber novidades, dicas e atualizações sobre automação de processos.
            </p>
            <form className="space-y-4" onSubmit={handleNewsletterSubmit}>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full bg-secondary border border-[#2E2E2E] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent/90 text-black px-6 py-3 rounded-lg font-bold transition-all hover:-translate-y-1 hover:shadow-lg w-full"
              >
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-[#2E2E2E] text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} UP Soluções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
