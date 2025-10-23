import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Calendar, 
  Download, 
  DollarSign, 
  Send,
  MapPin,
  Clock,
  Globe
} from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  department: z.string().min(1, "Department is required"),
  message: z.string().min(1, "Message is required"),
  privacyConsent: z.boolean().refine(val => val === true, "Privacy consent is required")
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    value: "+1 (555) 123-4567",
    subtitle: "Monday - Friday, 8AM - 6PM EST",
    description: "Speak directly with our compliance experts"
  },
  {
    icon: Mail,
    title: "Email Support",
    value: "support@4dsolutions.com",
    subtitle: "Response within 2 hours",
    description: "Detailed technical assistance and documentation"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "+1 (555) 987-6543",
    subtitle: "Instant messaging support",
    description: "Quick questions and real-time assistance"
  }
];

const quickActions = [
  { 
    icon: Calendar, 
    title: "Schedule a Demo", 
    subtitle: "See our solutions in action",
    variant: "default" as const 
  },
  { 
    icon: Download, 
    title: "Download Product Brochure", 
    subtitle: "Comprehensive product information",
    variant: "outline" as const 
  },
  { 
    icon: DollarSign, 
    title: "Request Quote", 
    subtitle: "Custom pricing for your needs",
    variant: "outline" as const 
  }
];

const officeLocations = [
  {
    city: "Boston, MA",
    address: "123 Compliance Way, Suite 400",
    phone: "+1 (555) 123-4567",
    timezone: "EST"
  },
  {
    city: "San Francisco, CA",
    address: "456 Innovation Drive, Suite 200",
    phone: "+1 (555) 234-5678",
    timezone: "PST"
  },
  {
    city: "London, UK",
    address: "789 Regulatory Street, Floor 3",
    phone: "+44 (0) 20 1234 5678",
    timezone: "GMT"
  }
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      department: "",
      message: "",
      privacyConsent: false
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: Omit<ContactFormData, 'privacyConsent'>) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 2 hours.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    const { privacyConsent, ...submitData } = data;
    contactMutation.mutate(submitData);
  };

  return (
    <>
      <Helmet>
        <title>Contact - Get Expert Regulatory Compliance Support</title>
        <meta 
          name="description" 
          content="Contact 4D Solutions for expert regulatory compliance support. Schedule a demo, request a quote, or speak with our FDA 21 CFR Part 11 specialists today." 
        />
        <meta 
          name="keywords" 
          content="contact 4D Solutions, regulatory compliance support, FDA consultation, demo request, compliance experts" 
        />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-light-grey to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-dark-grey mb-6">
                Get Expert Support
              </h1>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                Contact our regulatory compliance experts to discuss your software validation needs 
                and discover how we can help streamline your compliance operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-grey mb-4">
                Multiple Ways to Connect
              </h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                Choose the communication method that works best for you. Our team is ready to help.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-light-grey p-8 text-center h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-primary-blue/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                        <info.icon className="text-primary-blue h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-dark-grey mb-2">{info.title}</h3>
                      <p className="text-lg text-primary-blue font-semibold mb-2">{info.value}</p>
                      <p className="text-sm text-medium-grey mb-3">{info.subtitle}</p>
                      <p className="text-sm text-dark-grey">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Form */}
        <section className="py-20 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-dark-grey">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-medium-grey">
                    Fill out the form below and our compliance experts will get back to you 
                    within 2 hours during business hours.
                  </p>
                </div>
                
                <Card className="bg-white rounded-xl p-6 border border-gray-200">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-dark-grey mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      {quickActions.map((action, index) => (
                        <Button 
                          key={index}
                          variant={action.variant}
                          className={`w-full justify-between text-left h-auto py-4 px-6 ${
                            action.variant === 'default' 
                              ? 'bg-accent-green hover:bg-green-600 text-white' 
                              : action.variant === 'outline' && index === 1
                              ? 'border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
                              : 'border-gray-300 text-dark-grey hover:bg-gray-50'
                          }`}
                        >
                          <div>
                            <div className="font-medium">{action.title}</div>
                            <div className="text-sm opacity-70">{action.subtitle}</div>
                          </div>
                          <action.icon className="h-5 w-5" />
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white rounded-2xl p-8 shadow-sm">
                  <CardContent className="p-0">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium text-dark-grey">
                                  First Name *
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="John" 
                                    className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium text-dark-grey">
                                  Last Name *
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Doe" 
                                    className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-dark-grey">
                                Email Address *
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="john.doe@company.com" 
                                  className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-dark-grey">
                                Company
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your Company Name" 
                                  className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="department"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-dark-grey">
                                Department *
                              </FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent">
                                    <SelectValue placeholder="Select Department" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="quality">Quality Assurance</SelectItem>
                                  <SelectItem value="regulatory">Regulatory Affairs</SelectItem>
                                  <SelectItem value="it">IT/Systems</SelectItem>
                                  <SelectItem value="operations">Operations</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-dark-grey">
                                Message *
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  rows={4}
                                  placeholder="Tell us about your compliance software needs..." 
                                  className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="privacyConsent"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="mt-1"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm text-medium-grey">
                                  I agree to the{" "}
                                  <a href="#" className="text-primary-blue hover:underline">
                                    Privacy Policy
                                  </a>{" "}
                                  and consent to being contacted about 4D Solutions products and services.
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full bg-accent-green hover:bg-green-600 text-white px-8 py-4 text-lg"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                          <Send className="h-5 w-5 ml-2" />
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-grey mb-4">
                Global Presence
              </h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                Our offices around the world ensure we can provide local support 
                with global expertise and 24/7 coverage.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {officeLocations.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-light-grey p-6 h-full">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <MapPin className="text-primary-blue h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold text-dark-grey">{office.city}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-medium-grey mt-1 flex-shrink-0" />
                          <span className="text-sm text-dark-grey">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-medium-grey" />
                          <span className="text-sm text-dark-grey">{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-medium-grey" />
                          <span className="text-sm text-dark-grey">Business hours ({office.timezone})</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
