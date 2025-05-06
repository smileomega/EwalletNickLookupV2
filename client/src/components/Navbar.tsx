import { Link } from "wouter";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center">
                <span className="text-white text-2xl font-bold">E-Wallet Checker</span>
              </a>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/">
                <a className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Home
                </a>
              </Link>
              <Link href="/api-docs">
                <a className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  API Documentation
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
