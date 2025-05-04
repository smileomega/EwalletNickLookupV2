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
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "inactive":
      case "suspended":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const getNicknameClass = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-700";
      case "pending":
        return "text-yellow-700";
      case "inactive":
      case "suspended":
        return "text-red-700";
      default:
        return "text-gray-900";
    }
  };

  // Format phone number with country code
  const formattedPhone = `+62 ${result.phone}`;

  // Capitalize first letter of status
  const capitalizedStatus = result.accountStatus.charAt(0).toUpperCase() + 
                           result.accountStatus.slice(1);

  return (
    <div className="mt-6 border rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b flex items-center justify-between">
        <h3 className="font-medium text-gray-700">Account Information</h3>
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
            <p className="text-sm font-medium text-gray-500">Phone Number / ID</p>
            <p className="mt-1 text-sm text-gray-900">{formattedPhone}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">E-Wallet Service</p>
            <p className="mt-1 text-sm text-gray-900">{result.serviceName}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Nickname</p>
            <p className={`mt-1 text-sm font-medium ${getNicknameClass(result.accountStatus)}`}>
              {result.nickname}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Status</p>
            <p className="mt-1 text-sm text-gray-900">{capitalizedStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
