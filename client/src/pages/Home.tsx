import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import CheckerForm from "@/components/CheckerForm";
import ResultCard from "@/components/ResultCard";
import { useQuery } from "@tanstack/react-query";
import { EWalletService } from "@shared/schema";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

type CheckResult = {
  phone: string;
  service: string;
  serviceName: string;
  nickname: string;
  accountStatus: string;
};

const eWallets = [
  { key: "ovo", label: "OVO" },
  { key: "dana", label: "DANA" },
  { key: "linkaja", label: "LinkAja" },
  { key: "gopay", label: "GoPay" },
  { key: "shopeepay", label: "ShopeePay" }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error" | "warning">("success");

  // Add this CSS animation
  const styles = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-250px * 5));
      }
    }
    
    .animate-marquee {
      animation: scroll 20s linear infinite;
    }
    
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `;

  // Fungsi untuk menangani klik pada item FAQ
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Fetch services
  const { data: services } = useQuery<{ success: boolean; data: EWalletService[] }>({
    queryKey: ["/api/services"],
  });

  const baseAPIurl = "https://cekrekening-api.belibayar.online/api/v1/account-inquiry";

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);
    setShowAlert(false);

    try {
      const response = await fetch(baseAPIurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          account_bank: selectedWallet,
          account_number: phoneNumber,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setAlertType("success");
        setResult({
          phone: phoneNumber,
          service: selectedWallet,
          serviceName: eWallets.find(w => w.key === selectedWallet)?.label || selectedWallet,
          nickname: data.data.account_holder,
          accountStatus: "active"
        });
      } else {
        setAlertType("warning");
        setError(data.message || "Failed to check nickname");
      }
    } catch (err) {
      setAlertType("error");
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
      setShowAlert(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="container max-w-5xl mx-auto px-4 py-8 flex-grow">
        {/* Hero Section */}
        <header className="mb-16 py-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl text-center md:text-left md:text-5xl font-bold text-white mb-4 animate-fade-in">
                Selamat Datang di <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">eWalletNickLookup</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8">
                Cek nickname akun e-wallet dengan mudah, cepat, dan gratis!
              </p>
              <button
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 active:translate-y-0"
                onClick={() => document.getElementById('checker-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Cari Sekarang
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-72 h-72 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-2xl"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-40 h-40 text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 10H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 16H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 16H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Tentang <span className="text-blue-400">eWalletNickLookup</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <p className="text-gray-300 leading-relaxed">
                  eWalletNickLookup memungkinkan pengguna untuk dengan mudah mencari dan menemukan nickname dari akun e-wallet mereka hanya dengan memasukkan nomor akun. Ini adalah alat yang sederhana namun sangat berguna bagi pengguna yang ingin mengetahui informasi akun mereka.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Didesain untuk pengguna e-wallet yang ingin mengonfirmasi nickname mereka dengan cepat dan tanpa kesulitan. Tidak perlu registrasi, cukup masukkan nomor akun dan temukan nickname Anda dalam hitungan detik.
                </p>
              </div>
              <div className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Fitur <span className="text-purple-400">Unggulan</span> Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 transition duration-300 hover:bg-gray-800/80 hover:shadow-xl hover:border-gray-700 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cepat dan Akurat</h3>
              <p className="text-gray-400">Proses pencarian nickname hanya memakan beberapa detik dengan hasil yang akurat!</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 transition duration-300 hover:bg-gray-800/80 hover:shadow-xl hover:border-gray-700 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Aman dan Terpercaya</h3>
              <p className="text-gray-400">Data Anda tidak akan disimpan. Kami menjaga kerahasiaan informasi pribadi Anda!</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 transition duration-300 hover:bg-gray-800/80 hover:shadow-xl hover:border-gray-700 animate-fade-in" style={{ animationDelay: '0.8s' }}>
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

              <form onSubmit={handleCheck} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Pilih E-Wallet</label>
                  <Select
                    value={selectedWallet}
                    onValueChange={setSelectedWallet}
                  >
                    <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Pilih e-wallet" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {eWallets.map((wallet) => (
                        <SelectItem
                          key={wallet.key}
                          value={wallet.key}
                          className="text-white hover:bg-gray-700"
                        >
                          {wallet.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Nomor Telepon</label>
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Masukkan nomor telepon"
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>

                {showAlert && (
                  <Alert
                    variant={alertType === "success" ? "default" : "destructive"}
                    className={`${alertType === "success" ? "bg-green-900/50 border-green-800" :
                      alertType === "warning" ? "bg-yellow-900/50 border-yellow-800" :
                        "bg-red-900/50 border-red-800"
                      }`}
                  >
                    {alertType === "success" ? (
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                    ) : alertType === "warning" ? (
                      <AlertCircle className="h-4 w-4 text-yellow-400" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-400" />
                    )}
                    <AlertDescription className="text-white">
                      {result?.nickname || error}
                    </AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Checking...
                    </div>
                  ) : (
                    "Check Nickname"
                  )}
                </Button>
              </form>

              {result && (
                <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-2">Hasil Pengecekan</h3>
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <span className="text-gray-400">E-Wallet:</span> {result.serviceName}
                    </p>
                    <p className="text-gray-300">
                      <span className="text-gray-400">Nomor Telepon:</span> {result.phone}
                    </p>
                    <p className="text-gray-300">
                      <span className="text-gray-400">Nickname:</span> {result.nickname}
                    </p>
                    <p className="text-gray-300">
                      <span className="text-gray-400">Status:</span>{" "}
                      <span className="text-green-400">Active</span>
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Testimoni Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Apa Kata <span className="text-yellow-400">Pengguna</span> Kami
            </h2>

            <style>{styles}</style>

            {/* Testimoni Carousel dengan Auto-scroll */}
            <div className="relative overflow-hidden py-4">
              {/* Gradient Overlays untuk efek fade pada sisi kiri dan kanan */}
              <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>

              {/* Container testimoni dengan animasi scroll otomatis */}
              <div className="flex space-x-6 py-4 animate-marquee">
                {/* Testimoni 1 */}
                <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 w-80">
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
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimoni 2 */}
                <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 w-80">
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
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimoni 3 */}
                <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 w-80">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                      DW
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Dina Wijaya</h4>
                      <p className="text-gray-400 text-sm">Pengguna DANA</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "Aplikasi luar biasa! Memudahkan saya verifikasi nama pengguna sebelum transfer. Sangat direkomendasikan!"
                  </p>
                  <div className="flex mt-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimoni 4 */}
                <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 w-80">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-red-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                      BS
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Budi Santoso</h4>
                      <p className="text-gray-400 text-sm">Pengguna OVO</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "Terima kasih! Berkat website ini, transfer ke e-wallet jadi lebih aman dan terpercaya. Nama penerima langsung terlihat sebelum transfer."
                  </p>
                  <div className="flex mt-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimoni 5 */}
                <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 w-80">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                      RA
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Rendra Adhi</h4>
                      <p className="text-gray-400 text-sm">Pengguna LinkAja</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "Fitur yang sangat diperlukan di era transaksi digital saat ini. Tidak perlu khawatir lagi salah kirim uang ke e-wallet!"
                  </p>
                  <div className="flex mt-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Duplicate testimoni untuk infinite scroll */}
                {[...Array(5)].map((_, index) => (
                  <div key={`duplicate-${index}`} className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 w-80">
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
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
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
                  onClick={() => document.getElementById('checker-form')?.scrollIntoView({ behavior: 'smooth' })}
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
              <h2 className="text-xl font-semibold text-white">Untuk mengelola E-Wallet Checker, hubungi pemilik proyek untuk mendapatkan izin yang diperlukan</h2>
            </div>
            <p className="text-gray-400 pl-10">Hanya pengguna yang berwenang yang dapat memodifikasi database atau mengakses fitur admin.</p>
          </Card>
        </main>
      </div>
    </div>
  );
}