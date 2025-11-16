import tailwind from "@/assets/tailwind.png"
import lista from "@/assets/lista.png";

export  const projetos = [
  {
    image: tailwind,
    nome: "Landing Page",
    descricao: "Um site desenvolvido em Tailwind para fins de estudos",
    repositorio: "https://github.com/mariaccarolina/Tailwind",
    link: "https://mariaccarolina.github.io/Tailwind/",
    techologias: ["HTML", "Tailwind"],
    Especificações: [],
  },
  {
    image: "/passoia.png",
    nome: "Passoia",
    descricao: "Um site desenvolvido em React",
    repositorio: "https://github.com/mariaccarolina/Passoia",
    link: "https://passoia-six.vercel.app/",
    techologias: ["React", "SCSS"],
    Especificações: ["Componentização", "Props", "useState"],
  },
  {
    image: "/humor.png",
    nome: "Humormômetro",
    descricao: "Um site desenvolvido em Vue.js",
    repositorio: "https://github.com/mariaccarolina/Humormometro",
    link: "https://humormometro-azure.vercel.app/",
    techologias: ["HTML", "SCSS", "JavaScript"],
    Especificações: ["DOM"],
  },
  {
    image: lista,
    nome: "Lista de Tarefas",
    descricao: "Um site desenvolvido em Vue.js",
    repositorio: "https://github.com/mariaccarolina/Lista-de-Tarefas-Vue",
    link: "https://lista-de-tarefas-vue-orcin.vercel.app/",
    techologias: ["Vue.js", "SCSS", "JavaScript"],
    Especificações: ["Componentização", "Props", "useState"],
  },

];