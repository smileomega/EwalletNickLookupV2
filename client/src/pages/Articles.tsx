import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Articles() {
  // Data artikel (hardcoded untuk contoh)
  const articles = [
    {
      id: 1,
      title: "Perkembangan E-Wallet di Indonesia: Tren dan Masa Depan",
      excerpt: "Melihat bagaimana e-wallet telah mengubah lanskap pembayaran digital di Indonesia dan kemana arah perkembangannya di masa depan.",
      date: "10 Mei 2025",
      author: "Dewi Ratih",
      readTime: "5 menit",
      imageUrl: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Keamanan E-Wallet: Tips Menjaga Akun Anda Tetap Aman",
      excerpt: "Kenali berbagai cara untuk melindungi akun e-wallet Anda dari upaya pencurian dan penipuan yang semakin canggih.",
      date: "5 Mei 2025",
      author: "Budi Pratama",
      category: "Keamanan",
      readTime: "7 menit",
      imageUrl: "bg-gradient-to-br from-green-500 to-blue-600",
    },
    {
      id: 3,
      title: "Membandingkan 5 E-Wallet Terpopuler di Indonesia",
      excerpt: "Analisis mendalam tentang fitur, keunggulan, dan kelemahan dari lima layanan e-wallet yang paling banyak digunakan di Indonesia.",
      date: "1 Mei 2025",
      author: "Arya Satria",
      readTime: "10 menit",
      imageUrl: "bg-gradient-to-br from-purple-500 to-pink-600",
    },
    {
      id: 4,
      title: "Integrasi E-Wallet dengan Kehidupan Sehari-hari",
      excerpt: "Bagaimana e-wallet telah menjadi bagian tak terpisahkan dari kegiatan sehari-hari masyarakat modern di Indonesia.",
      date: "28 April 2025",
      author: "Siti Nurhaliza",
      readTime: "6 menit",
      imageUrl: "bg-gradient-to-br from-yellow-500 to-red-600",
    },
    {
      id: 5,
      title: "Regulasi dan Hukum Seputar E-Wallet di Indonesia",
      excerpt: "Memahami kerangka hukum dan regulasi yang mengatur operasional layanan e-wallet di Indonesia.",
      date: "25 April 2025",
      author: "Hadi Purnomo",
      readTime: "8 menit",
      imageUrl: "bg-gradient-to-br from-teal-500 to-blue-600",
    },
    {
      id: 6,
      title: "Prospek Karir di Industri E-Wallet dan Fintech",
      excerpt: "Menjelajahi berbagai peluang karir yang tersedia di industri e-wallet dan fintech yang terus berkembang.",
      date: "20 April 2025",
      author: "Maya Indira",
      readTime: "7 menit",
      imageUrl: "bg-gradient-to-br from-indigo-500 to-purple-600",
    }
  ];

  return (
    <div className="container max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Artikel <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">E-Wallet</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Temukan informasi terbaru, tips, dan tren seputar dunia e-wallet
        </p>
      </div>

      {/* Daftar Artikel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {articles.map((article) => (
          <Card key={article.id} className="bg-gray-900/80 border border-gray-800 overflow-hidden h-full flex flex-col hover:shadow-lg hover:border-gray-700 transition-all duration-300">
            <div className={`${article.imageUrl} h-48 flex items-center justify-center p-6`}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center text-xs text-gray-400 mb-2">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
                {article.category && (
                  <>
                    <span className="mx-2">•</span>
                    <span className="text-blue-400">{article.category}</span>
                  </>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
              <p className="text-gray-400 mb-4 flex-1">{article.excerpt}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold mr-2">
                    {article.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <span className="text-sm text-gray-300">{article.author}</span>
                </div>
                <Link href={`/articles/${article.id}`}>
                  <Button variant="outline" size="sm" className="ml-auto text-purple-400 border-purple-400/30 hover:bg-purple-400/10">
                    Baca
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 border border-blue-700/30 shadow-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Dapatkan Artikel Terbaru</h3>
          <p className="text-gray-300 mb-6">Berlangganan newsletter kami untuk mendapatkan update artikel terbaru seputar e-wallet</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
            />
            <button className="bg-white text-gray-900 font-medium px-6 py-2 rounded-r-lg hover:bg-gray-100 transition-colors">
              Berlangganan
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">Kami tidak akan pernah mengirimkan spam. Lihat <a href="#" className="underline">kebijakan privasi</a> kami.</p>
        </div>
      </div>
    </div>
  );
}