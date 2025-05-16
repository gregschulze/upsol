import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { leadFormSchema } from "@shared/schema";

type LeadFormValues = z.infer<typeof leadFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: LeadFormValues) => {
    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/leads", data);
      setIsSuccess(true);
      toast({
        title: "Mensagem enviada!",
        description: "Em breve entraremos em contato.",
      });
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary p-8 rounded-xl border border-[#2E2E2E]">
      <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="block text-gray-400 mb-2">
            Nome completo
          </label>
          <Input
            id="name"
            className="w-full bg-secondary border border-[#2E2E2E] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
            placeholder="Seu nome"
            {...register("name")}
            error={errors.name?.message}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-400 mb-2">
            E-mail
          </label>
          <Input
            id="email"
            type="email"
            className="w-full bg-secondary border border-[#2E2E2E] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
            placeholder="seu@email.com"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-400 mb-2">
            Telefone
          </label>
          <Input
            id="phone"
            className="w-full bg-secondary border border-[#2E2E2E] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
            placeholder="(00) 00000-0000"
            {...register("phone")}
            error={errors.phone?.message}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-gray-400 mb-2">
            Empresa
          </label>
          <Input
            id="company"
            className="w-full bg-secondary border border-[#2E2E2E] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
            placeholder="Nome da sua empresa"
            {...register("company")}
            error={errors.company?.message}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-400 mb-2">
            Mensagem
          </label>
          <Textarea
            id="message"
            rows={4}
            className="w-full bg-secondary border border-[#2E2E2E] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
            placeholder="Conte-nos sobre seu projeto ou necessidade"
            {...register("message")}
            error={errors.message?.message}
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-black px-6 py-6 rounded-lg font-bold transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Enviar Mensagem"
            )}
          </Button>
        </div>
      </form>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 bg-[#4CAF50]/20 border border-[#4CAF50] text-white p-4 rounded-lg"
          >
            <div className="flex items-center">
              <CheckCircle className="text-[#4CAF50] mr-3 text-xl" />
              <p>Mensagem enviada com sucesso! Em breve entraremos em contato.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
