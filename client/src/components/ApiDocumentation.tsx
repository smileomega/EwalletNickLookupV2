import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ApiDocumentation() {
  // Initial tab value
  const [activeTab, setActiveTab] = useState("api");

  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden">
      <Tabs defaultValue="api" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full border-b rounded-none">
          <TabsTrigger 
            value="api" 
            className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            API Documentation
          </TabsTrigger>
          <TabsTrigger 
            value="example" 
            className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Example Usage
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="api" className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">API Reference</h3>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Endpoint</h4>
            <div className="bg-gray-100 rounded p-3 flex items-center">
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-800 mr-2">GET</span>
              <code className="text-sm">/api/cek-nickname</code>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Query Parameters</h4>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="text-xs font-medium text-gray-500 uppercase">Parameter</TableHead>
                    <TableHead className="text-xs font-medium text-gray-500 uppercase">Type</TableHead>
                    <TableHead className="text-xs font-medium text-gray-500 uppercase">Required</TableHead>
                    <TableHead className="text-xs font-medium text-gray-500 uppercase">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">phone</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Yes</TableCell>
                    <TableCell>Phone number or ID of the e-wallet account</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">service</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Yes</TableCell>
                    <TableCell>E-wallet service (shopeepay, gopay, dana, ovo, isaku)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Response Format</h4>
            <div className="bg-gray-100 rounded-md p-4">
              <pre className="text-xs text-gray-800 overflow-x-auto">{`{
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
            <h4 className="text-sm font-medium text-gray-700 mb-2">Error Response</h4>
            <div className="bg-gray-100 rounded-md p-4">
              <pre className="text-xs text-gray-800 overflow-x-auto">{`{
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
          <h3 className="text-lg font-medium text-gray-900 mb-4">Example Usage</h3>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">cURL</h4>
            <div className="bg-gray-100 rounded-md p-4 overflow-x-auto">
              <pre className="text-xs text-gray-800">curl -X GET "http://localhost:5000/api/cek-nickname?phone=81234567890&service=gopay"</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">JavaScript (Fetch)</h4>
            <div className="bg-gray-100 rounded-md p-4 overflow-x-auto">
              <pre className="text-xs text-gray-800">{`fetch('http://localhost:5000/api/cek-nickname?phone=81234567890&service=gopay')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}</pre>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Node.js (Axios)</h4>
            <div className="bg-gray-100 rounded-md p-4 overflow-x-auto">
              <pre className="text-xs text-gray-800">{`const axios = require('axios');

axios.get('http://localhost:5000/api/cek-nickname', {
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
  );
}
