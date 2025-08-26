export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Felix.dev</h1>
        <ul className="flex">
          <li>
            <a href="#about" className="px-7 py-2 hover:text-blue-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="px-7 py-2 hover:text-blue-600 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="px-7 py-2 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
