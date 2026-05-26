export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full p-5">

      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-md">

        <h1 className="text-lg font-bold">
          DIVYANSH
        </h1>

        <div className="flex gap-8 text-sm text-gray-300">

          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}