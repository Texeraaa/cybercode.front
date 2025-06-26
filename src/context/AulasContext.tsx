import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

export type Aula = {
  id: string;
  titulo: string;
  link: string;
  descricao: string;
  download?: { titulo: string; link: string }[];
  duracao?: string;
};

const aulas: Aula[] = [
  {
    id: 'c9d124cb-2b49-4002-8692-bbeff9af6782',
    titulo: '1. Instalando Visual Studio Code',
    link: '0r8G0l-lel4',
    descricao:
      'Nesta aula, vamos instalar o Visual Studio Code, uma das ferramentas mais populares para desenvolvimento de software.',
    download: [{ titulo: 'Visual Studio Code', link: 'https://code.visualstudio.com/download' }],
    duracao: '01:40',
  },
  {
    id: '175b0759-c8d4-4b58-8adf-51ecbbec9f79',
    titulo: '2. Baixando e instalando minGW',
    link: 'K1aDCiUVWzg',
    descricao: 'Nesta aula, vamos instalar o minGW, o compilador C++ para Windows.',
    download: [
      {
        titulo: 'minGW',
        link: 'https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win32/Personal%20Builds/mingw-builds/8.1.0/threads-posix/dwarf/mingw32-8.1.0-release-posix-dwarf-rt_v6-rev0.7z/download',
      },
    ],
    duracao: '03:07',
  },
  {
    id: '63dde7bd-424c-4adb-9879-01292cbda756',
    titulo: '3. Configurando Extensões para o MinGw no Vscode',
    link: 'aVwVdPrYG5U',
    descricao: 'Nesta aula, vamos configurar as extensões para o minGW no Vscode.',
    download: [
      {
        titulo: 'C++ Extension Pack',
        link: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack',
      },
      {
        titulo: 'C/C++',
        link: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools',
      },
      {
        titulo: 'Code Runner',
        link: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner',
      },
    ],
    duracao: '01:27',
  },
  {
    id: 'e7e5d6c9-bd34-4281-a2ad-50eee26de547',
    titulo: '4. Revisando variáveis e tipos de dados',
    link: '7SkEXuFsxsk',
    descricao: 'Nesta aula, vamos revisar os tipos de dados e variáveis em C++.',
    download: [
      {
        titulo: 'Sem Download por aqui :(',
        link: '',
      },
    ],
    duracao: '01:27',
  },
  {
    id: 'b9b9fe89-27c5-4b07-82d7-4c88dc33475a',
    titulo: '5. Criando monstros e hordas com structs e arrays',
    link: 'QVMMY-5lZH4',
    descricao:
      'Nesta aula, vamos construir juntos as primeiras estruturas do nosso projeto em C++: os monstros e as hordas. Você vai aprender a usar struct para agrupar dados relacionados e arrays para armazenar múltiplos elementos. Tudo de forma prática e aplicada ao jogo que estamos desenvolvendo. Ao final da aula, você saberá como criar, preencher e percorrer arrays de structs no terminal.',
    download: [
      {
        titulo: 'Código da aula',
        link: 'https://github.com/Texeraaa/sistema-horda/archive/refs/heads/aula01.zip',
      },
    ],
    duracao: '12:07',
  },
  {
    id: 'ec3af9b0-5b43-49a2-ba99-65da7e0ac86a',
    titulo: '6. Hordas se enfrentando – lógica de comparação',
    link: '',
    descricao:
      'Nesta aula, vamos implementar a lógica de batalha entre duas hordas. Monstros se enfrentam um a um, e a horda com mais vitórias individuais vence o confronto. É uma aplicação prática de loops, condições e manipulação de arrays em C++.',
  },
  {
    id: '66b102fd-5212-4d75-ac13-3f7b6c15d57f',
    titulo: '7. Monstros em fila de ataque com Pilha',
    link: '',
    descricao:
      'Nesta aula, você vai aprender o conceito de pilha (estrutura LIFO) implementando uma pilha de monstros. Vamos programar as funções básicas de empilhar, desempilhar e visualizar o topo, tudo aplicado ao contexto do nosso jogo.',
  },
];

const AulasContext = createContext<Aula[]>(aulas);

export const useAulas = () => useContext(AulasContext);

export function AulasProvider({ children }: { children: ReactNode }) {
  return <AulasContext.Provider value={aulas}>{children}</AulasContext.Provider>;
}
