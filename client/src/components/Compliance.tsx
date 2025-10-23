// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { FileText, History, Lock, Database, Tag } from "lucide-react";

// const complianceFeatures = [
//   {
//     icon: FileText,
//     title: "Electronic Signatures",
//     description: "Legally binding e-signatures with user authentication and non-repudiation controls."
//   },
//   {
//     icon: History,
//     title: "Complete Audit Trails",
//     description: "Comprehensive logging of all system activities with tamper-evident records."
//   },
//   {
//     icon: Lock,
//     title: "Access Controls",
//     description: "Role-based permissions and secure user management with password policies."
//   },
//   {
//     icon: Database,
//     title: "Data Integrity",
//     description: "ALCOA+ compliant data handling with validation and verification processes."
//   }
// ];

// export default function Compliance() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div 
//             className="space-y-8"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="space-y-4">
//               <Badge className="inline-flex items-center px-3 py-1 bg-accent-green/10 text-accent-green border-0">
//                 <Tag className="h-4 w-4 mr-2" />
//                 FDA Validated
//               </Badge>
//               <h2 className="text-3xl lg:text-4xl font-bold text-dark-grey">
//                 Built for Regulatory Excellence
//               </h2>
//               <p className="text-xl text-medium-grey leading-relaxed">
//                 Every feature designed with 21 CFR Part 11 compliance at its core. 
//                 From secure user authentication to complete audit trails, our software 
//                 meets the highest regulatory standards.
//               </p>
//             </div>
            
//             <div className="space-y-6">
//               {complianceFeatures.map((feature, index) => (
//                 <motion.div 
//                   key={index}
//                   className="flex items-start space-x-4"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="w-8 h-8 bg-accent-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
//                     <feature.icon className="text-accent-green h-4 w-4" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-dark-grey mb-2">{feature.title}</h3>
//                     <p className="text-medium-grey">{feature.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             <Button 
//               size="lg"
//               className="bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 text-lg"
//             >
//               <FileText className="h-5 w-5 mr-3" />
//               Download Compliance Guide
//             </Button>
//           </motion.div>
          
//           <motion.div 
//             className="relative"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
//               alt="Regulatory compliance documentation workflow" 
//               className="rounded-2xl shadow-2xl w-full"
//             />
            
//             <motion.div 
//               className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center space-x-3">
//                 <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
//                 <span className="text-sm font-medium text-dark-grey">Audit Trail Active</span>
//               </div>
//             </motion.div>
            
//             <motion.div 
//               className="absolute -bottom-4 -left-4 bg-secondary-blue text-white p-6 rounded-xl shadow-xl"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="text-center">
//                 <div className="text-2xl font-bold mb-1">100%</div>
//                 <div className="text-sm opacity-90">Compliance Rate</div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { FileText, History, Lock, Database, Tag, CheckCircle, ArrowRight } from "lucide-react";

// const complianceFeatures = [
//   {
//     icon: FileText,
//     title: "Electronic Signatures",
//     description: "Legally binding e-signatures with user authentication and non-repudiation controls."
//   },
//   {
//     icon: History,
//     title: "Complete Audit Trails",
//     description: "Comprehensive logging of all system activities with tamper-evident records."
//   },
//   {
//     icon: Lock,
//     title: "Access Controls",
//     description: "Role-based permissions and secure user management with password policies."
//   },
//   {
//     icon: Database,
//     title: "Data Integrity",
//     description: "ALCOA+ compliant data handling with validation and verification processes."
//   }
// ];

// export default function Compliance() {
//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-[0.03] z-0">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, #1e40af 1px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }}></div>
//       </div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div 
//             className="space-y-8"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <div className="space-y-4">
//               <Badge className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 border-0 rounded-full font-medium">
//                 <Tag className="h-4 w-4 mr-2" />
//                 FDA Validated
//               </Badge>
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
//                 Built for Regulatory Excellence
//               </h2>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 Every feature designed with 21 CFR Part 11 compliance at its core. 
//                 From secure user authentication to complete audit trails, our software 
//                 meets the highest regulatory standards.
//               </p>
//             </div>
            
//             <div className="space-y-6">
//               {complianceFeatures.map((feature, index) => (
//                 <motion.div 
//                   key={index}
//                   className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                 >
//                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
//                     <feature.icon className="text-blue-600 h-5 w-5" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                     <p className="text-gray-600">{feature.description}</p>
//                   </div>
//                   <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </motion.div>
//               ))}
//             </div>
            
//             <Button 
//               size="lg"
//               className="bg-primary-blue hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
//             >
//               <FileText className="h-5 w-5 mr-3" />
//               Download Compliance Guide
//               <ArrowRight className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//             </Button>
//           </motion.div>
          
//           <motion.div 
//             className="relative"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 z-10"></div>
//               <img 
//                 src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
//                 alt="Regulatory compliance documentation workflow" 
//                 className="w-full h-auto"
//               />
//             </div>
            
//             <motion.div 
//               className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               <div className="flex items-center space-x-3">
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="text-sm font-medium text-gray-700">Audit Trail Active</span>
//               </div>
//             </motion.div>
            
//             <motion.div 
//               className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-xl"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               <div className="text-center">
//                 <div className="text-2xl font-bold mb-1">100%</div>
//                 <div className="text-sm opacity-90">Compliance Rate</div>
//               </div>
//             </motion.div>

//             <motion.div 
//               className="absolute -bottom-6 right-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-2"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 1.0 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               <div className="flex -space-x-2">
//                 {[1, 2, 3].map(i => (
//                   <div key={i} className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center">
//                     <span className="text-xs font-bold text-blue-600">{i}</span>
//                   </div>
//                 ))}
//               </div>
//               <span className="text-sm font-medium text-gray-700">Certified Modules</span>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  History,
  Lock,
  Database,
  Tag,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const complianceFeatures = [
  {
    icon: FileText,
    title: "Electronic Signatures",
    description:
      "Legally binding e-signatures with user authentication and non-repudiation controls.",
  },
  {
    icon: History,
    title: "Complete Audit Trails",
    description:
      "Comprehensive logging of all system activities with tamper-evident records.",
  },
  {
    icon: Lock,
    title: "Access Controls",
    description:
      "Role-based permissions and secure user management with password policies.",
  },
  {
    icon: Database,
    title: "Data Integrity",
    description:
      "ALCOA+ compliant data handling with validation and verification processes.",
  },
];

export default function Compliance() {
  return (
    <section
      className="relative overflow-hidden py-24 flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 18s ease infinite",
      }}
    >
      {/* Animated background blobs (from Hero) */}
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

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Badge + Heading */}
            <Badge className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-green-400/30 to-green-600/30 text-white rounded-full font-semibold shadow-md border border-white/20 backdrop-blur-md">
              <Tag className="h-4 w-4 mr-2 text-green-300" />
              FDA Validated
            </Badge>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-snug drop-shadow-lg">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 animate-gradient">
                Regulatory Excellence
              </span>
            </h2>

            <p className="text-lg lg:text-xl text-blue-100 max-w-xl">
              Every feature designed with <span className="font-semibold">21 CFR Part 11</span>{" "}
              compliance at its core. From secure authentication to complete audit trails,
              our platform ensures{" "}
              <span className="text-green-300">absolute trust</span>.
            </p>

            {/* FEATURES LIST */}
            <div className="space-y-6">
              {complianceFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  className="group flex items-start space-x-5 p-5 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="text-cyan-300 h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </div>
                  <CheckCircle className="h-6 w-6 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 text-lg rounded-full shadow-xl hover:shadow-green-500/30 transition-all duration-300"
            >
              <FileText className="h-5 w-5 mr-3" />
              Download Compliance Guide
              <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-all" />
            </Button>
          </motion.div>

          {/* RIGHT VISUALS */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-green-600/20 z-10 mix-blend-multiply"></div>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Compliance workflow"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">
                  Audit Trail Active
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-6 bg-gradient-to-br from-green-500 to-cyan-600 text-white p-6 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80">Compliance Rate</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center space-x-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-blue-500/30 rounded-full border-2 border-white flex items-center justify-center text-white"
                  >
                    <span className="text-xs font-bold">{i}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-white">
                Certified Modules
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
