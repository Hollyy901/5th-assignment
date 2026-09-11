export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Build Your Ideal <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-md">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex items-center gap-4 pt-2">
          <button className="px-6 py-3 rounded-md brand-gradient text-white font-medium hover:opacity-90 transition">
            Explore Technologies
          </button>
          <button className="px-6 py-3 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img 
          src="/banner-stack.png" 
          alt="Development Stack Preview" 
          className="max-w-md w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}