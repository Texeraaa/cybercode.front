import { Helmet } from 'react-helmet-async';

export default function VisaoGeral() {
  return (
    <div className="flex flex-col items-center py-12">
      <Helmet title="Visão Geral" />
      <div className="w-full max-w-[700px] px-4">
        <h2 className="text-2xl font-bold ml-3 mb-4">Visão Geral do Curso</h2>
        <p className="text-base text-justify mb-10">
          Bem-vindo ao curso! Aqui você encontrará uma visão geral do conteúdo, objetivos e
          estrutura das aulas. Utilize o menu lateral para navegar entre as aulas e acessar
          materiais complementares.
        </p>
      </div>
    </div>
  );
}
