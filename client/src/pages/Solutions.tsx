// import { Helmet } from "react-helmet-async";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Shield, Cog, BarChart3, CheckCircle, Building2, Microscope, Stethoscope, FlaskConical } from "lucide-react";

// const solutions = [
//   {
//     icon: Shield,
//     title: "Data Integrity",
//     description: "ALCOA+ principles built into every module with tamper-evident audit trails and secure e-signatures.",
//     features: [
//       "Electronic signatures (21 CFR Part 11)",
//       "Complete audit trails",
//       "Access controls & user management",
//       "Data validation & verification"
//     ]
//   },
//   {
//     icon: Cog,
//     title: "Workflow Automation",
//     description: "Reduce manual errors and ensure consistent processes with automated workflows and notifications.",
//     features: [
//       "Automated data collection",
//       "Real-time alerts & notifications",
//       "Workflow validation tools",
//       "Process standardization"
//     ]
//   },
//   {
//     icon: BarChart3,
//     title: "Regulatory Reporting",
//     description: "Generate inspection-ready reports with built-in templates for FDA, EMA, and other regulatory bodies.",
//     features: [
//       "Pre-validated report templates",
//       "Automated report generation",
//       "Multi-format export (PDF, CSV, XML)",
//       "Regulatory submission tools"
//     ]
//   }
// ];

// const industries = [
//   {
//     icon: Building2,
//     title: "Pharmaceutical Manufacturing",
//     description: "Complete GMP compliance solutions for pharmaceutical manufacturing operations.",
//     benefits: [
//       "Batch record management",
//       "Equipment qualification",
//       "Environmental monitoring",
//       "Deviation management"
//     ]
//   },
//   {
//     icon: Microscope,
//     title: "Biotechnology",
//     description: "Specialized solutions for biotech R&D and manufacturing environments.",
//     benefits: [
//       "Clinical trial data management",
//       "Laboratory data integrity",
//       "Bioprocessing controls",
//       "Quality control systems"
//     ]
//   },
//   {
//     icon: Stethoscope,
//     title: "Medical Devices",
//     description: "ISO 13485 compliant solutions for medical device manufacturers.",
//     benefits: [
//       "Design controls",
//       "Risk management",
//       "Corrective and preventive actions",
//       "Post-market surveillance"
//     ]
//   },
//   {
//     icon: FlaskConical,
//     title: "Clinical Research",
//     description: "GCP compliant solutions for clinical research organizations.",
//     benefits: [
//       "Electronic data capture",
//       "Clinical trial monitoring",
//       "Regulatory submissions",
//       "Safety reporting"
//     ]
//   }
// ];

// export default function Solutions() {
//   return (
//     <>
//       <Helmet>
//         <title>Solutions - Regulatory Compliance Software for All Industries</title>
//         <meta 
//           name="description" 
//           content="Comprehensive regulatory compliance solutions for pharmaceutical, biotech, medical device, and clinical research industries. FDA 21 CFR Part 11 compliant software systems." 
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
//                 Complete Regulatory Solutions
//               </h1>
//               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//                 Streamline compliance workflows across your entire organization 
//                 with integrated software solutions designed for regulated industries.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Core Solutions */}
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
//                 Core Solution Components
//               </h2>
//               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//                 Our integrated approach ensures comprehensive compliance across all aspects of your operations.
//               </p>
//             </motion.div>
            
//             <div className="grid lg:grid-cols-3 gap-8">
//               {solutions.map((solution, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
//                     <CardContent className="p-0">
//                       <div className="w-16 h-16 bg-primary-blue/10 rounded-lg flex items-center justify-center mb-6">
//                         <solution.icon className="text-primary-blue h-8 w-8" />
//                       </div>
//                       <h3 className="text-xl font-bold text-dark-grey mb-4">{solution.title}</h3>
//                       <p className="text-medium-grey mb-6">{solution.description}</p>
//                       <div className="space-y-2">
//                         {solution.features.map((feature, featureIndex) => (
//                           <div key={featureIndex} className="flex items-center text-sm text-dark-grey">
//                             <CheckCircle className="h-4 w-4 text-accent-green mr-2 flex-shrink-0" />
//                             {feature}
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

//         {/* Industry Solutions */}
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
//                 Industry-Specific Solutions
//               </h2>
//               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//                 Tailored compliance solutions designed for the unique requirements of each regulated industry.
//               </p>
//             </motion.div>
            
//             <div className="grid lg:grid-cols-2 gap-8">
//               {industries.map((industry, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="bg-light-grey rounded-xl p-8 hover:shadow-lg transition-all duration-300 h-full">
//                     <CardContent className="p-0">
//                       <div className="flex items-center space-x-4 mb-6">
//                         <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
//                           <industry.icon className="text-primary-blue h-6 w-6" />
//                         </div>
//                         <h3 className="text-xl font-bold text-dark-grey">{industry.title}</h3>
//                       </div>
                      
//                       <p className="text-medium-grey mb-6">{industry.description}</p>
                      
//                       <div className="grid grid-cols-2 gap-2">
//                         {industry.benefits.map((benefit, benefitIndex) => (
//                           <div key={benefitIndex} className="flex items-center text-sm text-dark-grey">
//                             <CheckCircle className="h-3 w-3 text-accent-green mr-2 flex-shrink-0" />
//                             {benefit}
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
//                 Ready to Transform Your Compliance Operations?
//               </h2>
//               <p className="text-xl text-blue-200 mb-8">
//                 Contact our regulatory experts to discuss how our solutions can be tailored to your specific industry requirements.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button size="lg" className="bg-accent-green hover:bg-green-600 text-white">
//                   Schedule Consultation
//                 </Button>
//                 <Button 
//                   size="lg"
//                   variant="outline" 
//                   className="border-white text-white hover:bg-white hover:text-secondary-blue"
//                 >
//                   Request Demo
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
import { Shield, Cog, BarChart3, CheckCircle, Building2, Microscope, Stethoscope, FlaskConical } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Data Integrity",
    description: "ALCOA+ principles built into every module with tamper-evident audit trails and secure e-signatures.",
    features: [
      "Electronic signatures (21 CFR Part 11)",
      "Complete audit trails",
      "Access controls & user management",
      "Data validation & verification"
    ]
  },
  {
    icon: Cog,
    title: "Workflow Automation",
    description: "Reduce manual errors and ensure consistent processes with automated workflows and notifications.",
    features: [
      "Automated data collection",
      "Real-time alerts & notifications",
      "Workflow validation tools",
      "Process standardization"
    ]
  },
  {
    icon: BarChart3,
    title: "Regulatory Reporting",
    description: "Generate inspection-ready reports with built-in templates for FDA, EMA, and other regulatory bodies.",
    features: [
      "Pre-validated report templates",
      "Automated report generation",
      "Multi-format export (PDF, CSV, XML)",
      "Regulatory submission tools"
    ]
  }
];

const industries = [
  {
    icon: Building2,
    title: "Pharmaceutical Manufacturing",
    description: "Complete GMP compliance solutions for pharmaceutical manufacturing operations.",
    benefits: [
      "Batch record management",
      "Equipment qualification",
      "Environmental monitoring",
      "Deviation management"
    ]
  },
  {
    icon: Microscope,
    title: "Biotechnology",
    description: "Specialized solutions for biotech R&D and manufacturing environments.",
    benefits: [
      "Clinical trial data management",
      "Laboratory data integrity",
      "Bioprocessing controls",
      "Quality control systems"
    ]
  },
  {
    icon: Stethoscope,
    title: "Medical Devices",
    description: "ISO 13485 compliant solutions for medical device manufacturers.",
    benefits: [
      "Design controls",
      "Risk management",
      "Corrective and preventive actions",
      "Post-market surveillance"
    ]
  },
  {
    icon: FlaskConical,
    title: "Clinical Research",
    description: "GCP compliant solutions for clinical research organizations.",
    benefits: [
      "Electronic data capture",
      "Clinical trial monitoring",
      "Regulatory submissions",
      "Safety reporting"
    ]
  }
];

export default function Solutions() {
  return (
    <>
      <Helmet>
        <title>Solutions - Regulatory Compliance Software for All Industries</title>
        <meta 
          name="description" 
          content="Comprehensive regulatory compliance solutions for pharmaceutical, biotech, medical device, and clinical research industries. FDA 21 CFR Part 11 compliant software systems." 
        />
      </Helmet>
      
      <div 
        className="min-h-screen"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 18s ease infinite",
        }}
      >
        {/* Animated background blobs */}
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

        {/* Header Section */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center rounded-full bg-blue-500/30 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-4 border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Shield className="h-4 w-4 mr-2" />
                FDA 21 CFR Part 11 Compliant
              </motion.div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Complete Regulatory Solutions
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Streamline compliance workflows across your entire organization 
                with integrated software solutions designed for regulated industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Solutions */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Core Solution Components
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our integrated approach ensures comprehensive compliance across all aspects of your operations.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-6 border border-white/10">
                        <solution.icon className="text-white h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                      <p className="text-blue-100 mb-6">{solution.description}</p>
                      <div className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-white">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
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

        {/* Industry Solutions */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Tailored compliance solutions designed for the unique requirements of each regulated industry.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
                          <industry.icon className="text-white h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                      </div>
                      
                      <p className="text-blue-100 mb-6">{industry.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {industry.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-sm text-white">
                            <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
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

        {/* CTA Section */}
        <section className="py-20 bg-blue-600/30 backdrop-blur-sm relative z-10 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Compliance Operations?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact our regulatory experts to discuss how our solutions can be tailored to your specific industry requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                >
                  Schedule Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 hover:border-white backdrop-blur-sm"
                >
                  Request Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
       
      </div>
    </>
  );
}