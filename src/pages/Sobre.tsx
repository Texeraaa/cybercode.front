import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';

// Lista de integrantes (exemplo)
const integrantes = [
  {
    nome: 'Pedro Teixeira',
    idade: 20,
    foto: '/src/assets/integrantes/pedro.png',
    linkedin: 'https://www.linkedin.com/in/pedrohteixeira17/',
    github: 'https://github.com/texeraaa',
  },
  {
    nome: 'Heloisa dos Anjos',
    idade: 20,
    foto: '/src/assets/integrantes/helo.png',
    linkedin:
      'https://www.linkedin.com/in/helo%C3%ADsa-gomes-dos-anjos-21270a218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    nome: 'Lais Rafaela',
    idade: 20,
    foto: '/src/assets/integrantes/lais.png',
    linkedin: 'https://www.linkedin.com/in/lais-rafaela-silva/',
    github: 'https://github.com/Lais-RDS',
  },
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Helmet title="Sobre" />
      <Header />
      <section className="relative py-14 md:py-20">
        <div className="container px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#DC143C] to-[#FF1744] bg-clip-text text-transparent text-left">
            Sobre o CyberCode
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 text-left">
            O CyberCode é uma plataforma inovadora dedicada ao ensino de programação e tecnologia,
            criada para impulsionar o aprendizado de forma prática, moderna e acessível. Nosso
            objetivo é transformar a maneira como você aprende a programar, oferecendo cursos,
            recursos e uma comunidade engajada para apoiar sua jornada no mundo digital.
          </p>
        </div>
      </section>

      {/* Seção Integrantes */}
      <section className="relative py-10 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-8 text-white">Integrantes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {integrantes.map((int) => (
              <div
                key={int.nome}
                className="flex flex-col items-center bg-[#18181c] rounded-xl p-8 shadow-md "
              >
                <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-[#222] mb-6 flex items-center justify-center bg-[#222]">
                  <img
                    src={int.foto}
                    alt={`Foto de ${int.nome}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{int.nome}</h3>
                <span className="text-[#DC143C] text-sm mb-4">{int.idade} anos</span>
                <div className="flex gap-3 w-full mt-auto">
                  {int.github && (
                    <a
                      href={int.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#18181c] text-white rounded-md py-2 text-center font-medium hover:bg-[#DC143C] transition-colors border border-[#292929]"
                    >
                      GitHub
                    </a>
                  )}
                  {int.linkedin && (
                    <a
                      href={int.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#18181c] text-white rounded-md py-2 text-center font-medium hover:bg-[#DC143C] transition-colors border border-[#292929]"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
