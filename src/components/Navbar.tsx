export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Felix.dev</h1>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
