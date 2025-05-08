import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "wouter";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ApiDocs() {
  const [, navigate] = useLocation();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/login");
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Data untuk parameter request
  const requestParams = [
    {
      name: "account_bank",
      type: "string",
      description: "Kode e-wallet yang digunakan",
      examples: ["ovo", "dana", "gopay", "shopeepay", "linkaja"],
      required: true
    },
    {
      name: "account_number",
      type: "string",
      description: "Nomor telepon yang terdaftar di e-wallet",
      examples: ["081234567890"],
      required: true
    }
  ];

  // Data untuk e-Wallets yang didukung
  const supportedWallets = [
    { code: "ovo", name: "OVO" },
    { code: "dana", name: "DANA" },
    { code: "gopay", name: "GoPay" },
    { code: "shopeepay", name: "ShopeePay" },
    { code: "linkaja", name: "LinkAja" }
  ];

  // Data untuk FAQ
  const faqs = [
    {
      question: "Apakah API ini gratis?",
      answer: "Cek ketentuan atau hubungi admin untuk informasi terkait biaya penggunaan API."
    },
    {
      question: "Apakah data aman?",
      answer: "Data hanya digunakan sementara untuk proses verifikasi dan tidak disimpan secara permanen."
    },
    {
      question: "Ada bug atau masalah teknis?",
      answer: "Laporkan ke admin atau support melalui email support@belibayar.online untuk penanganan lebih lanjut."
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-gray-800 pb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">API Documentation</h1>
            <p className="text-gray-400 mt-1 text-sm md:text-base">
              Account Inquiry API for e-Wallet Verification
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="text-gray-400 text-sm">
              Welcome, <span className="text-white">{user?.email}</span>
            </span>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="border-gray-700 hover:bg-gray-800"
            >
              Logout
            </Button>
          </div>
        </div>

        {/* API Endpoint Section */}
        <Card className="bg-gray-900 border border-gray-800 mb-6">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">API Endpoint</h2>
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg flex items-center justify-between overflow-x-auto">
              <code className="text-blue-400 text-sm md:text-base">
                POST https://cekrekening-api.belibayar.online/api/v1/account-inquiry
              </code>
              <Button 
                variant="ghost" 
                size="sm"
                className="ml-2 text-xs sm:text-sm whitespace-nowrap"
                onClick={() => {
                  navigator.clipboard.writeText("https://cekrekening-api.belibayar.online/api/v1/account-inquiry");
                }}
              >
                Copy URL
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Request Parameters Section */}
        <Card className="bg-gray-900 border border-gray-800 mb-6">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Request Parameters</h2>
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-gray-700">
                      <TableHead className="text-white">Parameter</TableHead>
                      <TableHead className="text-white">Type</TableHead>
                      <TableHead className="text-white">Description</TableHead>
                      <TableHead className="text-white">Required</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requestParams.map((param, idx) => (
                      <TableRow key={idx} className="border-b border-gray-700">
                        <TableCell className="font-medium text-blue-400">
                          {param.name}
                        </TableCell>
                        <TableCell className="text-green-400">
                          {param.type}
                        </TableCell>
                        <TableCell>
                          <div>
                            {param.description}
                            {param.examples && (
                              <div className="mt-1 flex flex-wrap gap-1">
                                {param.examples.map((example, i) => (
                                  <span 
                                    key={i} 
                                    className="inline-block bg-gray-700 text-xs px-2 py-1 rounded"
                                  >
                                    {example}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          {param.required ? (
                            <span className="text-red-400">Yes</span>
                          ) : (
                            <span className="text-gray-400">No</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-gray-700">
                <h3 className="text-sm font-medium mb-2">Request Body Format</h3>
                <pre className="text-gray-300 text-sm whitespace-pre-wrap bg-gray-800 p-3 rounded-lg overflow-auto">
{`{
  "account_bank": "string",    // e.g. "ovo", "dana", "gopay"
  "account_number": "string"   // e.g. "081234567890"
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Request Examples Section */}
        <Card className="bg-gray-900 border border-gray-800 mb-6">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Request Examples</h2>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="bg-gray-900 w-full justify-start overflow-x-auto border-b border-gray-700">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>
                <TabsContent value="javascript" className="p-4">
                  <pre className="text-gray-300 text-sm overflow-auto">
{`fetch('https://cekrekening-api.belibayar.online/api/v1/account-inquiry', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    account_bank: 'ovo',
    account_number: '081234567890'
  })
})
.then(response => response.json())
.then(data => console.log(data));`}
                  </pre>
                </TabsContent>
                <TabsContent value="curl" className="p-4">
                  <pre className="text-gray-300 text-sm overflow-auto">
{`curl -X POST https://cekrekening-api.belibayar.online/api/v1/account-inquiry \\
  -H "Content-Type: application/json" \\
  -d '{"account_bank": "ovo", "account_number": "081234567890"}'`}
                  </pre>
                </TabsContent>
                <TabsContent value="python" className="p-4">
                  <pre className="text-gray-300 text-sm overflow-auto">
{`import requests
import json

url = "https://cekrekening-api.belibayar.online/api/v1/account-inquiry"
headers = {"Content-Type": "application/json"}
data = {
    "account_bank": "ovo",
    "account_number": "081234567890"
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())`}
                  </pre>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        {/* Response Examples Section */}
        <Card className="bg-gray-900 border border-gray-800 mb-6">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Response Examples</h2>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Tabs defaultValue="success" className="w-full">
                <TabsList className="bg-gray-900 w-full justify-start overflow-x-auto border-b border-gray-700">
                  <TabsTrigger value="success">Success Response</TabsTrigger>
                  <TabsTrigger value="error">Error Response</TabsTrigger>
                </TabsList>
                <TabsContent value="success" className="p-4">
                  <div className="bg-gray-900 p-3 rounded-lg text-sm overflow-x-auto border border-gray-700">
                    <pre className="text-gray-300">
{`{
  "success": true,
  "data": {
    "account_holder": "Nama Pemilik Akun"
  }
}`}
                    </pre>
                  </div>
                  <div className="mt-3 text-sm text-gray-400">
                    <p>Ketika verifikasi berhasil, API akan mengembalikan nama pemilik akun.</p>
                  </div>
                </TabsContent>
                <TabsContent value="error" className="p-4">
                  <div className="bg-gray-900 p-3 rounded-lg text-sm overflow-x-auto border border-gray-700">
                    <pre className="text-gray-300">
{`{
  "success": false,
  "message": "Account not found"
}`}
                    </pre>
                  </div>
                  <div className="mt-3 text-sm text-gray-400">
                    <p>Response ini dikembalikan ketika nomor akun tidak ditemukan atau tidak valid.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        {/* Supported E-Wallets Section */}
        <Card className="bg-gray-900 border border-gray-800 mb-6">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Daftar E-Wallet yang Didukung</h2>
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {supportedWallets.map((wallet, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center justify-center bg-gray-900 rounded-lg p-3 border border-gray-700"
                  >
                    <div className="text-lg font-medium">{wallet.name}</div>
                    <code className="text-xs bg-gray-800 px-2 py-1 rounded mt-1 text-blue-400">
                      {wallet.code}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Tips Section */}
          <Card className="bg-gray-900 border border-gray-800">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-3">Tips Penggunaan</h2>
              <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Gunakan endpoint hanya untuk validasi yang legal dan sah</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Hindari melakukan spam request yang dapat membebani server</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Simpan response untuk keperluan audit dan log</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Pastikan format <b>account_bank</b> dan <b>account_number</b> sudah benar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Periksa pesan <b>message</b> jika mendapatkan <b>success: false</b></span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="bg-gray-900 border border-gray-800">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-3">FAQ</h2>
              <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-700">
                      <AccordionTrigger className="text-sm hover:no-underline hover:text-blue-400">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="bg-gray-900 border border-gray-800 mb-6">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Kontak & Bantuan</h2>
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="text-gray-300 text-sm md:text-base mb-3 md:mb-0">
                  Butuh bantuan atau informasi lebih lanjut?
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700"
                    size="sm"
                    onClick={() => {
                      window.location.href = "mailto:support@belibayar.online";
                    }}
                  >
                    Email Support
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-700 hover:bg-gray-800"
                  >
                    Dokumentasi Lengkap
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}