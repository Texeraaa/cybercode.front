import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Code, Zap, Users, Trophy, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Helmet title="Inicio" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <Header />

      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div className="absolute top-20 right-20 w-1 h-1 bg-green-300 rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse delay-500" />

            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
                🚀 Bem-vindo ao futuro da programação
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Aprenda a{' '}
              <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent animate-pulse">
                Programar
              </span>
              <br />
              no Mundo Digital
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Domine o C++ com nossos cursos interativos. Transforme sua curiosidade em código e
              construa o amanhã.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-105 group">
                Começar Agora
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                <div className="text-gray-400">Estudantes Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-400">Projetos Práticos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-400">Taxa de Sucesso</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Por que escolher a <span className="text-green-400">CyberCode</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nossa plataforma foi criada especialmente para jovens que querem entrar no mundo da
              tecnologia de forma divertida e eficaz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group p-6 rounded-xl bg-gray-900/50 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:scale-105">
              <div className="mb-4">
                <Zap className="h-12 w-12 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Aprendizado Rápido</h3>
              <p className="text-gray-400">
                Metodologia gamificada que torna o aprendizado de programação divertido e eficiente.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-6 rounded-xl bg-gray-900/50 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:scale-105">
              <div className="mb-4">
                <Code className="h-12 w-12 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Projetos Reais</h3>
              <p className="text-gray-400">
                Construa aplicações reais desde o primeiro dia. Aprenda fazendo, não apenas
                assistindo.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-6 rounded-xl bg-gray-900/50 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:scale-105">
              <div className="mb-4">
                <Users className="h-12 w-12 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Comunidade Ativa</h3>
              <p className="text-gray-400">
                Conecte-se com outros jovens programadores e mentores experientes da área.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-6 rounded-xl bg-gray-900/50 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:scale-105">
              <div className="mb-4">
                <Trophy className="h-12 w-12 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Certificação</h3>
              <p className="text-gray-400">
                Receba certificados reconhecidos no mercado e destaque-se nas suas aplicações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para começar sua <span className="text-green-400">jornada</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de jovens que já estão construindo o futuro. Comece hoje mesmo e
              veja onde a programação pode te levar.
            </p>
            <Button className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-105 group">
              Começar Agora
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/20 py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-6 w-6 text-green-400" />
              <span className="text-lg font-bold text-green-400">CyberCode</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 CyberCode. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
