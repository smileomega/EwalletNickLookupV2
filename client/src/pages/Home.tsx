import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CheckerForm from "@/components/CheckerForm";
import ResultCard from "@/components/ResultCard";
import ApiDocumentation from "@/components/ApiDocumentation";
import { useQuery } from "@tanstack/react-query";
import { EWalletService } from "@shared/schema";

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
  const { data: services } = useQuery<{ success: boolean; data: EWalletService[] }>({
    queryKey: ["/api/services"],
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
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-primary mb-2">
            E-Wallet Nickname Checker
          </h1>
          <p className="text-gray-600">
            Check account information for popular e-wallet services
          </p>
        </header>

        <main>
          <Card className="mb-8">
            <CardContent className="p-6">
              <CheckerForm 
                onSubmit={handleCheck} 
                isLoading={isLoading} 
                services={services?.data || []} 
              />
              
              {isLoading && (
                <div className="py-8 flex justify-center items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <span className="ml-2 text-gray-600">Checking...</span>
                </div>
              )}
              
              {error && (
                <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg 
                        className="h-5 w-5 text-red-400" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {result && <ResultCard result={result} />}
            </CardContent>
          </Card>
          
          <ApiDocumentation />
        </main>
        
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} E-Wallet Nickname Checker. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
