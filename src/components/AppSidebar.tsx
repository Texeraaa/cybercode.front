import { useState } from 'react';
import { textLimiter } from '@/helper/textLimiter';
import { Link, useLocation } from 'react-router-dom';
import MenuToggleButton from './MenuToggleButton';
import { useAulas } from '@/context/AulasContext';
import { HiOutlineHome } from 'react-icons/hi';

export function AppSidebar() {
  const [open, setOpen] = useState(false);
  const aulas = useAulas();
  const location = useLocation();

  // Função para checar se a rota está ativa
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          fixed md:static top-0 left-0 z-40
          h-screen w-72 bg-[#000000] text-white flex flex-col pl-6 pr-2 py-8
          transition-transform duration-300 ease-in-out
        `}
      >
        <MenuToggleButton open={open} toggle={() => setOpen(!open)} />

        {/* Topo: Visão Geral */}
        <div className="flex flex-col gap-1">
          <Link
            className={`hover:bg-[#292929] p-3 rounded-xl relative flex items-center ${isActive('/curso') ? 'font-bold text-red-400' : ''}`}
            to="/curso"
          >
            {isActive('/curso') && (
              <span className="absolute left-0 top-2 bottom-2 w-1 bg-red-400 rounded-r-lg" />
            )}
            <HiOutlineHome className="ml-2 mr-2 w-5 h-5" />
            <span className="">Visão Geral</span>
          </Link>
        </div>

        {/* Espaço flexível para empurrar as aulas para baixo em telas grandes */}
        <div className="flex-1" />

        {/* Base: Aulas */}
        <div className="flex flex-col gap-2 mt-6 mb-2">
          {aulas.map((aula) => {
            const path = `/curso/${aula.id}`;
            const active = isActive(path);
            return (
              <Link
                className={`hover:bg-[#292929] p-3 rounded-xl relative flex items-center ${active ? 'font-bold text-red-400' : ''}`}
                key={aula.id}
                to={path}
              >
                {active && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-red-400 rounded-r-lg" />
                )}
                <span className="ml-2 text-sm">
                  {aula.titulo.length > 35 ? textLimiter(aula.titulo, 35) : aula.titulo}
                </span>
              </Link>
            );
          })}
        </div>
      </aside>

      {!open && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-[#292929] text-white p-2 rounded-md"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      )}
    </>
  );
}
