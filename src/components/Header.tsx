export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-3">
        <div className="flex items-center justify-between rounded-full bg-black/30 backdrop-blur-md border border-white/15 px-5 py-2">
          <div className="flex items-center gap-3">
            <span className="text-white text-lg font-semibold font-serif">SMAJOVIC Demirel</span>
            <span className="hidden sm:inline text-white/70">—</span>
            <span className="hidden sm:inline text-white/85 font-sans">Développeur Python</span>
          </div>
          <nav className="flex items-center gap-4 text-sm font-sans">
            <a href="mailto:votre.email@example.com" className="text-white/90 hover:text-white underline underline-offset-4">demirel.sjc@gmail.com</a>
            <a href="https://www.linkedin.com/in/demirel-smajovic-537b8713a/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white underline underline-offset-4">LinkedIn</a>
            <a href="https://github.com/AIS3N/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white underline underline-offset-4">GitHub</a>
          </nav>
        </div>
      </div>
    </header>
  );
}