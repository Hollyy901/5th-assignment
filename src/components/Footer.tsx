export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 py-12 px-8 bg-white mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-purple-600 text-white font-bold text-xs px-2 py-1 rounded">DS</span>
            <span className="font-bold text-lg text-gray-900">Dev Stack</span>
          </div>
          <p className="text-xs text-gray-400 max-w-sm leading-relaxed mb-4">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-xs font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900">GitHub</a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12 text-xs">
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3">Product</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}