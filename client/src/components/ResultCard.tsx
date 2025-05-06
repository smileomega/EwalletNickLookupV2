import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";

interface ResultProps {
  result: {
    phone: string;
    service: string;
    serviceName: string;
    nickname: string;
    accountStatus: string;
  };
}

export default function ResultCard({ result }: ResultProps) {
  // Determine badge color based on account status
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-900/30 text-green-400 hover:bg-green-900/40 border-green-800";
      case "pending":
        return "bg-yellow-900/30 text-yellow-400 hover:bg-yellow-900/40 border-yellow-800";
      case "inactive":
      case "suspended":
        return "bg-red-900/30 text-red-400 hover:bg-red-900/40 border-red-800";
      default:
        return "bg-gray-800 text-gray-400 hover:bg-gray-700 border-gray-700";
    }
  };

  const getNicknameClass = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-400";
      case "pending":
        return "text-yellow-400";
      case "inactive":
      case "suspended":
        return "text-red-400";
      default:
        return "text-gray-300";
    }
  };

  // Format phone number with country code
  const formattedPhone = `+62 ${result.phone}`;

  // Capitalize first letter of status
  const capitalizedStatus = result.accountStatus.charAt(0).toUpperCase() + 
                           result.accountStatus.slice(1);

  return (
    <div className="mt-6 border border-gray-700 rounded-lg overflow-hidden bg-gray-800/40">
      <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
        <h3 className="font-medium text-gray-200">Account Information</h3>
        <Badge 
          variant="outline" 
          className={getBadgeVariant(result.accountStatus)}
        >
          {result.accountStatus.toUpperCase()}
        </Badge>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-gray-400">Phone Number / ID</p>
            <p className="mt-1 text-sm text-gray-300">{formattedPhone}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">E-Wallet Service</p>
            <p className="mt-1 text-sm text-gray-300">{result.serviceName}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">Nickname</p>
            <p className={`mt-1 text-sm font-medium ${getNicknameClass(result.accountStatus)}`}>
              {result.nickname}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">Status</p>
            <p className="mt-1 text-sm text-gray-300">{capitalizedStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
