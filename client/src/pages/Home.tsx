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
      <div className="container max-w-3xl mx-auto px-4 py-8 flex-grow">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            E-Wallet Nickname Checker
          </h1>
          <p className="text-gray-400 text-lg">
            Realtime updates, powerful queries, and automatic scaling
          </p>
        </header>

        <main>
          <Card className="mb-8 bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Check Account Info</h2>
              
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