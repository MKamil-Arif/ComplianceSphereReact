// import { Helmet } from "react-helmet-async";
// import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ArrowRight, Building2, Users, TrendingUp, Clock } from "lucide-react";
// import type { CaseStudy } from "@shared/schema";

// const industryColors = {
//   "Pharmaceutical Manufacturing": "bg-blue-100 text-blue-800",
//   "Biotech Research": "bg-green-100 text-green-800",
//   "Medical Devices": "bg-purple-100 text-purple-800",
//   "Clinical Research": "bg-orange-100 text-orange-800"
// };

// export default function CaseStudies() {
//   const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
//     queryKey: ["/api/case-studies"]
//   });

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="text-center mb-16">
//             <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
//             <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
//           </div>
//           <div className="grid lg:grid-cols-3 gap-8">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="bg-light-grey rounded-xl p-8">
//                 <div className="h-40 bg-gray-200 rounded-lg mb-6"></div>
//                 <div className="space-y-4">
//                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                   <div className="h-6 bg-gray-200 rounded w-3/4"></div>
//                   <div className="h-4 bg-gray-200 rounded"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Case Studies - Success Stories in Regulatory Compliance</title>
//         <meta 
//           name="description" 
//           content="Discover how leading pharmaceutical, biotech, and medical device companies achieve regulatory compliance with 4D Solutions. Real-world success stories and implementation results." 
//         />
//         <meta 
//           name="keywords" 
//           content="case studies, regulatory compliance success, pharmaceutical compliance, biotech solutions, FDA validation, customer success" 
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
//                 Customer Success Stories
//               </h1>
//               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//                 See how leading pharmaceutical, biotech, and medical device companies 
//                 achieve regulatory compliance and operational excellence with our solutions.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Success Metrics */}
//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid md:grid-cols-4 gap-8">
//               <motion.div
//                 className="text-center"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="w-16 h-16 bg-primary-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
//                   <Building2 className="text-primary-blue h-8 w-8" />
//                 </div>
//                 <div className="text-3xl font-bold text-primary-blue mb-2">500+</div>
//                 <div className="text-medium-grey">Companies Served</div>
//               </motion.div>
              
//               <motion.div
//                 className="text-center"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="w-16 h-16 bg-primary-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
//                   <TrendingUp className="text-primary-blue h-8 w-8" />
//                 </div>
//                 <div className="text-3xl font-bold text-primary-blue mb-2">75%</div>
//                 <div className="text-medium-grey">Average Time Savings</div>
//               </motion.div>
              
//               <motion.div
//                 className="text-center"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="w-16 h-16 bg-primary-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
//                   <Users className="text-primary-blue h-8 w-8" />
//                 </div>
//                 <div className="text-3xl font-bold text-primary-blue mb-2">100%</div>
//                 <div className="text-medium-grey">Audit Success Rate</div>
//               </motion.div>
              
//               <motion.div
//                 className="text-center"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="w-16 h-16 bg-primary-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
//                   <Clock className="text-primary-blue h-8 w-8" />
//                 </div>
//                 <div className="text-3xl font-bold text-primary-blue mb-2">24/7</div>
//                 <div className="text-medium-grey">Support Coverage</div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Case Studies Grid */}
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
//                 Featured Success Stories
//               </h2>
//               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//                 Real implementations, measurable results, and transformative outcomes 
//                 across various regulated industries.
//               </p>
//             </motion.div>
            
//             <div className="grid lg:grid-cols-3 gap-8">
//               {caseStudies?.map((caseStudy, index) => (
//                 <motion.div
//                   key={caseStudy.id}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full">
//                     <CardContent className="p-0">
//                       <div className="mb-6">
//                         <img 
//                           src={caseStudy.imageUrl || ""} 
//                           alt={caseStudy.title}
//                           className="w-full h-48 object-cover rounded-lg"
//                         />
//                       </div>
                      
//                       <div className="space-y-4">
//                         <Badge 
//                           className={`text-sm ${
//                             industryColors[caseStudy.industry as keyof typeof industryColors] || 
//                             "bg-gray-100 text-gray-800"
//                           } border-0`}
//                         >
//                           {caseStudy.industry}
//                         </Badge>
                        
//                         <h3 className="text-xl font-bold text-dark-grey">{caseStudy.title}</h3>
//                         <p className="text-medium-grey">{caseStudy.description}</p>
                        
//                         {/* Metrics Display */}
//                         <div className="grid grid-cols-2 gap-4 pt-4">
//                           {typeof caseStudy.metrics === 'object' && caseStudy.metrics && (
//                             Object.entries(caseStudy.metrics).map(([key, value]) => (
//                               <div key={key} className="text-center bg-light-grey rounded-lg p-3">
//                                 <div className="text-lg font-bold text-primary-blue">{value}</div>
//                                 <div className="text-xs text-medium-grey capitalize">
//                                   {key.replace(/([A-Z])/g, ' $1').trim()}
//                                 </div>
//                               </div>
//                             ))
//                           )}
//                         </div>
                        
//                         <Button 
//                           variant="ghost" 
//                           className="text-primary-blue hover:text-blue-700 p-0 h-auto font-medium"
//                         >
//                           Read Full Case Study <ArrowRight className="h-4 w-4 ml-1" />
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Detailed Case Study Example */}
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
//                   <Badge className="bg-blue-100 text-blue-800 border-0">
//                     Pharmaceutical Manufacturing
//                   </Badge>
                  
//                   <h2 className="text-3xl lg:text-4xl font-bold text-dark-grey">
//                     Global Pharma Corp: 75% Reduction in Audit Preparation Time
//                   </h2>
                  
//                   <p className="text-xl text-medium-grey leading-relaxed">
//                     A Fortune 500 pharmaceutical company reduced audit preparation time by 75% 
//                     while maintaining 100% compliance across 12 manufacturing sites worldwide.
//                   </p>
                  
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold text-dark-grey">Key Challenges:</h3>
//                     <ul className="space-y-2">
//                       <li className="flex items-start space-x-2">
//                         <ArrowRight className="h-4 w-4 text-primary-blue mt-1 flex-shrink-0" />
//                         <span className="text-medium-grey">Manual data collection across multiple sites</span>
//                       </li>
//                       <li className="flex items-start space-x-2">
//                         <ArrowRight className="h-4 w-4 text-primary-blue mt-1 flex-shrink-0" />
//                         <span className="text-medium-grey">Inconsistent documentation standards</span>
//                       </li>
//                       <li className="flex items-start space-x-2">
//                         <ArrowRight className="h-4 w-4 text-primary-blue mt-1 flex-shrink-0" />
//                         <span className="text-medium-grey">Extended audit preparation periods</span>
//                       </li>
//                     </ul>
//                   </div>
                  
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold text-dark-grey">Solution Results:</h3>
//                     <ul className="space-y-2">
//                       <li className="flex items-start space-x-2">
//                         <ArrowRight className="h-4 w-4 text-accent-green mt-1 flex-shrink-0" />
//                         <span className="text-medium-grey">Automated compliance monitoring across all sites</span>
//                       </li>
//                       <li className="flex items-start space-x-2">
//                         <ArrowRight className="h-4 w-4 text-accent-green mt-1 flex-shrink-0" />
//                         <span className="text-medium-grey">Standardized documentation templates</span>
//                       </li>
//                       <li className="flex items-start space-x-2">
//                         <ArrowRight className="h-4 w-4 text-accent-green mt-1 flex-shrink-0" />
//                         <span className="text-medium-grey">Real-time compliance dashboard</span>
//                       </li>
//                     </ul>
//                   </div>
                  
//                   <Button className="bg-primary-blue hover:bg-blue-700 text-white">
//                     Download Full Case Study
//                   </Button>
//                 </div>
//               </motion.div>
              
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="bg-light-grey p-8">
//                   <CardContent className="p-0">
//                     <h3 className="text-xl font-bold text-dark-grey mb-6">Implementation Results</h3>
                    
//                     <div className="grid grid-cols-2 gap-6">
//                       <div className="text-center">
//                         <div className="text-3xl font-bold text-primary-blue mb-2">75%</div>
//                         <div className="text-sm text-medium-grey">Time Reduction</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-3xl font-bold text-primary-blue mb-2">12</div>
//                         <div className="text-sm text-medium-grey">Sites Deployed</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-3xl font-bold text-primary-blue mb-2">100%</div>
//                         <div className="text-sm text-medium-grey">Compliance Rate</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-3xl font-bold text-primary-blue mb-2">6 Mo</div>
//                         <div className="text-sm text-medium-grey">Implementation</div>
//                       </div>
//                     </div>
                    
//                     <blockquote className="mt-6 p-4 bg-white rounded-lg border-l-4 border-primary-blue">
//                       <p className="text-medium-grey italic">
//                         "4D Solutions transformed our compliance operations. The automated monitoring 
//                         and reporting capabilities have given us confidence in our regulatory readiness."
//                       </p>
//                       <footer className="mt-2 text-sm text-dark-grey font-medium">
//                         — VP of Quality Assurance, Global Pharma Corp
//                       </footer>
//                     </blockquote>
//                   </CardContent>
//                 </Card>
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
//                 Ready to Create Your Success Story?
//               </h2>
//               <p className="text-xl text-blue-200 mb-8">
//                 Join hundreds of companies that have transformed their compliance operations 
//                 with our regulatory software solutions.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button size="lg" className="bg-accent-green hover:bg-green-600 text-white">
//                   Start Your Implementation
//                 </Button>
//                 <Button 
//                   size="lg"
//                   variant="outline" 
//                   className="border-white text-white hover:bg-white hover:text-secondary-blue"
//                 >
//                   Schedule Consultation
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
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Users, TrendingUp, Clock } from "lucide-react";
import type { CaseStudy } from "@shared/schema";

const industryColors = {
  "Pharmaceutical Manufacturing": "bg-blue-500/20 text-blue-200",
  "Biotech Research": "bg-green-500/20 text-green-200",
  "Medical Devices": "bg-purple-500/20 text-purple-200",
  "Clinical Research": "bg-orange-500/20 text-orange-200"
};

export default function CaseStudies() {
  const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"]
  });

  if (isLoading) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] animate-gradientShift">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-400 rounded-full blur-3xl animate-pulse-slow delay-3000"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-400 rounded-full blur-3xl animate-pulse-slow delay-6000"></div>
        </div>
        <div className="relative z-10 text-center text-white">Loading case studies...</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories in Regulatory Compliance</title>
        <meta 
          name="description" 
          content="Discover how leading pharmaceutical, biotech, and medical device companies achieve regulatory compliance with 4D Solutions. Real-world success stories and implementation results." 
        />
        <meta 
          name="keywords" 
          content="case studies, regulatory compliance success, pharmaceutical compliance, biotech solutions, FDA validation, customer success" 
        />
      </Helmet>

      {/* 🌌 Animated Gradient Background */}
      <div 
        className="relative min-h-screen"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 18s ease infinite",
        }}
      >
        {/* Glowing Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "6s" }}></div>
        </div>

        {/* Page Content */}
        <div className="relative z-10">
          {/* Header Section */}
          <section className="py-20 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Customer Success Stories
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  See how leading pharmaceutical, biotech, and medical device companies 
                  achieve regulatory compliance and operational excellence with our solutions.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8 text-white">
                {[
                  { icon: <Building2 className="h-8 w-8 text-blue-300" />, value: "500+", label: "Companies Served" },
                  { icon: <TrendingUp className="h-8 w-8 text-blue-300" />, value: "75%", label: "Average Time Savings" },
                  { icon: <Users className="h-8 w-8 text-blue-300" />, value: "100%", label: "Audit Success Rate" },
                  { icon: <Clock className="h-8 w-8 text-blue-300" />, value: "24/7", label: "Support Coverage" },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {m.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{m.value}</div>
                    <div className="text-blue-200">{m.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Featured Success Stories
                </h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Real implementations, measurable results, and transformative outcomes 
                  across various regulated industries.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {caseStudies?.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <CardContent className="p-0 text-white">
                        <div className="mb-6">
                          <img 
                            src={caseStudy.imageUrl || ""} 
                            alt={caseStudy.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="space-y-4">
                          <Badge 
                            className={`text-sm border-0 ${
                              industryColors[caseStudy.industry as keyof typeof industryColors] || 
                              "bg-gray-500/30 text-gray-200"
                            }`}
                          >
                            {caseStudy.industry}
                          </Badge>
                          <h3 className="text-xl font-bold">{caseStudy.title}</h3>
                          <p className="text-blue-100">{caseStudy.description}</p>

                          {/* Metrics */}
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            {typeof caseStudy.metrics === 'object' && caseStudy.metrics && (
                              Object.entries(caseStudy.metrics).map(([key, value]) => (
                                <div key={key} className="text-center bg-white/10 rounded-lg p-3">
                                  <div className="text-lg font-bold text-blue-200">{value}</div>
                                  <div className="text-xs text-blue-300 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </div>
                                </div>
                              ))
                            )}
                          </div>

                          <Button 
                            variant="ghost" 
                            className="text-blue-300 hover:text-white p-0 h-auto font-medium"
                          >
                            Read Full Case Study <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 text-white bg-black/40 backdrop-blur-md">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-xl text-blue-200 mb-8">
                  Join hundreds of companies that have transformed their compliance operations 
                  with our regulatory software solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                    Start Your Implementation
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    Schedule Consultation
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
