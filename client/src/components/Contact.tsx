// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useMutation } from "@tanstack/react-query";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { useToast } from "@/hooks/use-toast";
// import { apiRequest } from "@/lib/queryClient";
// import { Phone, Mail, MessageSquare, Calendar, Download, DollarSign, Send } from "lucide-react";

// const contactSchema = z.object({
//   firstName: z.string().min(1, "First name is required"),
//   lastName: z.string().min(1, "Last name is required"),
//   email: z.string().email("Valid email is required"),
//   company: z.string().optional(),
//   department: z.string().min(1, "Department is required"),
//   message: z.string().min(1, "Message is required"),
//   privacyConsent: z.boolean().refine(val => val === true, "Privacy consent is required")
// });

// type ContactFormData = z.infer<typeof contactSchema>;

// const contactInfo = [
//   {
//     icon: Phone,
//     title: "Phone Support",
//     value: "+1 (555) 123-4567",
//     subtitle: "Monday - Friday, 8AM - 6PM EST"
//   },
//   {
//     icon: Mail,
//     title: "Email Support",
//     value: "support@4dsolutions.com",
//     subtitle: "Response within 2 hours"
//   },
//   {
//     icon: MessageSquare,
//     title: "WhatsApp",
//     value: "+1 (555) 987-6543",
//     subtitle: "Instant messaging support"
//   }
// ];

// const quickActions = [
//   { icon: Calendar, title: "Schedule a Demo", variant: "default" as const },
//   { icon: Download, title: "Download Product Brochure", variant: "outline" as const },
//   { icon: DollarSign, title: "Request Quote", variant: "outline" as const }
// ];

// export default function Contact() {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useForm<ContactFormData>({
//     resolver: zodResolver(contactSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       company: "",
//       department: "",
//       message: "",
//       privacyConsent: false
//     }
//   });

//   const contactMutation = useMutation({
//     mutationFn: (data: Omit<ContactFormData, 'privacyConsent'>) => 
//       apiRequest("POST", "/api/contact", data),
//     onSuccess: () => {
//       toast({
//         title: "Message sent successfully!",
//         description: "We'll get back to you within 2 hours.",
//       });
//       form.reset();
//       setIsSubmitting(false);
//     },
//     onError: (error: any) => {
//       toast({
//         title: "Failed to send message",
//         description: error.message || "Please try again later.",
//         variant: "destructive",
//       });
//       setIsSubmitting(false);
//     }
//   });

//   const onSubmit = async (data: ContactFormData) => {
//     setIsSubmitting(true);
//     const { privacyConsent, ...submitData } = data;
//     contactMutation.mutate(submitData);
//   };

//   return (
//     <section className="py-20 bg-light-grey">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl lg:text-4xl font-bold text-dark-grey mb-4">
//             Ready to Get Started?
//           </h2>
//           <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//             Contact our regulatory compliance experts to discuss your software validation needs.
//           </p>
//         </motion.div>
        
//         <div className="grid lg:grid-cols-2 gap-16">
//           <motion.div 
//             className="space-y-8"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <motion.div 
//                   key={index}
//                   className="flex items-start space-x-4"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <info.icon className="text-primary-blue h-6 w-6" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-dark-grey mb-1">{info.title}</h3>
//                     <p className="text-medium-grey">{info.value}</p>
//                     <p className="text-sm text-medium-grey">{info.subtitle}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             <Card className="bg-white rounded-xl p-6 border border-gray-200">
//               <CardContent className="p-0">
//                 <h3 className="font-semibold text-dark-grey mb-4">Quick Actions</h3>
//                 <div className="space-y-3">
//                   {quickActions.map((action, index) => (
//                     <Button 
//                       key={index}
//                       variant={action.variant}
//                       className={`w-full justify-between ${
//                         action.variant === 'default' 
//                           ? 'bg-accent-green hover:bg-green-600 text-white' 
//                           : action.variant === 'outline' && index === 1
//                           ? 'border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
//                           : 'border-gray-300 text-dark-grey hover:bg-gray-50'
//                       }`}
//                     >
//                       <span>{action.title}</span>
//                       <action.icon className="h-4 w-4" />
//                     </Button>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <Card className="bg-white rounded-2xl p-8 shadow-sm">
//               <CardContent className="p-0">
//                 <Form {...form}>
//                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                     <div className="grid grid-cols-2 gap-4">
//                       <FormField
//                         control={form.control}
//                         name="firstName"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-sm font-medium text-dark-grey">
//                               First Name *
//                             </FormLabel>
//                             <FormControl>
//                               <Input 
//                                 placeholder="John" 
//                                 className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent"
//                                 {...field} 
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                       <FormField
//                         control={form.control}
//                         name="lastName"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-sm font-medium text-dark-grey">
//                               Last Name *
//                             </FormLabel>
//                             <FormControl>
//                               <Input 
//                                 placeholder="Doe" 
//                                 className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent"
//                                 {...field} 
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>
                    
//                     <FormField
//                       control={form.control}
//                       name="email"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-sm font-medium text-dark-grey">
//                             Email Address *
//                           </FormLabel>
//                           <FormControl>
//                             <Input 
//                               type="email"
//                               placeholder="john.doe@company.com" 
//                               className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent"
//                               {...field} 
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
                    
//                     <FormField
//                       control={form.control}
//                       name="company"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-sm font-medium text-dark-grey">
//                             Company
//                           </FormLabel>
//                           <FormControl>
//                             <Input 
//                               placeholder="Your Company Name" 
//                               className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent"
//                               {...field} 
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
                    
//                     <FormField
//                       control={form.control}
//                       name="department"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-sm font-medium text-dark-grey">
//                             Department *
//                           </FormLabel>
//                           <Select onValueChange={field.onChange} defaultValue={field.value}>
//                             <FormControl>
//                               <SelectTrigger className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent">
//                                 <SelectValue placeholder="Select Department" />
//                               </SelectTrigger>
//                             </FormControl>
//                             <SelectContent>
//                               <SelectItem value="quality">Quality Assurance</SelectItem>
//                               <SelectItem value="regulatory">Regulatory Affairs</SelectItem>
//                               <SelectItem value="it">IT/Systems</SelectItem>
//                               <SelectItem value="operations">Operations</SelectItem>
//                               <SelectItem value="other">Other</SelectItem>
//                             </SelectContent>
//                           </Select>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
                    
//                     <FormField
//                       control={form.control}
//                       name="message"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-sm font-medium text-dark-grey">
//                             Message *
//                           </FormLabel>
//                           <FormControl>
//                             <Textarea 
//                               rows={4}
//                               placeholder="Tell us about your compliance software needs..." 
//                               className="border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent"
//                               {...field} 
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
                    
//                     <FormField
//                       control={form.control}
//                       name="privacyConsent"
//                       render={({ field }) => (
//                         <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                           <FormControl>
//                             <Checkbox
//                               checked={field.value}
//                               onCheckedChange={field.onChange}
//                               className="mt-1"
//                             />
//                           </FormControl>
//                           <div className="space-y-1 leading-none">
//                             <FormLabel className="text-sm text-medium-grey">
//                               I agree to the{" "}
//                               <a href="#" className="text-primary-blue hover:underline">
//                                 Privacy Policy
//                               </a>{" "}
//                               and consent to being contacted about 4D Solutions products and services.
//                             </FormLabel>
//                             <FormMessage />
//                           </div>
//                         </FormItem>
//                       )}
//                     />
                    
//                     <Button 
//                       type="submit" 
//                       disabled={isSubmitting}
//                       className="w-full bg-accent-green hover:bg-green-600 text-white px-8 py-4 text-lg"
//                     >
//                       {isSubmitting ? "Sending..." : "Send Message"}
//                       <Send className="h-5 w-5 ml-2" />
//                     </Button>
//                   </form>
//                 </Form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useMutation } from "@tanstack/react-query";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { useToast } from "@/hooks/use-toast";
// import { apiRequest } from "@/lib/queryClient";
// import { Phone, Mail, MessageSquare, Calendar, Download, DollarSign, Send, MapPin, Clock, Users, ChevronRight } from "lucide-react";

// const contactSchema = z.object({
//   firstName: z.string().min(1, "First name is required"),
//   lastName: z.string().min(1, "Last name is required"),
//   email: z.string().email("Valid email is required"),
//   company: z.string().optional(),
//   department: z.string().min(1, "Department is required"),
//   message: z.string().min(1, "Message is required"),
//   privacyConsent: z.boolean().refine(val => val === true, "Privacy consent is required")
// });

// type ContactFormData = z.infer<typeof contactSchema>;

// const contactInfo = [
//   {
//     icon: Phone,
//     title: "Phone Support",
//     value: "+1 (555) 123-4567",
//     subtitle: "Monday - Friday, 8AM - 6PM EST",
//     color: "bg-blue-500"
//   },
//   {
//     icon: Mail,
//     title: "Email Support",
//     value: "support@4dsolutions.com",
//     subtitle: "Response within 2 hours",
//     color: "bg-green-500"
//   },
//   {
//     icon: MessageSquare,
//     title: "Live Chat",
//     value: "Start Chat",
//     subtitle: "Instant messaging support",
//     color: "bg-purple-500"
//   },
//   {
//     icon: MapPin,
//     title: "Headquarters",
//     value: "123 Compliance Ave, Boston, MA",
//     subtitle: "Global offices available",
//     color: "bg-orange-500"
//   }
// ];

// const quickActions = [
//   { 
//     icon: Calendar, 
//     title: "Schedule a Demo", 
//     variant: "default" as const,
//     description: "See our software in action"
//   },
//   { 
//     icon: Download, 
//     title: "Download Brochure", 
//     variant: "outline" as const,
//     description: "Product specifications PDF"
//   },
//   { 
//     icon: DollarSign, 
//     title: "Request Quote", 
//     variant: "outline" as const,
//     description: "Personalized pricing"
//   }
// ];

// const stats = [
//   { value: "2h", label: "Avg. Response Time" },
//   { value: "24/7", label: "Support Availability" },
//   { value: "100%", label: "Client Satisfaction" }
// ];

// export default function Contact() {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useForm<ContactFormData>({
//     resolver: zodResolver(contactSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       company: "",
//       department: "",
//       message: "",
//       privacyConsent: false
//     }
//   });

//   const contactMutation = useMutation({
//     mutationFn: (data: Omit<ContactFormData, 'privacyConsent'>) => 
//       apiRequest("POST", "/api/contact", data),
//     onSuccess: () => {
//       toast({
//         title: "Message sent successfully!",
//         description: "We'll get back to you within 2 hours.",
//       });
//       form.reset();
//       setIsSubmitting(false);
//     },
//     onError: (error: any) => {
//       toast({
//         title: "Failed to send message",
//         description: error.message || "Please try again later.",
//         variant: "destructive",
//       });
//       setIsSubmitting(false);
//     }
//   });

//   const onSubmit = async (data: ContactFormData) => {
//     setIsSubmitting(true);
//     const { privacyConsent, ...submitData } = data;
//     contactMutation.mutate(submitData);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full -translate-y-36 translate-x-36 opacity-20 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full translate-y-48 -translate-x-48 opacity-20 blur-3xl"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <motion.div 
//             className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <MessageSquare className="h-4 w-4 mr-2" />
//             Get In Touch
//           </motion.div>
//           <motion.h2 
//             className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             Ready to Get Started?
//           </motion.h2>
//           <motion.p 
//             className="text-xl text-gray-600 max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             Contact our regulatory compliance experts to discuss your software validation needs.
//           </motion.p>
//         </motion.div>
        
//         <div className="grid lg:grid-cols-2 gap-16">
//           <motion.div 
//             className="space-y-8"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <motion.div 
//                   key={index}
//                   className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                 >
//                   <div className={`w-12 h-12 ${info.color}/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:${info.color}/20 transition-colors duration-300`}>
//                     <info.icon className={`${info.color} h-6 w-6`} />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
//                     <p className="text-gray-700 font-medium">{info.value}</p>
//                     <p className="text-sm text-gray-500">{info.subtitle}</p>
//                   </div>
//                   <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-700 transition-colors duration-300" />
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* Stats */}
//             <motion.div 
//               className="grid grid-cols-3 gap-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-2xl font-bold mb-1">{stat.value}</div>
//                   <div className="text-xs opacity-80">{stat.label}</div>
//                 </div>
//               ))}
//             </motion.div>
            
//             {/* Quick Actions Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               <Card className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
//                 <CardContent className="p-0">
//                   <h3 className="font-semibold text-gray-900 mb-4 text-lg">Quick Actions</h3>
//                   <div className="space-y-3">
//                     {quickActions.map((action, index) => (
//                       <Button 
//                         key={index}
//                         variant={action.variant}
//                         className={`w-full justify-between items-center py-5 rounded-xl ${
//                           action.variant === 'default' 
//                             ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25' 
//                             : 'border-gray-300 text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-300'
//                         }`}
//                       >
//                         <div className="flex items-center">
//                           <div className={`mr-3 p-2 rounded-lg ${action.variant === 'default' ? 'bg-blue-700' : 'bg-blue-100'}`}>
//                             <action.icon className={`h-4 w-4 ${action.variant === 'default' ? 'text-white' : 'text-blue-600'}`} />
//                           </div>
//                           <div className="text-left">
//                             <div className="font-medium">{action.title}</div>
//                             <div className={`text-xs ${action.variant === 'default' ? 'text-blue-100' : 'text-gray-500'}`}>
//                               {action.description}
//                             </div>
//                           </div>
//                         </div>
//                         <ChevronRight className="h-4 w-4" />
//                       </Button>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </motion.div>
          
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <Card className="bg-white rounded-2xl p-8 shadow-lg border-0 overflow-hidden relative">
//               {/* Decorative element */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -translate-y-16 translate-x-16"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-600/10 rounded-full translate-y-12 -translate-x-12"></div>
              
//               <CardContent className="p-0 relative z-10">
//                 <motion.div 
//                   className="mb-8"
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                 >
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
//                   <p className="text-gray-600">Our team will respond within 2 hours</p>
//                 </motion.div>
                
//                 <Form {...form}>
//                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                     <div className="grid grid-cols-2 gap-4">
//                       <FormField
//                         control={form.control}
//                         name="firstName"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-sm font-medium text-gray-700">
//                               First Name *
//                             </FormLabel>
//                             <FormControl>
//                               <Input 
//                                 placeholder="John" 
//                                 className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4"
//                                 {...field} 
//                               />
//                             </FormControl>
//                             <FormMessage className="text-red-500 text-xs" />
//                           </FormItem>
//                         )}
//                       />
//                       <FormField
//                         control={form.control}
//                         name="lastName"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-sm font-medium text-gray-700">
//                               Last Name *
//                             </FormLabel>
//                             <FormControl>
//                               <Input 
//                                 placeholder="Doe" 
//                                 className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4"
//                                 {...field} 
//                               />
//                             </FormControl>
//                             <FormMessage className="text-red-500 text-xs" />
//                           </FormItem>
//                         )}
//                       />
//                     </div>
                    
//                     <FormField
//                       control={form.control}
//                       name="email"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-sm font-medium text-gray-700">
//                             Email Address *
//                           </FormLabel>
//                           <FormControl>
//                             <Input 
//                               type="email"
//                               placeholder="john.doe@company.com" 
//                               className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4"
//                               {...field} 
//                             />
//                           </FormControl>
//                           <FormMessage className="text-red-500 text-xs" />
//                         </FormItem>
//                       )}
//                     />
                    
//                     <FormField
//                       control={form.control}
//                       name="company"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-sm font-medium text-gray-700">
//                             Company
//                           </FormLabel>
//                           <FormControl>
//                             <Input 
//                               placeholder="Your Company Name" 
//                               className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4"
//                               {...field} 
//                             />
//                           </FormControl>
//                           <FormMessage className="text-red-500 text-xs" />
//                         </FormItem>
//                       )}
//                     />
                    
//                     <FormField
//                       control={form.control}
//                       name="department"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-sm font-medium text-gray-700">
//                             Department *
//                           </FormLabel>
//                           <Select onValueChange={field.onChange} defaultValue={field.value}>
//                             <FormControl>
//                               <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4">
//                                 <SelectValue placeholder="Select Department" />
//                               </SelectTrigger>
//                             </FormControl>
//                             <SelectContent>
//                               <SelectItem value="quality">Quality Assurance</SelectItem>
//                               <SelectItem value="regulatory">Regulatory Affairs</SelectItem>
//                               <SelectItem value="it">IT/Systems</SelectItem>
//                               <SelectItem value="operations">Operations</SelectItem>
//                               <SelectItem value="other">Other</SelectItem>
//                             </SelectContent>
//                           </Select>
//                           <FormMessage className="text-red-500 text-xs" />
//                         </FormItem>
//                       )}
//                     />
                    
//                     <FormField
//                       control={form.control}
//                       name="message"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-sm font-medium text-gray-700">
//                             Message *
//                           </FormLabel>
//                           <FormControl>
//                             <Textarea 
//                               rows={4}
//                               placeholder="Tell us about your compliance software needs..." 
//                               className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4"
//                               {...field} 
//                             />
//                           </FormControl>
//                           <FormMessage className="text-red-500 text-xs" />
//                         </FormItem>
//                       )}
//                     />
                    
//                     <FormField
//                       control={form.control}
//                       name="privacyConsent"
//                       render={({ field }) => (
//                         <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                           <FormControl>
//                             <Checkbox
//                               checked={field.value}
//                               onCheckedChange={field.onChange}
//                               className="mt-1 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
//                             />
//                           </FormControl>
//                           <div className="space-y-1 leading-none">
//                             <FormLabel className="text-sm text-gray-600">
//                               I agree to the{" "}
//                               <a href="#" className="text-blue-600 hover:underline font-medium">
//                                 Privacy Policy
//                               </a>{" "}
//                               and consent to being contacted about 4D Solutions products and services.
//                             </FormLabel>
//                             <FormMessage className="text-red-500 text-xs" />
//                           </div>
//                         </FormItem>
//                       )}
//                     />
                    
//                     <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
//                       <Button 
//                         type="submit" 
//                         disabled={isSubmitting}
//                         className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium"
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <div className="h-5 w-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                             Sending...
//                           </>
//                         ) : (
//                           <>
//                             Send Message
//                             <Send className="h-5 w-5 ml-2" />
//                           </>
//                         )}
//                       </Button>
//                     </motion.div>
//                   </form>
//                 </Form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
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
import { Phone, Mail, MessageSquare, Calendar, Download, DollarSign, Send, MapPin, Clock, Users, ChevronRight } from "lucide-react";

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
    color: "bg-blue-500"
  },
  {
    icon: Mail,
    title: "Email Support",
    value: "support@4dsolutions.com",
    subtitle: "Response within 2 hours",
    color: "bg-green-500"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    value: "Start Chat",
    subtitle: "Instant messaging support",
    color: "bg-purple-500"
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "123 Compliance Ave, Boston, MA",
    subtitle: "Global offices available",
    color: "bg-orange-500"
  }
];

const quickActions = [
  { 
    icon: Calendar, 
    title: "Schedule a Demo", 
    variant: "default" as const,
    description: "See our software in action"
  },
  { 
    icon: Download, 
    title: "Download Brochure", 
    variant: "outline" as const,
    description: "Product specifications PDF"
  },
  { 
    icon: DollarSign, 
    title: "Request Quote", 
    variant: "outline" as const,
    description: "Personalized pricing"
  }
];

const stats = [
  { value: "2h", label: "Avg. Response Time" },
  { value: "24/7", label: "Support Availability" },
  { value: "100%", label: "Client Satisfaction" }
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
    <section 
      className="relative py-20 overflow-hidden min-h-screen flex items-center"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 18s ease infinite",
      }}
    >
      {/* Animated background blobs - Same as Hero */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-400 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="inline-flex items-center rounded-full bg-blue-500/30 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-4 border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Get In Touch
          </motion.div>
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Contact our regulatory compliance experts to discuss your software validation needs.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className={`w-12 h-12 ${info.color}/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:${info.color}/30 transition-colors duration-300 border border-white/10`}>
                    <info.icon className={`text-white h-6 w-6`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-white font-medium">{info.value}</p>
                    <p className="text-sm text-blue-100">{info.subtitle}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 bg-gradient-to-r from-blue-600/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs opacity-80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            
            {/* Quick Actions Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-white mb-4 text-lg">Quick Actions</h3>
                  <div className="space-y-3">
                    {quickActions.map((action, index) => (
                      <Button 
                        key={index}
                        variant={action.variant}
                        className={`w-full justify-between items-center py-5 rounded-xl ${
                          action.variant === 'default' 
                            ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-green-500/25 border-0' 
                            : 'bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-colors duration-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`mr-3 p-2 rounded-lg ${action.variant === 'default' ? 'bg-green-700/30 backdrop-blur-sm border border-white/10' : 'bg-white/10 backdrop-blur-sm border border-white/10'}`}>
                            <action.icon className={`h-4 w-4 ${action.variant === 'default' ? 'text-white' : 'text-white'}`} />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">{action.title}</div>
                            <div className={`text-xs ${action.variant === 'default' ? 'text-blue-100' : 'text-blue-100'}`}>
                              {action.description}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10 overflow-hidden relative">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-600/20 rounded-full translate-y-12 -translate-x-12"></div>
              
              <CardContent className="p-0 relative z-10">
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
                  <p className="text-blue-100">Our team will respond within 2 hours</p>
                </motion.div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-white">
                              First Name *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John" 
                                className="bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-100 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-300 text-xs" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-white">
                              Last Name *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Doe" 
                                className="bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-100 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-300 text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="john.doe@company.com" 
                              className="bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-100 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-300 text-xs" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            Company
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Company Name" 
                              className="bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-100 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-300 text-xs" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            Department *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/5 backdrop-blur-sm border-white/20 text-white focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4">
                                <SelectValue placeholder="Select Department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-gray-800 text-white border-white/20">
                              <SelectItem value="quality">Quality Assurance</SelectItem>
                              <SelectItem value="regulatory">Regulatory Affairs</SelectItem>
                              <SelectItem value="it">IT/Systems</SelectItem>
                              <SelectItem value="operations">Operations</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-300 text-xs" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            Message *
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4}
                              placeholder="Tell us about your compliance software needs..." 
                              className="bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-100 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-300 text-xs" />
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
                              className="mt-1 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 bg-white/5 backdrop-blur-sm border-white/20"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-blue-100">
                              I agree to the{" "}
                              <a href="#" className="text-white hover:underline font-medium">
                                Privacy Policy
                              </a>{" "}
                              and consent to being contacted about 4D Solutions products and services.
                            </FormLabel>
                            <FormMessage className="text-red-300 text-xs" />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 font-medium"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-5 w-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}