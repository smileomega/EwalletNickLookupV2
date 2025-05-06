import { Card } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Tentang <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">eWalletNickLookup</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Misi kami adalah menyederhanakan pencarian informasi nickname akun e-wallet dengan cara yang aman dan cepat
        </p>
      </div>

      {/* Bagian Sejarah */}
      <Card className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 mb-10 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="bg-blue-500/20 text-blue-400 w-10 h-10 rounded-full flex items-center justify-center mr-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </span>
          Sejarah Kami
        </h2>
        <div className="space-y-4 text-gray-300">
          <p>
            eWalletNickLookup didirikan pada tahun 2023 sebagai respons terhadap kebutuhan pengguna e-wallet yang semakin meningkat di Indonesia. Sebagai pengguna e-wallet, kami sering kali mengalami kesulitan mengingat nickname akun di berbagai platform e-wallet yang kami gunakan.
          </p>
          <p>
            Berawal dari masalah sederhana ini, tim pengembang kami memutuskan untuk menciptakan solusi yang memungkinkan pengguna memeriksa nickname akun e-wallet mereka dengan cepat dan mudah. Kami memulai perjalanan dengan mendukung beberapa layanan e-wallet populer dan terus berkembang untuk memberikan pengalaman terbaik bagi pengguna.
          </p>
        </div>
      </Card>

      {/* Bagian Tim */}
      <Card className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 mb-10 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="bg-purple-500/20 text-purple-400 w-10 h-10 rounded-full flex items-center justify-center mr-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </span>
          Tim Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">AS</span>
            </div>
            <h3 className="text-white text-xl font-semibold mb-1">Arya Satria</h3>
            <p className="text-gray-400 mb-3">Founder & CEO</p>
            <p className="text-gray-300 text-sm">
              Arya memiliki visi untuk membuat teknologi e-wallet lebih mudah diakses oleh semua orang.  
            </p>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">DR</span>
            </div>
            <h3 className="text-white text-xl font-semibold mb-1">Dewi Ratih</h3>
            <p className="text-gray-400 mb-3">Lead Developer</p>
            <p className="text-gray-300 text-sm">
              Dewi adalah ahli di bidang pengembangan aplikasi web dan fokus pada keamanan data.
            </p>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">BP</span>
            </div>
            <h3 className="text-white text-xl font-semibold mb-1">Budi Pratama</h3>
            <p className="text-gray-400 mb-3">UX Designer</p>
            <p className="text-gray-300 text-sm">
              Budi memastikan bahwa pengalaman pengguna di eWalletNickLookup selalu intuitif dan menyenangkan.
            </p>
          </div>
        </div>
      </Card>

      {/* Bagian Visi & Misi */}
      <Card className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 mb-10 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="bg-green-500/20 text-green-400 w-10 h-10 rounded-full flex items-center justify-center mr-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </span>
          Visi & Misi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Visi</h3>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 h-full">
              <p className="text-gray-300">
                Menjadi platform terdepan yang menyediakan solusi cepat dan aman untuk pengecekan informasi akun e-wallet di Indonesia, membantu jutaan pengguna dalam mengakses dan memverifikasi akun mereka dengan mudah.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Misi</h3>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 h-full">
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Menyediakan akses cepat dan mudah ke informasi nickname akun e-wallet</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Menjamin keamanan dan privasi data pengguna</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Terus berinovasi untuk mendukung berbagai layanan e-wallet di Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Bagian Hubungi Kami */}
      <Card className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="bg-yellow-500/20 text-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </span>
          Hubungi Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-300">
              Punya pertanyaan, saran, atau ingin berkolaborasi dengan kami? Jangan ragu untuk menghubungi tim eWalletNickLookup melalui form di samping atau kontak kami langsung melalui:
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-300">support@ewalletnicklookup.id</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nama Lengkap
                </label>
                <input 
                  type="text" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan email Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Pesan
                </label>
                <textarea 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Tulis pesan Anda di sini"
                ></textarea>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-4 py-2 font-medium hover:from-blue-700 hover:to-purple-700 transition duration-300">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}