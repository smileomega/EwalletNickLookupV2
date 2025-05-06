import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

export default function ApiDocs() {
  // Initial tab value
  const [activeTab, setActiveTab] = useState("api");

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          API Documentation
        </h1>
        <p className="text-gray-400 text-xl">
          Integrate e-wallet nickname checking into your applications
        </p>
      </header>

      <Card className="bg-gray-900 border-gray-800 rounded-lg shadow-md overflow-hidden">
        <Tabs defaultValue="api" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full border-b border-gray-800 rounded-none bg-gray-900">
            <TabsTrigger 
              value="api" 
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary text-gray-400 data-[state=active]:text-white"
            >
              API Reference
            </TabsTrigger>
            <TabsTrigger 
              value="example" 
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary text-gray-400 data-[state=active]:text-white"
            >
              Example Usage
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="api" className="p-6">
            <h3 className="text-xl font-medium text-white mb-4">API Reference</h3>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Endpoint</h4>
              <div className="bg-gray-800 rounded p-3 flex items-center">
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-green-900 text-green-400 mr-2">GET</span>
                <code className="text-sm text-gray-300">/api/cek-nickname</code>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Query Parameters</h4>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-gray-800">
                    <TableRow className="border-b border-gray-700">
                      <TableHead className="text-xs font-medium text-gray-400 uppercase">Parameter</TableHead>
                      <TableHead className="text-xs font-medium text-gray-400 uppercase">Type</TableHead>
                      <TableHead className="text-xs font-medium text-gray-400 uppercase">Required</TableHead>
                      <TableHead className="text-xs font-medium text-gray-400 uppercase">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-700">
                      <TableCell className="font-medium text-gray-300">phone</TableCell>
                      <TableCell className="text-gray-400">string</TableCell>
                      <TableCell className="text-gray-400">Yes</TableCell>
                      <TableCell className="text-gray-400">Phone number or ID of the e-wallet account</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-gray-300">service</TableCell>
                      <TableCell className="text-gray-400">string</TableCell>
                      <TableCell className="text-gray-400">Yes</TableCell>
                      <TableCell className="text-gray-400">E-wallet service (shopeepay, gopay, dana, ovo, isaku)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Response Format</h4>
              <div className="bg-gray-800 rounded-md p-4">
                <pre className="text-xs text-gray-300 overflow-x-auto">{`{
  "success": true,
  "data": {
    "phone": "81234567890",
    "service": "gopay",
    "serviceName": "GoPay",
    "nickname": "John Doe",
    "accountStatus": "active"
  }
}`}</pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Error Response</h4>
              <div className="bg-gray-800 rounded-md p-4">
                <pre className="text-xs text-gray-300 overflow-x-auto">{`{
  "success": false,
  "error": {
    "code": "account_not_found",
    "message": "No account found with the provided phone number"
  }
}`}</pre>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="example" className="p-6">
            <h3 className="text-xl font-medium text-white mb-4">Example Usage</h3>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">cURL</h4>
              <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                <pre className="text-xs text-gray-300">curl -X GET "https://yourapp.com/api/cek-nickname?phone=81234567890&service=gopay"</pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">JavaScript (Fetch)</h4>
              <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                <pre className="text-xs text-gray-300">{`fetch('https://yourapp.com/api/cek-nickname?phone=81234567890&service=gopay')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}</pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Node.js (Axios)</h4>
              <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                <pre className="text-xs text-gray-300">{`const axios = require('axios');

axios.get('https://yourapp.com/api/cek-nickname', {
  params: {
    phone: '81234567890',
    service: 'gopay'
  }
})
.then(response => console.log(response.data))
.catch(error => console.error('Error:', error));`}</pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
