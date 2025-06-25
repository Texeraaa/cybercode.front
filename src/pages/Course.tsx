import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useAulas } from '@/context/AulasContext';

export function useAulaAtual() {
  const { id } = useParams<{ id: string }>();
  const aulas = useAulas();
  return aulas.find((a) => a.id === String(id));
}

export default function Course() {
  const aula = useAulaAtual();
  const aulas = useAulas();

  if (!aula) return <div className="text-center mt-10">Aula não encontrada</div>;

  // Lógica para próximo conteúdo
  const currentIndex = aulas.findIndex((a) => a.id === aula.id);
  const nextAula = aulas[currentIndex + 1];

  return (
    <div className="flex flex-col items-center py-12">
      <Helmet title="Curso" />
      <div className="w-full max-w-[90vw] md:max-w-[60vw] px-4">
        <section>
          <h2 className="text-2xl font-bold ml-3 mb-4">{aula.titulo}</h2>

          {aula.link && (
            <div className="w-full aspect-video mb-6">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${aula.link}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <p className="text-base text-justify mb-10">{aula.descricao}</p>
        </section>

        <section>
          <h2 className="font-bold text-2xl mb-4">Materiais para Download</h2>
          <ul className="list-disc ml-6">
            {aula.download?.map((item) => (
              <li key={item.titulo}>
                <a
                  href={item.link}
                  className="text-red-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.titulo}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Botão Próximo Conteúdo */}
        {nextAula && (
          <div className="flex justify-end mt-8">
            <a
              href={`/curso/${nextAula.id}`}
              className="px-6 py-3 rounded-lg border border-white text-white bg-black hover:bg-white hover:text-black transition-colors duration-200 font-semibold shadow-sm"
              style={{ borderWidth: 1 }}
            >
              Próximo conteúdo: {nextAula.titulo}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
