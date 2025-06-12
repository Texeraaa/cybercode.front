import { Helmet } from 'react-helmet-async';

export default function Course() {
  return (
    <div className="flex flex-col items-center py-12">
      <Helmet title="Curso" />
      <div className="w-full max-w-[700px] px-4">
        <section>
          <h2 className="text-2xl font-bold ml-3 mb-4">Ponteiros e Gerenciamento de Memória</h2>

          <div className="w-full aspect-video mb-6">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/mN2VLo-74BE?si=slVbX7sld7gRLlo8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-base text-justify mb-10">
            Bem-vindo ao curso Fundamentos de Ponteiros e Gerenciamento de Memória. Neste curso,
            você vai aprender os conceitos essenciais sobre ponteiros, como eles funcionam na
            memória e por que são tão importantes em linguagens como C e C++. Também exploraremos o
            gerenciamento de memória, incluindo alocação dinâmica, desalocação e técnicas para
            evitar vazamentos de memória e erros como segmentation fault. Ao final do curso, você
            terá uma base sólida para manipular memória de forma eficiente e segura, entendendo como
            seu código interage diretamente com o hardware e os recursos do sistema.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-2xl mb-4">Materiais para Download</h2>
          <ul className="list-disc ml-6">
            <li>
              <a
                href="#"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aula 01: PDF Slide
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
