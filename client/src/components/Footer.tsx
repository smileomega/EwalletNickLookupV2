import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-auto py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Kolom 1: Tentang */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">eWalletNickLookup</h3>
            <p className="text-gray-400 mb-4">
              Platform untuk memeriksa nickname akun e-wallet Anda dengan cepat, aman, dan mudah. Didukung teknologi terkini untuk memberikan pengalaman terbaik.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-white transition-colors">Artikel</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/api-docs" className="hover:text-white transition-colors">Dokumentasi API</Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">Cek Nickname E-Wallet</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">API Integration</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Kemitraan Bisnis</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Layanan Korporat</a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontak Kami</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500" />
                <span>Jl. Teknologi No.123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500" />
                <span>info@ewalletnicklookup.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} eWalletNickLookup. Semua hak dilindungi undang-undang.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
