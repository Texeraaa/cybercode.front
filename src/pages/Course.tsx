import { SidebarProvider } from '@/components/ui/sidebar';
import { Helmet } from 'react-helmet-async';

export default function Course() {
  return (
    <SidebarProvider>
      <Helmet title="Curso" />
      <div className="flex flex-col items-center py-12">
        <div>
          <h1 className="text-2xl font-bold ml-4 mb-2 ">Ponteiros e Gerenciamento de Memória</h1>
          <iframe
            className="w-[60vw] h-[30vw]"
            src="https://www.youtube.com/embed/mN2VLo-74BE?si=slVbX7sld7gRLlo8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <h1 className="w-[60vw] text-lg  mt-4 mb-2">
            Bem-vindo ao curso Fundamentos de Ponteiros e Gerenciamento de Memória. Neste curso,
            você vai aprender os conceitos essenciais sobre ponteiros, como eles funcionam na
            memória e por que são tão importantes em linguagens como C e C++. Também exploraremos o
            gerenciamento de memória, incluindo alocação dinâmica, desalocação e técnicas para
            evitar vazamentos de memória e erros como segmentation fault. Ao final do curso, você
            terá uma base sólida para manipular memória de forma eficiente e segura, entendendo como
            seu código interage diretamente com o hardware e os recursos do sistema.
          </h1>

          <h1 className="font-bold text-2xl mt-10">Materiais para Download</h1>

          <div className="mt-10">
            <h1 className="cursor-pointer">Aula 01: PDF Slide</h1>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
