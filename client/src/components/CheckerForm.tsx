import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { EWalletService } from "@shared/schema";

const formSchema = z.object({
  service: z.string().min(1, {
    message: "Please select an e-wallet service",
  }),
  phone: z.string()
    .min(8, {
      message: "Phone number must be at least 8 digits",
    })
    .max(15, {
      message: "Phone number must be at most 15 digits",
    })
    .regex(/^8[1-9][0-9]{7,11}$/, {
      message: "Please enter a valid Indonesian phone number",
    }),
});

interface CheckerFormProps {
  onSubmit: (phone: string, service: string) => void;
  isLoading: boolean;
  services: EWalletService[];
}

export default function CheckerForm({ onSubmit, isLoading, services }: CheckerFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "shopeepay",
      phone: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values.phone, values.service);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="mb-6 space-y-6">
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">E-Wallet Service</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
                disabled={isLoading}
              >
                <FormControl>
                  <SelectTrigger className="h-10 border-gray-300 focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="Select an e-wallet service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services && services.length > 0 ? (
                    services.map((service) => (
                      <SelectItem key={service.code} value={service.code}>
                        {service.name}
                      </SelectItem>
                    ))
                  ) : (
                    <>
                      <SelectItem value="shopeepay">ShopeePay</SelectItem>
                      <SelectItem value="gopay">GoPay</SelectItem>
                      <SelectItem value="dana">DANA</SelectItem>
                      <SelectItem value="ovo">OVO</SelectItem>
                      <SelectItem value="isaku">iSaku</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">Phone Number / ID</FormLabel>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">+62</span>
                </div>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="8123456789"
                    className="pl-12 h-10 border-gray-300 focus:ring-primary focus:border-primary"
                    disabled={isLoading}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-end">
          <Button 
            type="submit" 
            className="bg-primary hover:bg-primary/90"
            disabled={isLoading}
          >
            <span>Check Nickname</span>
            <Search className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
