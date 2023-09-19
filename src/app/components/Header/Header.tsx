import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex  w-full items-center justify-between bg-base md:px-72 text-zinc-200  h-28 ">
      <Logo className="md:flex hidden"/>
      <div className="group flex gap-8 md:flex sm:flex lg:w-80 sm:items-center sm:w-full md:w-full sm:justify-center md:justify-center ">
        <a href="" className="cursor-pointer transition  hover:text-white">
          Início
        </a>
        <a href="" className="cursor-pointer transition  hover:text-white">
          Galeria
        </a>
        <a href="" className="cursor-pointer transition  hover:text-white">
          Artísticos
        </a>
        <a href="" className="cursor-pointer transition hover:text-white">
          Eventos
        </a>
        <a href="" className="cursor-pointer transition  hover:text-white">
          Sobre
        </a>
        <a href="" className="cursor-pointer transition hover:text-white">
          Blog
        </a>
      </div>
    </div>
  );
}
