import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import CheckerForm from "@/components/CheckerForm";
import ResultCard from "@/components/ResultCard";
import { useQuery } from "@tanstack/react-query";
import { EWalletService } from "@shared/schema";
import { AlertCircle } from "lucide-react";

type CheckResult = {
  phone: string;
  service: string;
  serviceName: string;
  nickname: string;
  accountStatus: string;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Fungsi untuk menangani klik pada item FAQ
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Fetch services
  const { data: services } = useQuery<{ success: boolean; data: EWalletService[] }>({    queryKey: ["/api/services"],
  });

  const handleCheck = async (phone: string, service: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`/api/cek-nickname?phone=${phone}&service=${service}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Failed to check nickname");
      }

      if (data.success && data.data) {
        setResult(data.data);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="container max-w-5xl mx-auto px-4 py-8 flex-grow">
        {/* Hero Section */}
        <header className="mb-16 py-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
                Selamat Datang di <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">eWalletNickLookup</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8">
                Cek nickname akun e-wallet dengan mudah, cepat, dan gratis!
              </p>
              <button 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 active:translate-y-0"
                onClick={() => document.getElementById('checker-form')?.scrollIntoView({behavior: 'smooth'})}
              >
                Cari Sekarang
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-72 h-72 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-2xl"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-40 h-40 text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 10H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 16H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 16H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Tentang <span className="text-blue-400">eWalletNickLookup</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <p className="text-gray-300 leading-relaxed">
                  eWalletNickLookup memungkinkan pengguna untuk dengan mudah mencari dan menemukan nickname dari akun e-wallet mereka hanya dengan memasukkan nomor akun. Ini adalah alat yang sederhana namun sangat berguna bagi pengguna yang ingin mengetahui informasi akun mereka.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Didesain untuk pengguna e-wallet yang ingin mengonfirmasi nickname mereka dengan cepat dan tanpa kesulitan. Tidak perlu registrasi, cukup masukkan nomor akun dan temukan nickname Anda dalam hitungan detik.
                </p>
              </div>
              <div className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 shadow-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Bagaimana Cara Kerjanya?
                </h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 mr-3 font-bold">1</span>
                    <span>Pilih layanan e-wallet yang ingin Anda cek (GoPay, ShopeePay, DANA, dll)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 mr-3 font-bold">2</span>
                    <span>Masukkan nomor telepon yang terhubung dengan akun e-wallet Anda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 mr-3 font-bold">3</span>
                    <span>Klik tombol "Check Nickname" untuk melihat hasilnya</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 mr-3 font-bold">4</span>
                    <span>Lihat nickname dan status akun Anda seketika!</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fade-in" style={{animationDelay: '0.5s'}}>
            Fitur <span className="text-purple-400">Unggulan</span> Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 transition duration-300 hover:bg-gray-800/80 hover:shadow-xl hover:border-gray-700 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cepat dan Akurat</h3>
              <p className="text-gray-400">Proses pencarian nickname hanya memakan beberapa detik dengan hasil yang akurat!</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 transition duration-300 hover:bg-gray-800/80 hover:shadow-xl hover:border-gray-700 animate-fade-in" style={{animationDelay: '0.7s'}}>
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Aman dan Terpercaya</h3>
              <p className="text-gray-400">Data Anda tidak akan disimpan. Kami menjaga kerahasiaan informasi pribadi Anda!</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 transition duration-300 hover:bg-gray-800/80 hover:shadow-xl hover:border-gray-700 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multi Platform</h3>
              <p className="text-gray-400">Mendukung berbagai platform e-wallet populer seperti OVO, DANA, ShopeePay, GoPay, dan lainnya.</p>
            </div>
          </div>
        </section>

        <main>
          <Card className="mb-8 bg-gray-900 border-gray-800 shadow-xl" id="checker-form">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Cek Nickname E-Wallet</h2>
              
              <CheckerForm 
                onSubmit={handleCheck} 
                isLoading={isLoading} 
                services={services?.data || []} 
              />
              
              {isLoading && (
                <div className="py-8 flex justify-center items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <span className="ml-2 text-gray-400">Checking...</span>
                </div>
              )}
              
              {error && (
                <div className="mt-4 bg-gray-800/50 border-l-4 border-red-500 p-4 rounded-r">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-400">{error}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {result && <ResultCard result={result} />}
            </CardContent>
          </Card>
          
          {/* Testimoni Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Apa Kata <span className="text-yellow-400">Pengguna</span> Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Testimoni 1 */}
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                    RS
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Rina Susanti</h4>
                    <p className="text-gray-400 text-sm">Pengguna ShopeePay</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Sangat membantu! Saya bisa tahu nickname akun e-wallet saya hanya dalam hitungan detik. Terima kasih, ewalletnicklookup!"
                </p>
                <div className="flex mt-3 text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
              </div>
              {/* Testimoni 2 */}
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                    AP
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Arief Pratama</h4>
                    <p className="text-gray-400 text-sm">Pengguna GoPay</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Website ini sangat berguna untuk mengecek nickname akun e-wallet. Interfacenya sederhana dan langsung ke titik permasalahan. Saya rekomendasikan!"
                </p>
                <div className="flex mt-3 text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Pertanyaan <span className="text-green-400">Umum</span>
            </h2>

            <div className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden">
              {/* FAQ Item 1 */}
              <div className="border-b border-gray-800">
                <button 
                  className="flex justify-between items-center w-full p-5 text-left focus:outline-none" 
                  onClick={() => toggleFaq(0)}
                >
                  <h3 className="text-lg font-medium text-white">Apakah layanan ini benar-benar gratis?</h3>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFaq === 0 ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`px-5 pb-5 transition-all duration-300 overflow-hidden ${activeFaq === 0 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400">Ya, layanan kami sepenuhnya gratis untuk digunakan tanpa biaya tersembunyi.</p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="border-b border-gray-800">
                <button 
                  className="flex justify-between items-center w-full p-5 text-left focus:outline-none" 
                  onClick={() => toggleFaq(1)}
                >
                  <h3 className="text-lg font-medium text-white">Apakah data saya aman?</h3>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFaq === 1 ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`px-5 pb-5 transition-all duration-300 overflow-hidden ${activeFaq === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400">Kami tidak menyimpan data Anda. Semua pencarian dilakukan di server kami tanpa mencatat informasi pribadi.</p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b border-gray-800">
                <button 
                  className="flex justify-between items-center w-full p-5 text-left focus:outline-none" 
                  onClick={() => toggleFaq(2)}
                >
                  <h3 className="text-lg font-medium text-white">Platform e-wallet apa saja yang didukung?</h3>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFaq === 2 ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`px-5 pb-5 transition-all duration-300 overflow-hidden ${activeFaq === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400">Saat ini kami mendukung OVO, DANA, ShopeePay, GoPay, dan beberapa e-wallet lainnya.</p>
                </div>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="border-b border-gray-800">
                <button 
                  className="flex justify-between items-center w-full p-5 text-left focus:outline-none" 
                  onClick={() => toggleFaq(3)}
                >
                  <h3 className="text-lg font-medium text-white">Berapa lama waktu yang dibutuhkan untuk mencari nickname?</h3>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFaq === 3 ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`px-5 pb-5 transition-all duration-300 overflow-hidden ${activeFaq === 3 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400">Pencarian nickname biasanya membutuhkan waktu kurang dari 3 detik tergantung pada kecepatan koneksi internet Anda dan beban server kami.</p>
                </div>
              </div>
              
              {/* FAQ Item 5 */}
              <div className="border-b border-gray-800">
                <button 
                  className="flex justify-between items-center w-full p-5 text-left focus:outline-none" 
                  onClick={() => toggleFaq(4)}
                >
                  <h3 className="text-lg font-medium text-white">Bagaimana jika saya lupa nomor telepon saya?</h3>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFaq === 4 ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`px-5 pb-5 transition-all duration-300 overflow-hidden ${activeFaq === 4 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400">Layanan kami hanya dapat mencari nickname berdasarkan nomor telepon yang terdaftar. Jika Anda lupa nomor telepon, silakan hubungi layanan pelanggan e-wallet terkait untuk bantuan lebih lanjut.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mb-16 text-center">
            <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 rounded-2xl p-10 shadow-xl border border-purple-800/60">
              <h2 className="text-3xl font-bold text-white mb-4">Mulai Gunakan eWalletNickLookup Sekarang!</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Temukan nickname akun e-wallet Anda dengan cepat, aman, dan gratis. Tidak perlu registrasi, langsung gunakan!  
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 active:translate-y-0"
                  onClick={() => document.getElementById('checker-form')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Coba Sekarang
                </button>
                <a 
                  href="/api-docs" 
                  className="px-8 py-4 bg-gray-800/80 text-white border border-gray-700 font-medium rounded-lg text-lg shadow-lg hover:shadow-xl hover:bg-gray-700/80 transform transition hover:-translate-y-1 active:translate-y-0"
                >
                  Lihat Dokumentasi API
                </a>
              </div>
            </div>
          </section>

          {/* Admin Info Card */}
          <Card className="bg-gray-900 border-gray-800 shadow-xl p-6 rounded-lg mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-full bg-gray-800 text-white">
                <AlertCircle size={20} />
              </div>
              <h2 className="text-xl font-semibold text-white">To manage E-Wallet Checker, ask a project owner for the necessary permissions</h2>
            </div>
            <p className="text-gray-400 pl-10">Only authorized users can modify the database or access admin features.</p>
          </Card>
        </main>
      </div>
    </div>
  );
}