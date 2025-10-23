  // import { Helmet } from "react-helmet-async";
  // import { motion } from "framer-motion";
  // import { Card, CardContent } from "@/components/ui/card";
  // import { Button } from "@/components/ui/button";
  // import { Badge } from "@/components/ui/badge";
  // import { 
  //   Award, 
  //   Users, 
  //   Globe, 
  //   Calendar,
  //   MapPin,
  //   Mail,
  //   Phone,
  //   Linkedin,
  //   CheckCircle
  // } from "lucide-react";

  // const aboutFeatures = [
  //   {
  //     icon: Award,
  //     title: "ISO 27001 Certified",
  //     description: "Information security management systems certified to international standards"
  //   },
  //   {
  //     icon: Users,
  //     title: "Expert Team",
  //     description: "Former FDA validators and compliance specialists with decades of experience"
  //   },
  //   {
  //     icon: Globe,
  //     title: "Global Reach",
  //     description: "Supporting regulated industries worldwide with 24/7 support coverage"
  //   }
  // ];

  // const teamMembers = [
  //   {
  //     name: "Dr. Sarah Johnson",
  //     role: "Chief Executive Officer",
  //     bio: "Former FDA validator with 20+ years in pharmaceutical compliance. Led validation efforts for Fortune 500 companies.",
  //     image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  //     linkedin: "#"
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "Chief Technology Officer",
  //     bio: "Software architect specializing in regulatory compliance systems. Expert in 21 CFR Part 11 implementation.",
  //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  //     linkedin: "#"
  //   },
  //   {
  //     name: "Dr. Emily Rodriguez",
  //     role: "VP of Regulatory Affairs",
  //     bio: "Biotech industry veteran with expertise in FDA submissions and compliance strategy across multiple therapeutic areas.",
  //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  //     linkedin: "#"
  //   },
  //   {
  //     name: "David Park",
  //     role: "VP of Quality Assurance",
  //     bio: "Quality systems expert with extensive experience in pharmaceutical manufacturing and medical device industries.",
  //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  //     linkedin: "#"
  //   }
  // ];

  // const certifications = [
  //   "ISO 27001:2013 Information Security Management",
  //   "SOC 2 Type II Compliance",
  //   "FDA 21 CFR Part 11 Validation",
  //   "GDPR Data Protection Compliance",
  //   "HIPAA Security Standards",
  //   "ISO 13485 Medical Devices Quality"
  // ];

  // const milestones = [
  //   { year: "2008", event: "4D Solutions founded by regulatory compliance experts" },
  //   { year: "2010", event: "First FDA 21 CFR Part 11 software validation completed" },
  //   { year: "2012", event: "Expanded to serve European pharmaceutical market" },
  //   { year: "2015", event: "Achieved ISO 27001 certification for security standards" },
  //   { year: "2018", event: "Launched cloud-based compliance platform" },
  //   { year: "2020", event: "Reached 500+ successful software validations" },
  //   { year: "2022", event: "Expanded to Asia-Pacific markets" },
  //   { year: "2024", event: "Celebrating 15+ years of regulatory excellence" }
  // ];

  // export default function About() {
  //   return (
  //     <>
  //       <Helmet>
  //         <title>About - 15+ Years of Regulatory Compliance Excellence</title>
  //         <meta 
  //           name="description" 
  //           content="Founded by regulatory compliance experts, 4D Solutions has been at the forefront of FDA 21 CFR Part 11 software development since 2008. Meet our team and learn our story." 
  //         />
  //         <meta 
  //           name="keywords" 
  //           content="4D Solutions, regulatory compliance, FDA validation, pharmaceutical software, biotech solutions, compliance experts" 
  //         />
  //       </Helmet>
        
  //       <div className="min-h-screen bg-white">
  //         {/* Header Section */}
  //         <section className="bg-gradient-to-br from-light-grey to-white py-20">
  //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //             <motion.div 
  //               className="text-center"
  //               initial={{ opacity: 0, y: 30 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               transition={{ duration: 0.8 }}
  //             >
  //               <h1 className="text-4xl lg:text-5xl font-bold text-dark-grey mb-6">
  //                 15+ Years of Regulatory Excellence
  //               </h1>
  //               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
  //                 Founded by regulatory compliance experts, 4D Solutions has been at the 
  //                 forefront of FDA 21 CFR Part 11 software development since 2008.
  //               </p>
  //             </motion.div>
  //           </div>
  //         </section>

  //         {/* Company Overview */}
  //         <section className="py-20">
  //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //             <div className="grid lg:grid-cols-2 gap-16 items-center">
  //               <motion.div 
  //                 className="space-y-8"
  //                 initial={{ opacity: 0, x: -30 }}
  //                 whileInView={{ opacity: 1, x: 0 }}
  //                 transition={{ duration: 0.8 }}
  //                 viewport={{ once: true }}
  //               >
  //                 <div className="space-y-6">
  //                   <h2 className="text-3xl lg:text-4xl font-bold text-dark-grey">
  //                     Our Mission
  //                   </h2>
  //                   <p className="text-xl text-medium-grey leading-relaxed">
  //                     To provide regulatory-grade software solutions that ensure compliance, 
  //                     data integrity, and operational excellence for organizations in regulated industries.
  //                   </p>
  //                   <p className="text-lg text-medium-grey leading-relaxed">
  //                     We believe that compliance should enhance, not hinder, business operations. 
  //                     Our solutions are designed to streamline regulatory processes while maintaining 
  //                     the highest standards of data integrity and security.
  //                   </p>
  //                 </div>
                  
  //                 <div className="space-y-6">
  //                   {aboutFeatures.map((feature, index) => (
  //                     <motion.div 
  //                       key={index}
  //                       className="flex items-center space-x-4"
  //                       initial={{ opacity: 0, x: -20 }}
  //                       whileInView={{ opacity: 1, x: 0 }}
  //                       transition={{ duration: 0.6, delay: index * 0.1 }}
  //                       viewport={{ once: true }}
  //                     >
  //                       <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
  //                         <feature.icon className="text-primary-blue h-6 w-6" />
  //                       </div>
  //                       <div>
  //                         <h3 className="font-semibold text-dark-grey">{feature.title}</h3>
  //                         <p className="text-medium-grey">{feature.description}</p>
  //                       </div>
  //                     </motion.div>
  //                   ))}
  //                 </div>
  //               </motion.div>
                
  //               <motion.div 
  //                 className="relative"
  //                 initial={{ opacity: 0, x: 30 }}
  //                 whileInView={{ opacity: 1, x: 0 }}
  //                 transition={{ duration: 0.8, delay: 0.2 }}
  //                 viewport={{ once: true }}
  //               >
  //                 <img 
  //                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
  //                   alt="Professional team meeting discussing compliance strategies" 
  //                   className="rounded-2xl shadow-2xl w-full"
  //                 />
                  
  //                 <motion.div 
  //                   className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
  //                   initial={{ opacity: 0, scale: 0.8 }}
  //                   whileInView={{ opacity: 1, scale: 1 }}
  //                   transition={{ duration: 0.6, delay: 0.6 }}
  //                   viewport={{ once: true }}
  //                 >
  //                   <div className="text-center">
  //                     <div className="text-3xl font-bold text-primary-blue mb-2">500+</div>
  //                     <div className="text-sm text-medium-grey">Successful Validations</div>
  //                   </div>
  //                 </motion.div>
  //               </motion.div>
  //             </div>
  //           </div>
  //         </section>

  //         {/* Leadership Team */}
  //         <section className="py-20 bg-light-grey">
  //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //             <motion.div 
  //               className="text-center mb-16"
  //               initial={{ opacity: 0, y: 30 }}
  //               whileInView={{ opacity: 1, y: 0 }}
  //               transition={{ duration: 0.6 }}
  //               viewport={{ once: true }}
  //             >
  //               <h2 className="text-3xl lg:text-4xl font-bold text-dark-grey mb-4">
  //                 Leadership Team
  //               </h2>
  //               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
  //                 Our experienced leadership team brings decades of regulatory expertise 
  //                 and technical innovation to every project.
  //               </p>
  //             </motion.div>
              
  //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  //               {teamMembers.map((member, index) => (
  //                 <motion.div
  //                   key={index}
  //                   initial={{ opacity: 0, y: 50 }}
  //                   whileInView={{ opacity: 1, y: 0 }}
  //                   transition={{ duration: 0.6, delay: index * 0.1 }}
  //                   viewport={{ once: true }}
  //                 >
  //                   <Card className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center h-full">
  //                     <CardContent className="p-0">
  //                       <img 
  //                         src={member.image} 
  //                         alt={member.name}
  //                         className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
  //                       />
  //                       <h3 className="text-lg font-bold text-dark-grey mb-1">{member.name}</h3>
  //                       <p className="text-primary-blue font-medium mb-3">{member.role}</p>
  //                       <p className="text-sm text-medium-grey mb-4">{member.bio}</p>
  //                       <a 
  //                         href={member.linkedin}
  //                         className="inline-flex items-center justify-center w-8 h-8 bg-primary-blue/10 rounded-lg hover:bg-primary-blue/20 transition-colors"
  //                       >
  //                         <Linkedin className="h-4 w-4 text-primary-blue" />
  //                       </a>
  //                     </CardContent>
  //                   </Card>
  //                 </motion.div>
  //               ))}
  //             </div>
  //           </div>
  //         </section>

  //         {/* Company Timeline */}
  //         <section className="py-20">
  //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //             <motion.div 
  //               className="text-center mb-16"
  //               initial={{ opacity: 0, y: 30 }}
  //               whileInView={{ opacity: 1, y: 0 }}
  //               transition={{ duration: 0.6 }}
  //               viewport={{ once: true }}
  //             >
  //               <h2 className="text-3xl lg:text-4xl font-bold text-dark-grey mb-4">
  //                 Our Journey
  //               </h2>
  //               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
  //                 Key milestones in our commitment to regulatory compliance excellence.
  //               </p>
  //             </motion.div>
              
  //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  //               {milestones.map((milestone, index) => (
  //                 <motion.div
  //                   key={index}
  //                   initial={{ opacity: 0, y: 30 }}
  //                   whileInView={{ opacity: 1, y: 0 }}
  //                   transition={{ duration: 0.6, delay: index * 0.1 }}
  //                   viewport={{ once: true }}
  //                 >
  //                   <Card className="bg-light-grey p-6 h-full">
  //                     <CardContent className="p-0">
  //                       <div className="text-2xl font-bold text-primary-blue mb-2">{milestone.year}</div>
  //                       <p className="text-dark-grey text-sm">{milestone.event}</p>
  //                     </CardContent>
  //                   </Card>
  //                 </motion.div>
  //               ))}
  //             </div>
  //           </div>
  //         </section>

  //         {/* Certifications */}
  //         <section className="py-20 bg-light-grey">
  //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //             <div className="grid lg:grid-cols-2 gap-16 items-center">
  //               <motion.div
  //                 initial={{ opacity: 0, x: -30 }}
  //                 whileInView={{ opacity: 1, x: 0 }}
  //                 transition={{ duration: 0.8 }}
  //                 viewport={{ once: true }}
  //               >
  //                 <div className="space-y-6">
  //                   <h2 className="text-3xl lg:text-4xl font-bold text-dark-grey">
  //                     Certifications & Standards
  //                   </h2>
  //                   <p className="text-xl text-medium-grey leading-relaxed">
  //                     Our commitment to quality and security is validated through rigorous 
  //                     third-party certifications and adherence to international standards.
  //                   </p>
                    
  //                   <div className="space-y-3">
  //                     {certifications.map((cert, index) => (
  //                       <motion.div
  //                         key={index}
  //                         className="flex items-center space-x-3"
  //                         initial={{ opacity: 0, x: -20 }}
  //                         whileInView={{ opacity: 1, x: 0 }}
  //                         transition={{ duration: 0.4, delay: index * 0.1 }}
  //                         viewport={{ once: true }}
  //                       >
  //                         <CheckCircle className="h-5 w-5 text-accent-green" />
  //                         <span className="text-dark-grey font-medium">{cert}</span>
  //                       </motion.div>
  //                     ))}
  //                   </div>
  //                 </div>
  //               </motion.div>
                
  //               <motion.div
  //                 initial={{ opacity: 0, x: 30 }}
  //                 whileInView={{ opacity: 1, x: 0 }}
  //                 transition={{ duration: 0.8, delay: 0.2 }}
  //                 viewport={{ once: true }}
  //               >
  //                 <Card className="bg-white p-8">
  //                   <CardContent className="p-0">
  //                     <h3 className="text-xl font-bold text-dark-grey mb-6">Contact Information</h3>
  //                     <div className="space-y-4">
  //                       <div className="flex items-center space-x-3">
  //                         <MapPin className="h-5 w-5 text-primary-blue" />
  //                         <span className="text-dark-grey">
  //                           123 Compliance Way, Regulatory Plaza, Suite 400<br />
  //                           Boston, MA 02101
  //                         </span>
  //                       </div>
  //                       <div className="flex items-center space-x-3">
  //                         <Phone className="h-5 w-5 text-primary-blue" />
  //                         <span className="text-dark-grey">+1 (555) 123-4567</span>
  //                       </div>
  //                       <div className="flex items-center space-x-3">
  //                         <Mail className="h-5 w-5 text-primary-blue" />
  //                         <span className="text-dark-grey">info@4dsolutions.com</span>
  //                       </div>
  //                     </div>
                      
  //                     <div className="flex space-x-4 mt-8">
  //                       <Button className="bg-primary-blue hover:bg-blue-700 text-white">
  //                         Contact Us
  //                       </Button>
  //                       <Button 
  //                         variant="outline" 
  //                         className="border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
  //                       >
  //                         Careers
  //                       </Button>
  //                     </div>
  //                   </CardContent>
  //                 </Card>
  //               </motion.div>
  //             </div>
  //           </div>
  //         </section>
  //       </div>
  //     </>
  //   );
  // }


  
"use client";

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Globe, 
  MapPin,
  Mail,
  Phone,
  Linkedin,
  CheckCircle
} from "lucide-react";

const aboutFeatures = [
  {
    icon: Award,
    title: "ISO 27001 Certified",
    description: "Information security management systems certified to international standards"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Former FDA validators and compliance specialists with decades of experience"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Supporting regulated industries worldwide with 24/7 support coverage"
  }
];

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "Former FDA validator with 20+ years in pharmaceutical compliance. Led validation efforts for Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    linkedin: "#"
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Software architect specializing in regulatory compliance systems. Expert in 21 CFR Part 11 implementation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    linkedin: "#"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "VP of Regulatory Affairs",
    bio: "Biotech industry veteran with expertise in FDA submissions and compliance strategy across multiple therapeutic areas.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    linkedin: "#"
  },
  {
    name: "David Park",
    role: "VP of Quality Assurance",
    bio: "Quality systems expert with extensive experience in pharmaceutical manufacturing and medical device industries.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    linkedin: "#"
  }
];

const certifications = [
  "ISO 27001:2013 Information Security Management",
  "SOC 2 Type II Compliance",
  "FDA 21 CFR Part 11 Validation",
  "GDPR Data Protection Compliance",
  "HIPAA Security Standards",
  "ISO 13485 Medical Devices Quality"
];

const milestones = [
  { year: "2008", event: "4D Solutions founded by regulatory compliance experts" },
  { year: "2010", event: "First FDA 21 CFR Part 11 software validation completed" },
  { year: "2012", event: "Expanded to serve European pharmaceutical market" },
  { year: "2015", event: "Achieved ISO 27001 certification for security standards" },
  { year: "2018", event: "Launched cloud-based compliance platform" },
  { year: "2020", event: "Reached 500+ successful software validations" },
  { year: "2022", event: "Expanded to Asia-Pacific markets" },
  { year: "2024", event: "Celebrating 15+ years of regulatory excellence" }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - 15+ Years of Regulatory Compliance Excellence</title>
        <meta 
          name="description" 
          content="Founded by regulatory compliance experts, 4D Solutions has been at the forefront of FDA 21 CFR Part 11 software development since 2008. Meet our team and learn our story." 
        />
        <meta 
          name="keywords" 
          content="4D Solutions, regulatory compliance, FDA validation, pharmaceutical software, biotech solutions, compliance experts" 
        />
      </Helmet>
      
      {/* 🌌 Background Wrapper */}
      <div 
        className="relative min-h-screen flex flex-col"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 18s ease infinite",
        }}
      >
        {/* Floating blobs */}
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

        {/* Page Content */}
        <div className="relative z-10 text-white">
          {/* Header Section */}
          <section className="py-20 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
                  15+ Years of Regulatory Excellence
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Founded by regulatory compliance experts, 4D Solutions has been at the 
                  forefront of FDA 21 CFR Part 11 software development since 2008.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Company Overview */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold">
                      Our Mission
                    </h2>
                    <p className="text-xl text-blue-100 leading-relaxed">
                      To provide regulatory-grade software solutions that ensure compliance, 
                      data integrity, and operational excellence for organizations in regulated industries.
                    </p>
                    <p className="text-lg text-blue-100 leading-relaxed">
                      We believe that compliance should enhance, not hinder, business operations. 
                      Our solutions are designed to streamline regulatory processes while maintaining 
                      the highest standards of data integrity and security.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {aboutFeatures.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="text-green-300 h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{feature.title}</h3>
                          <p className="text-blue-100">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Professional team meeting discussing compliance strategies" 
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  
                  <motion.div 
                    className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300 mb-2">500+</div>
                      <div className="text-sm text-blue-100">Successful Validations</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Leadership Team
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Our experienced leadership team brings decades of regulatory expertise 
                  and technical innovation to every project.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center h-full">
                      <CardContent className="p-0">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-white/20"
                        />
                        <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                        <p className="text-green-300 font-medium mb-3">{member.role}</p>
                        <p className="text-sm text-blue-100 mb-4">{member.bio}</p>
                        <a 
                          href={member.linkedin}
                          className="inline-flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <Linkedin className="h-4 w-4 text-green-300" />
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Timeline */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Our Journey
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Key milestones in our commitment to regulatory compliance excellence.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/10 backdrop-blur-md p-6 h-full rounded-lg shadow-md">
                      <CardContent className="p-0">
                        <div className="text-2xl font-bold text-green-300 mb-2">{milestone.year}</div>
                        <p className="text-blue-100 text-sm">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold">
                      Certifications & Standards
                    </h2>
                    <p className="text-xl text-blue-100 leading-relaxed">
                      Our commitment to quality and security is validated through rigorous 
                      third-party certifications and adherence to international standards.
                    </p>
                    
                    <div className="space-y-3">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-300" />
                          <span className="font-medium">{cert}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                      <div className="space-y-4 text-blue-100">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-green-300" />
                          <span>
                            123 Compliance Way, Regulatory Plaza, Suite 400<br />
                            Boston, MA 02101
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-green-300" />
                          <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-green-300" />
                          <span>info@4dsolutions.com</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4 mt-8">
                        <Button className="bg-green-500 hover:bg-green-600 text-white">
                          Contact Us
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border border-green-400 text-green-300 hover:bg-green-500 hover:text-white"
                        >
                          Careers
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
