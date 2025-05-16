import React from 'react'
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee'

const testimonials = [
  {
    author: {
      name: "João Silva",
      handle: "Empresa XYZ",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    text: "A automação com o n8n implementada pela UP Soluções transformou completamente nossos processos internos. Economizamos mais de 20 horas por semana em tarefas manuais.",
  },
  {
    author: {
      name: "Maria Oliveira",
      handle: "Startup ABC",
      avatar: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    text: "Fantástico trabalho! Nossa equipe agora passa menos tempo em tarefas repetitivas e mais tempo criando valor real para nossos clientes. Recomendo totalmente.",
  },
  {
    author: {
      name: "Pedro Santos",
      handle: "Comércio Digital Ltda",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    text: "Integramos nosso sistema de vendas com nossa plataforma de marketing em apenas uma semana. A equipe da UP Soluções é extremamente profissional e eficiente."
  },
  {
    author: {
      name: "Ana Costa",
      handle: "Consultoria Tech",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    text: "Nossas automações estão funcionando perfeitamente há mais de um ano sem qualquer problema. O suporte contínuo da UP Soluções faz toda a diferença."
  }
]

export default function Testimonials() {
  return (
    <TestimonialsSection
      title="O que nossos clientes dizem"
      description="Conheça a experiência de quem já transformou seus negócios com nossas soluções de automação"
      testimonials={testimonials}
      className="bg-up-black"
    />
  )
}