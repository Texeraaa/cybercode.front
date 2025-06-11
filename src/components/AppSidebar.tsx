// src/components/Sidebar.tsx
import { textLimiter } from '@/helper/textLimiter';
import { Link } from 'react-router';

export function AppSidebar() {
  const temas = [
    '1. Ponteiros e Gerenciamento de Memória',
    '2. Programação Orientada a Objetos (POO)',
    '3. Templates e Programação Genérica',
    '4. STL (Standard Template Library)',
    '5. Manipulação de Arquivos e Streams',
    '6. Templates e Programação Genérica',
  ];

  return (
    <aside className="h-screen w-96 bg-[#121712] text-white flex flex-col justify-between pl-8 pr-2 py-8">
      <div className="flex flex-col gap-1">
        <Link className="hover:bg-[#293829] p-3 rounded-xl" to="/">
          Visão Geral
        </Link>
        <Link className="hover:bg-[#293829] p-3 rounded-xl" to="/">
          Q&A
        </Link>
        <Link className="hover:bg-[#293829] p-3 rounded-xl" to="/">
          Notas
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {temas.map((tema) => (
          <Link className="hover:bg-[#293829] p-3 rounded-xl" key={tema} to="/">
            {textLimiter(tema, 35)}
          </Link>
        ))}
      </div>
    </aside>
  );
}
