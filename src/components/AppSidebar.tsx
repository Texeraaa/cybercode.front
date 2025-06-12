import { useState } from 'react';
import { textLimiter } from '@/helper/textLimiter';
import { Link } from 'react-router';
import MenuToggleButton from './MenuToggleButton';

export function AppSidebar() {
  const [open, setOpen] = useState(false);

  const temas = [
    '1. Ponteiros e Gerenciamento de Memória',
    '2. Programação Orientada a Objetos (POO)',
    '3. Templates e Programação Genérica',
    '4. STL (Standard Template Library)',
    '5. Manipulação de Arquivos e Streams',
    '6. Templates e Programação Genérica',
  ];

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

        <div className="flex flex-col gap-1">
          <Link className="hover:bg-[#292929] p-3 rounded-xl" to="/">
            Visão Geral
          </Link>
          <Link className="hover:bg-[#292929] p-3 rounded-xl" to="/">
            Q&A
          </Link>
          <Link className="hover:bg-[#292929] p-3 rounded-xl" to="/">
            Notas
          </Link>
        </div>

        <div className="flex flex-col gap-2 mt-6">
          {temas.map((tema) => (
            <Link className="hover:bg-[#292929] p-3 rounded-xl" key={tema} to="/">
              {textLimiter(tema, 35)}
            </Link>
          ))}
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
