import Logo from "./Logo";

export default function Header() {
    return (
        <div className="bg-base text-zinc-50 flex items-center justify-between px-72"> 
           
          <Logo />
        <div className="flex gap-6">
        <div>Início</div>
          <div>Eventos</div>
          <div>Início</div>
          <div>Início</div>
        </div>
            
        </div>
    )
}