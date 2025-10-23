// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Shield, Cog, BarChart3, CheckCircle } from "lucide-react";

// const solutions = [
//   {
//     icon: Shield,
//     title: "Data Integrity",
//     description: "ALCOA+ principles built into every module with tamper-evident audit trails and secure e-signatures.",
//     features: [
//       "Electronic signatures (21 CFR Part 11)",
//       "Complete audit trails",
//       "Access controls & user management"
//     ]
//   },
//   {
//     icon: Cog,
//     title: "Workflow Automation",
//     description: "Reduce manual errors and ensure consistent processes with automated workflows and notifications.",
//     features: [
//       "Automated data collection",
//       "Real-time alerts & notifications",
//       "Workflow validation tools"
//     ]
//   },
//   {
//     icon: BarChart3,
//     title: "Regulatory Reporting",
//     description: "Generate inspection-ready reports with built-in templates for FDA, EMA, and other regulatory bodies.",
//     features: [
//       "Pre-validated report templates",
//       "Automated report generation",
//       "Multi-format export (PDF, CSV, XML)"
//     ]
//   }
// ];

// export default function Solutions() {
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
//             Complete Regulatory Solutions
//           </h2>
//           <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//             Streamline compliance workflows across your entire organization 
//             with integrated software solutions.
//           </p>
//         </motion.div>
        
//         <div className="grid lg:grid-cols-3 gap-8">
//           {solutions.map((solution, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Card className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
//                 <CardContent className="p-0">
//                   <div className="w-16 h-16 bg-primary-blue/10 rounded-lg flex items-center justify-center mb-6">
//                     <solution.icon className="text-primary-blue h-8 w-8" />
//                   </div>
//                   <h3 className="text-xl font-bold text-dark-grey mb-4">{solution.title}</h3>
//                   <p className="text-medium-grey mb-6">{solution.description}</p>
//                   <div className="space-y-2">
//                     {solution.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center text-sm text-dark-grey">
//                         <CheckCircle className="h-4 w-4 text-accent-green mr-2 flex-shrink-0" />
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Shield, Cog, BarChart3, CheckCircle, ArrowRight } from "lucide-react";

// const solutions = [
//   {
//     icon: Shield,
//     title: "Data Integrity",
//     description: "ALCOA+ principles built into every module with tamper-evident audit trails and secure e-signatures.",
//     features: [
//       "Electronic signatures (21 CFR Part 11)",
//       "Complete audit trails",
//       "Access controls & user management"
//     ]
//   },
//   {
//     icon: Cog,
//     title: "Workflow Automation",
//     description: "Reduce manual errors and ensure consistent processes with automated workflows and notifications.",
//     features: [
//       "Automated data collection",
//       "Real-time alerts & notifications",
//       "Workflow validation tools"
//     ]
//   },
//   {
//     icon: BarChart3,
//     title: "Regulatory Reporting",
//     description: "Generate inspection-ready reports with built-in templates for FDA, EMA, and other regulatory bodies.",
//     features: [
//       "Pre-validated report templates",
//       "Automated report generation",
//       "Multi-format export (PDF, CSV, XML)"
//     ]
//   }
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6
//     }
//   }
// };

// export default function Solutions() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
//             <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
//             Integrated Solutions
//           </div>
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//             Complete Regulatory Solutions
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Streamline compliance workflows across your entire organization 
//             with integrated software solutions.
//           </p>
//         </motion.div>
        
//         <motion.div 
//           className="grid lg:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {solutions.map((solution, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//             >
//               <Card className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full group relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
//                 <CardContent className="p-0 relative z-10">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
//                     <solution.icon className="text-white h-8 w-8" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">{solution.title}</h3>
//                   <p className="text-gray-600 mb-6">{solution.description}</p>
//                   <div className="space-y-3">
//                     {solution.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
//                         <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                   <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
//                     <div className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
//                       Explore features
//                       <ArrowRight className="h-4 w-4 ml-1" />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Cog, BarChart3, CheckCircle, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Data Integrity",
    description: "ALCOA+ principles built into every module with tamper-evident audit trails and secure e-signatures.",
    features: [
      "Electronic signatures (21 CFR Part 11)",
      "Complete audit trails",
      "Access controls & user management"
    ]
  },
  {
    icon: Cog,
    title: "Workflow Automation",
    description: "Reduce manual errors and ensure consistent processes with automated workflows and notifications.",
    features: [
      "Automated data collection",
      "Real-time alerts & notifications",
      "Workflow validation tools"
    ]
  },
  {
    icon: BarChart3,
    title: "Regulatory Reporting",
    description: "Generate inspection-ready reports with built-in templates for FDA, EMA, and other regulatory bodies.",
    features: [
      "Pre-validated report templates",
      "Automated report generation",
      "Multi-format export (PDF, CSV, XML)"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Solutions() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 18s ease infinite",
      }}
    >
      {/* Floating blurred blobs */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-cyan-300 mb-4">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            Integrated Solutions
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Complete Regulatory Solutions
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Streamline compliance workflows across your entire organization
            with integrated software solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <CardContent className="p-0 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <solution.icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-blue-100 mb-6">{solution.description}</p>
                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-blue-100 group-hover:text-white transition-colors duration-300"
                      >
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20 group-hover:border-white/40 transition-colors duration-300">
                    <div className="inline-flex items-center text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                      Explore features
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
