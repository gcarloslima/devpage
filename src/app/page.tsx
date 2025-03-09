import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Zap,
  BarChart,
  Headphones,
  Store,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Github,
  ChevronRight,
  MessageSquare,
} from "lucide-react"
import homeImage from '@/app/assets/images/home.png'
import barbaraImage from '@/app/assets/images/barbara.png'
import carlosImage from '@/app/assets/images/carlos.png'
import diegoImage from '@/app/assets/images/diego.png'
import milenaImage from '@/app/assets/images/milena.png'
import techCorpImage from '@/app/assets/images/techcorp.png'
import andressaImage from '@/app/assets/images/andressa.png'
import nefegueImage from '@/app/assets/images/nefegue.png'
import carlosRobertoImage from '@/app/assets/images/carlos-roberto.png'
import amandaSilvaImage from '@/app/assets/images/amanda-silva.png'
import ricardoMendesImage from '@/app/assets/images/ricardo-mendes.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
        <div className="container mx-auto py-4 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900 dark:text-white">DevPage</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#home"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-500 transition-colors cursor-pointer"
              >
                Início
              </Link>
              <Link
                href="#portfolio"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-500 transition-colors cursor-pointer"
              >
                Portfolio
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-500 transition-colors cursor-pointer"
              >
                Serviços
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-500 transition-colors cursor-pointer"
              >
                Contato
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer">
                Começar Projeto
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto py-12 md:py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Transformamos ideias em landing pages incríveis
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
              Equipe especializada em criar landing pages modernas e de alta performance. Formamos uma forte combinação
              entre UX/UI com design inovador.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer">
                Iniciar Projeto
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:text-indigo-600 hover:border-indigo-600 dark:border-gray-700 dark:text-gray-300 dark:hover:text-indigo-500 dark:hover:border-indigo-500 transition-colors cursor-pointer"
              >
                Ver Portfolio
              </Button>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg -rotate-6 transform transition-colors"></div>
            <Image
              src={homeImage}
              alt="Equipe trabalhando em landing pages"
              width={500}
              height={500}
              className="rounded-lg object-cover relative z-10 shadow-lg transition-shadow hover:shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto py-12 md:py-16 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-white">
          Nossa Equipe
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: "Barbara Santos", role: "Frontend Developer", image: barbaraImage },
            { name: "Carlos Rangel", role: "Full Stack Developer", image: carlosImage },
            { name: "Diego Silva", role: "Backend Developer", image: diegoImage },
            { name: "Milena Bertoldi", role: "Full Stack Developer", image: milenaImage },
          ].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-indigo-100 dark:border-indigo-900 transition-colors">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="container mx-auto py-12 md:py-16 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-white">
          Nossos Projetos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "TechCorp Landing Page",
              description: "Landing page moderna para empresa de tecnologia",
              image: techCorpImage,
              tag: "Web",
            },
            {
              title: "Refúgio Arquitetura",
              description: "Página de Portfolio otimizada para arquitetos",
              image: nefegueImage,
              tag: "Design",
            },
            {
              title: "Andressa Psicóloga",
              description: "Landing page para atendimento de saúde",
              image: andressaImage,
              tag: "Saúde",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 sm:h-60 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-b-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Ver Projeto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto py-12 md:py-16 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-white">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              title: "Landing Pages",
              description: "Páginas otimizadas para conversão e resultados para seu negócio",
              icon: <Store className="h-8 w-8 text-indigo-600 dark:text-indigo-500" />,
            },
            {
              title: "Design Responsivo",
              description: "Interfaces adaptadas para todos os dispositivos",
              icon: <Zap className="h-8 w-8 text-indigo-600 dark:text-indigo-500" />,
            },
            {
              title: "Alta Performance",
              description: "Otimização de velocidade e experiência do usuário",
              icon: <BarChart className="h-8 w-8 text-indigo-600 dark:text-indigo-500" />,
            },
            {
              title: "Suporte Contínuo",
              description: "Acompanhamento e otimização constante",
              icon: <Headphones className="h-8 w-8 text-indigo-600 dark:text-indigo-500" />,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-900 transition-all duration-300"
            >
              <div className="mb-4 transform transition-transform group-hover:scale-110">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-16 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Carlos Roberto",
              company: "CEO, TechSmart",
              testimonial: "A DevPage transformou completamente nosso website online. Resultados impressionantes!",
              image: carlosRobertoImage,
            },
            {
              name: "Amanda Silva",
              company: "Marketing Manager",
              testimonial: "Profissionais excepcionais e resultados além das expectativas.",
              image: amandaSilvaImage,
            },
            {
              name: "Ricardo Mendes",
              company: "Founder, DigitalPlus",
              testimonial: "Melhor investimento que fizemos para nosso negócio este ano.",
              image: ricardoMendesImage,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">"&ldquo;"{testimonial.testimonial}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-16 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Qual o prazo médio de entrega?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              O prazo médio é de 2 a 4 semanas dependendo da complexidade do projeto, mas geralmente entre 2 a 3
              semanas.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Como funciona o processo de desenvolvimento?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Iniciamos pelo escopo do projeto, seguido por design, desenvolvimento e testes.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Oferecem suporte após a entrega?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sim, oferecemos 3 meses de suporte gratuito após a entrega do projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-12 md:py-16 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-white">
          Vamos conversar sobre seu projeto?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <Input
                placeholder="Nome"
                className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors"
              />
              <Input
                placeholder="Email"
                type="email"
                className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors"
              />
              <Textarea
                placeholder="Mensagem"
                className="min-h-[150px] bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors"
              />
            </div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer">
              Enviar Mensagem
            </Button>
          </div>
          <div className="space-y-6">
            <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contato Direto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-500" />
                  <span className="text-gray-600 dark:text-gray-400">contato@devpage.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-500" />
                  <span className="text-gray-600 dark:text-gray-400">+55 (21) 99999-9999</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-900 dark:text-indigo-400 dark:hover:bg-indigo-950/50 transition-colors cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Conversar no WhatsApp
                </Button>
              </div>
            </div>
            <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500 transition-colors cursor-pointer"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500 transition-colors cursor-pointer"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500 transition-colors cursor-pointer"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-center mb-4 text-gray-900 dark:text-white">Newsletter</h3>
            <div className="flex">
              <Input placeholder="Seu email" className="rounded-r-none bg-white dark:bg-gray-800" />
              <Button className="rounded-l-none bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="inline-block mb-4">
                <span className="text-xl font-bold text-gray-900 dark:text-white">DevPage</span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Transformando ideias em experiências digitais memoráveis desde 2015.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500 cursor-pointer"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500 cursor-pointer"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500 cursor-pointer"
                  >
                    Serviços
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Serviços
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500 cursor-pointer"
                  >
                    Landing Pages
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500 cursor-pointer"
                  >
                    Design Responsivo
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500 cursor-pointer"
                  >
                    Suporte Técnico
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Newsletter
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Receba novidades e atualizações.</p>
              <div className="flex">
                <Input placeholder="Seu email" className="rounded-r-none bg-white dark:bg-gray-800" />
                <Button className="rounded-l-none bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2023 DevPage. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

