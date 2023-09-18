import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between bg-base px-72 text-zinc-200  ">
      <Logo />
      <div className="group flex gap-8">
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
