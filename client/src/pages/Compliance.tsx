// import { Helmet } from "react-helmet-async";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { 
//   FileText, 
//   History, 
//   Lock, 
//   Database, 
//   Tag,
//   Shield,
//   CheckCircle,
//   Download,
//   Users,
//   Clock,
//   FileCheck
// } from "lucide-react";

// const complianceFeatures = [
//   {
//     icon: FileText,
//     title: "Electronic Signatures",
//     description: "Legally binding e-signatures with user authentication and non-repudiation controls.",
//     details: [
//       "Multi-factor authentication",
//       "Biometric verification options",
//       "Digital certificates integration",
//       "Signature verification workflows"
//     ]
//   },
//   {
//     icon: History,
//     title: "Complete Audit Trails",
//     description: "Comprehensive logging of all system activities with tamper-evident records.",
//     details: [
//       "Real-time activity logging",
//       "Immutable record storage",
//       "Change tracking and versioning",
//       "Automated compliance reporting"
//     ]
//   },
//   {
//     icon: Lock,
//     title: "Access Controls",
//     description: "Role-based permissions and secure user management with password policies.",
//     details: [
//       "Role-based access control (RBAC)",
//       "Multi-level approval workflows",
//       "Session management",
//       "Password complexity enforcement"
//     ]
//   },
//   {
//     icon: Database,
//     title: "Data Integrity",
//     description: "ALCOA+ compliant data handling with validation and verification processes.",
//     details: [
//       "Data validation rules",
//       "Automated backup systems",
//       "Version control management",
//       "Data migration tracking"
//     ]
//   }
// ];

// const complianceStats = [
//   { icon: Users, value: "500+", label: "Validated Deployments" },
//   { icon: Clock, value: "24/7", label: "Monitoring" },
//   { icon: FileCheck, value: "100%", label: "Audit Success Rate" },
//   { icon: Shield, value: "15+", label: "Years Experience" }
// ];

// const regulatoryBodies = [
//   "FDA (United States)",
//   "EMA (European Union)",
//   "Health Canada",
//   "TGA (Australia)",
//   "PMDA (Japan)",
//   "ANVISA (Brazil)"
// ];

// export default function Compliance() {
//   return (
//     <>
//       <Helmet>
//         <title>Compliance - FDA 21 CFR Part 11 Regulatory Standards</title>
//         <meta 
//           name="description" 
//           content="Comprehensive FDA 21 CFR Part 11 compliance features including electronic signatures, audit trails, access controls, and data integrity. Trusted by regulated industries worldwide." 
//         />
//         <meta 
//           name="keywords" 
//           content="FDA 21 CFR Part 11, compliance, electronic signatures, audit trails, data integrity, regulatory software, pharmaceutical compliance" 
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
//               <Badge className="inline-flex items-center px-4 py-2 bg-accent-green/10 text-accent-green border-0 mb-6">
//                 <Tag className="h-5 w-5 mr-2" />
//                 FDA 21 CFR Part 11 Validated
//               </Badge>
//               <h1 className="text-4xl lg:text-5xl font-bold text-dark-grey mb-6">
//                 Built for Regulatory Excellence
//               </h1>
//               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//                 Every feature designed with 21 CFR Part 11 compliance at its core. 
//                 From secure user authentication to complete audit trails, our software 
//                 meets the highest regulatory standards.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Compliance Stats */}
//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid md:grid-cols-4 gap-8">
//               {complianceStats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="text-center"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="w-16 h-16 bg-primary-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
//                     <stat.icon className="text-primary-blue h-8 w-8" />
//                   </div>
//                   <div className="text-3xl font-bold text-primary-blue mb-2">{stat.value}</div>
//                   <div className="text-medium-grey">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Compliance Features */}
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
//                 Comprehensive Compliance Features
//               </h2>
//               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//                 Our software includes all essential components for FDA 21 CFR Part 11 compliance, 
//                 ensuring your organization meets regulatory requirements.
//               </p>
//             </motion.div>
            
//             <div className="grid lg:grid-cols-2 gap-8">
//               {complianceFeatures.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
//                     <CardContent className="p-0">
//                       <div className="flex items-center space-x-4 mb-6">
//                         <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center">
//                           <feature.icon className="text-accent-green h-6 w-6" />
//                         </div>
//                         <h3 className="text-xl font-bold text-dark-grey">{feature.title}</h3>
//                       </div>
                      
//                       <p className="text-medium-grey mb-6">{feature.description}</p>
                      
//                       <div className="space-y-2">
//                         {feature.details.map((detail, detailIndex) => (
//                           <div key={detailIndex} className="flex items-center text-sm text-dark-grey">
//                             <CheckCircle className="h-4 w-4 text-accent-green mr-2 flex-shrink-0" />
//                             {detail}
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Regulatory Bodies */}
//         <section className="py-20 bg-white">
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
//                     Global Regulatory Compliance
//                   </h2>
//                   <p className="text-xl text-medium-grey leading-relaxed">
//                     Our software meets the stringent requirements of regulatory bodies worldwide, 
//                     ensuring your organization can operate globally with confidence.
//                   </p>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     {regulatoryBodies.map((body, index) => (
//                       <motion.div
//                         key={index}
//                         className="flex items-center space-x-2"
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.4, delay: index * 0.1 }}
//                         viewport={{ once: true }}
//                       >
//                         <CheckCircle className="h-4 w-4 text-accent-green" />
//                         <span className="text-dark-grey font-medium">{body}</span>
//                       </motion.div>
//                     ))}
//                   </div>
                  
//                   <Button 
//                     size="lg"
//                     className="bg-primary-blue hover:bg-blue-700 text-white px-8 py-4"
//                   >
//                     <Download className="h-5 w-5 mr-3" />
//                     Download Compliance Guide
//                   </Button>
//                 </div>
//               </motion.div>
              
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <img 
//                   src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
//                   alt="Regulatory compliance documentation workflow" 
//                   className="rounded-2xl shadow-2xl w-full"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-secondary-blue text-white">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl font-bold mb-4">
//                 Ensure Your Compliance Today
//               </h2>
//               <p className="text-xl text-blue-200 mb-8">
//                 Contact our regulatory experts to discuss how our FDA 21 CFR Part 11 compliant 
//                 solutions can meet your specific requirements.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button size="lg" className="bg-accent-green hover:bg-green-600 text-white">
//                   Schedule Compliance Review
//                 </Button>
//                 <Button 
//                   size="lg"
//                   variant="outline" 
//                   className="border-white text-white hover:bg-white hover:text-secondary-blue"
//                 >
//                   Download Compliance Checklist
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  History,
  Lock,
  Database,
  Tag,
  Shield,
  CheckCircle,
  Download,
  Users,
  Clock,
  FileCheck,
} from "lucide-react";

const complianceFeatures = [
  {
    icon: FileText,
    title: "Electronic Signatures",
    description:
      "Legally binding e-signatures with user authentication and non-repudiation controls.",
    details: [
      "Multi-factor authentication",
      "Biometric verification options",
      "Digital certificates integration",
      "Signature verification workflows",
    ],
  },
  {
    icon: History,
    title: "Complete Audit Trails",
    description:
      "Comprehensive logging of all system activities with tamper-evident records.",
    details: [
      "Real-time activity logging",
      "Immutable record storage",
      "Change tracking and versioning",
      "Automated compliance reporting",
    ],
  },
  {
    icon: Lock,
    title: "Access Controls",
    description:
      "Role-based permissions and secure user management with password policies.",
    details: [
      "Role-based access control (RBAC)",
      "Multi-level approval workflows",
      "Session management",
      "Password complexity enforcement",
    ],
  },
  {
    icon: Database,
    title: "Data Integrity",
    description:
      "ALCOA+ compliant data handling with validation and verification processes.",
    details: [
      "Data validation rules",
      "Automated backup systems",
      "Version control management",
      "Data migration tracking",
    ],
  },
];

const complianceStats = [
  { icon: Users, value: "500+", label: "Validated Deployments" },
  { icon: Clock, value: "24/7", label: "Monitoring" },
  { icon: FileCheck, value: "100%", label: "Audit Success Rate" },
  { icon: Shield, value: "15+", label: "Years Experience" },
];

const regulatoryBodies = [
  "FDA (United States)",
  "EMA (European Union)",
  "Health Canada",
  "TGA (Australia)",
  "PMDA (Japan)",
  "ANVISA (Brazil)",
];

export default function Compliance() {
  return (
    <>
      <Helmet>
        <title>Compliance - FDA 21 CFR Part 11 Regulatory Standards</title>
        <meta
          name="description"
          content="Comprehensive FDA 21 CFR Part 11 compliance features including electronic signatures, audit trails, access controls, and data integrity. Trusted by regulated industries worldwide."
        />
        <meta
          name="keywords"
          content="FDA 21 CFR Part 11, compliance, electronic signatures, audit trails, data integrity, regulatory software, pharmaceutical compliance"
        />
      </Helmet>

      <div
        className="relative min-h-screen overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 18s ease infinite",
        }}
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20 z-0">
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
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="inline-flex items-center px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-white border border-white/10 mb-6">
                  <Tag className="h-5 w-5 mr-2" />
                  FDA 21 CFR Part 11 Validated
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
                  Built for Regulatory Excellence
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Every feature designed with 21 CFR Part 11 compliance at its core.
                  From secure user authentication to complete audit trails, our software
                  meets the highest regulatory standards.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Compliance Stats */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                {complianceStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="text-white h-8 w-8" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-blue-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Compliance Features */}
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
                  Comprehensive Compliance Features
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Our software includes all essential components for FDA 21 CFR Part 11
                  compliance, ensuring your organization meets regulatory requirements.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {complianceFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-md border border-white/10 h-full">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                            <feature.icon className="text-white h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-bold">{feature.title}</h3>
                        </div>

                        <p className="text-blue-100 mb-6">{feature.description}</p>

                        <div className="space-y-2">
                          {feature.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Regulatory Bodies */}
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
                      Global Regulatory Compliance
                    </h2>
                    <p className="text-xl text-blue-100 leading-relaxed">
                      Our software meets the stringent requirements of regulatory bodies
                      worldwide, ensuring your organization can operate globally with
                      confidence.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {regulatoryBodies.map((body, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span className="font-medium">{body}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      size="lg"
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 mt-4"
                    >
                      <Download className="h-5 w-5 mr-3" />
                      Download Compliance Guide
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Regulatory compliance documentation workflow"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Ensure Your Compliance Today
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Contact our regulatory experts to discuss how our FDA 21 CFR Part 11
                  compliant solutions can meet your specific requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                    Schedule Compliance Review
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-secondary-blue"
                  >
                    Download Compliance Checklist
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
