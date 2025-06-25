import { Helmet } from 'react-helmet-async';
import { useAulas } from '@/context/AulasContext';
import type { Aula } from '@/context/AulasContext';
import { useNavigate } from 'react-router-dom';
import { textLimiter } from '@/helper/textLimiter';
import { HiPlay } from 'react-icons/hi2';

function getYoutubeThumb(link: string) {
  return link ? `https://img.youtube.com/vi/${link}/hqdefault.jpg` : '/placeholder.jpg';
}

// Helper para status e duração (pode ser adaptado para vir do contexto)
function getStatus(aula: Aula): 'available' | 'soon' {
  if (!aula.link) return 'soon';
  return 'available';
}

function getDuracao(aula: Aula): string {
  if (aula.duracao) return aula.duracao;
  return '--:--';
}

const STATUS_LABELS = {
  available: 'Disponível',
  soon: 'Em breve',
};

export default function VisaoGeral() {
  const aulas = useAulas();
  const navigate = useNavigate();

  // Separar disponíveis e futuras
  const disponiveis = aulas.filter((a: Aula) => getStatus(a) === 'available');
  const futuras = aulas.filter((a: Aula) => getStatus(a) !== 'available');

  return (
    <div className="flex flex-col items-center py-12">
      <Helmet title="Visão Geral" />
      <div className="w-full max-w-[900px] px-4">
        <h2 className="text-2xl font-bold ml-3 mb-2">Visão Geral do Curso</h2>
        <p className="text-base text-justify mb-8 text-white/80">
          Curso prático e direto ao ponto! Aqui você aprende estruturas de dados e lógica de
          programação aplicando tudo em um projeto real de jogo. Confira abaixo as aulas:
        </p>

        {/* Disponíveis */}
        {disponiveis.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-white">Aulas Disponíveis</h3>
            <div className="flex flex-col gap-5">
              {disponiveis.map((aula: Aula) => (
                <div
                  key={aula.id}
                  className="group flex w-full bg-[#181818] rounded-xl shadow-md overflow-hidden border border-[#222] hover:shadow-lg transition-shadow cursor-pointer hover:border-red-400"
                  style={{ minHeight: 140 }}
                  onClick={() => navigate(`/curso/${aula.id}`)}
                >
                  {/* Thumbnail */}
                  <div className="relative w-1/5 min-w-[120px] max-w-[180px] flex items-center justify-center bg-black">
                    <img
                      src={getYoutubeThumb(aula.link)}
                      alt={aula.titulo}
                      className="object-cover w-full h-full min-h-[100px]"
                    />
                    <button
                      className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                      tabIndex={-1}
                      aria-label="Assistir aula"
                    >
                      <HiPlay className="text-white w-10 h-10 drop-shadow-lg" />
                    </button>
                  </div>
                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between p-5 gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{aula.titulo}</h4>
                      <p className="text-white/80 text-sm mb-2">
                        {textLimiter(aula.descricao, 120)}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      <span className="text-xs text-white/60 bg-[#222] px-2 py-1 rounded">
                        {getDuracao(aula)}
                      </span>
                      <span className="text-xs font-semibold text-red-400">
                        {STATUS_LABELS[getStatus(aula)]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Futuras */}
        {futuras.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-white/60">Aulas Futuras</h3>
            <div className="flex flex-col gap-5">
              {futuras.map((aula: Aula) => (
                <div
                  key={aula.id}
                  className="flex w-full bg-[#181818] rounded-xl shadow-md overflow-hidden border border-[#222] opacity-70 cursor-not-allowed"
                  style={{ minHeight: 140 }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-1/5 min-w-[120px] max-w-[180px] flex items-center justify-center bg-black">
                    <img
                      src={getYoutubeThumb(aula.link)}
                      alt={aula.titulo}
                      className="object-cover w-full h-full min-h-[100px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <HiPlay className="text-white w-10 h-10 opacity-60" />
                    </div>
                  </div>
                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between p-5 gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{aula.titulo}</h4>
                      <p className="text-white/80 text-sm mb-2">
                        {textLimiter(aula.descricao, 120)}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      <span className="text-xs text-white/60 bg-[#222] px-2 py-1 rounded">
                        {getDuracao(aula)}
                      </span>
                      <span className="text-xs font-semibold text-red-400">
                        {STATUS_LABELS[getStatus(aula)]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
