export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-accent-purple opacity-80" />
              <div className="absolute inset-[2px] rounded-[7px] bg-bg flex items-center justify-center">
                <span className="text-xs font-bold text-gradient-accent">B</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-text-title">
              Brain<span className="text-text-body font-normal">Solutions</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs text-text-body">
            <a href="#solutions" className="hover:text-text-title transition">Soluciones</a>
            <a href="#process" className="hover:text-text-title transition">Cómo trabajamos</a>
            <a href="#cases" className="hover:text-text-title transition">Casos</a>
            <a href="#about" className="hover:text-text-title transition">Nosotros</a>
          </div>

          <div className="text-xs text-text-muted">
            © 2026 Brain Solutions. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
