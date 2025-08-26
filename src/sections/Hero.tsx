export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-extrabold">Hi, I’m Felix 👋</h1>
      <p className="mt-4 text-xl text-gray-600">
        Full Stack Developer | UX/UI Designer | WordPress Funnel Architect
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        View My Work
      </a>
    </section>
  );
}
