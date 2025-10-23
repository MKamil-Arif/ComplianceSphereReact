// import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Download, ExternalLink, Thermometer, Droplets, Wind, TrendingUp, Microscope, Calculator, FileText, Database } from "lucide-react";
// import { Link } from "wouter";
// import type { Product } from "@shared/schema";

// const productIcons = {
//   "Environmental Monitoring System": [Thermometer, Droplets, Wind, TrendingUp],
//   "Microbial Assay Zone Reader": [Microscope, Calculator, FileText, Database]
// };

// export default function ProductHighlights() {
//   const { data: products, isLoading } = useQuery<Product[]>({
//     queryKey: ["/api/products"]
//   });

//   if (isLoading) {
//     return (
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
//             <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
//           </div>
//           <div className="grid lg:grid-cols-2 gap-12">
//             {[1, 2].map((i) => (
//               <div key={i} className="bg-light-grey rounded-2xl p-8">
//                 <div className="h-48 bg-gray-200 rounded-xl mb-6"></div>
//                 <div className="space-y-4">
//                   <div className="h-6 bg-gray-200 rounded w-3/4"></div>
//                   <div className="h-4 bg-gray-200 rounded"></div>
//                   <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl lg:text-4xl font-bold text-dark-grey mb-4">
//             Proven Software Solutions
//           </h2>
//           <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//             Industry-leading software systems designed for regulated environments 
//             with built-in compliance features.
//           </p>
//         </motion.div>
        
//         <div className="grid lg:grid-cols-2 gap-12">
//           {products?.map((product, index) => {
//             const icons = productIcons[product.name as keyof typeof productIcons] || [];
            
//             return (
//               <motion.div 
//                 key={product.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="bg-light-grey rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full">
//                   <CardContent className="p-0">
//                     <div className="mb-6">
//                       <img 
//                         src={product.imageUrl || ""} 
//                         alt={product.name}
//                         className="w-full h-48 object-cover rounded-xl"
//                       />
//                     </div>
                    
//                     <div className="space-y-4">
//                       <div className="flex items-center justify-between">
//                         <h3 className="text-2xl font-bold text-dark-grey">{product.name}</h3>
//                         <Badge className="bg-accent-green/10 text-accent-green border-0">
//                           {product.complianceLevel}
//                         </Badge>
//                       </div>
                      
//                       <p className="text-medium-grey leading-relaxed">
//                         {product.description}
//                       </p>
                      
//                       <div className="grid grid-cols-2 gap-4">
//                         {Array.isArray(product.features) ? product.features.slice(0, 4).map((feature, featureIndex) => {
//                           const IconComponent = icons[featureIndex];
//                           return (
//                             <div key={featureIndex} className="flex items-center space-x-2">
//                               {IconComponent && <IconComponent className="h-4 w-4 text-primary-blue" />}
//                               <span className="text-sm text-dark-grey">{feature}</span>
//                             </div>
//                           );
//                         }) : null}
//                       </div>
                      
//                       <div className="flex space-x-4 pt-4">
//                         <Link href={`/products/${product.slug}`}>
//                           <Button className="flex-1 bg-primary-blue hover:bg-blue-700 text-white">
//                             <ExternalLink className="h-4 w-4 mr-2" />
//                             Learn More
//                           </Button>
//                         </Link>
//                         <Button 
//                           variant="outline" 
//                           className="border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
//                         >
//                           <Download className="h-4 w-4 mr-2" />
//                           Datasheet
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


// ProductHighlights.tsx - Enhanced with better card design and animations
// import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Download, ExternalLink, Thermometer, Droplets, Wind, TrendingUp, Microscope, Calculator, FileText, Database, ArrowRight } from "lucide-react";
// import { Link } from "wouter";
// import type { Product } from "@shared/schema";

// const productIcons = {
//   "Environmental Monitoring System": [Thermometer, Droplets, Wind, TrendingUp],
//   "Microbial Assay Zone Reader": [Microscope, Calculator, FileText, Database]
// };

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
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6
//     }
//   }
// };

// export default function ProductHighlights() {
//   const { data: products, isLoading } = useQuery<Product[]>({
//     queryKey: ["/api/products"]
//   });

//   if (isLoading) {
//     return (
//       <section
//         className="py-20"
//         style={{ background:
//           "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
//         backgroundSize: "400% 400%",
//         animation: "gradientShift 18s ease infinite",}}
//         >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
//             <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
//           </div>
//           <div className="grid lg:grid-cols-2 gap-12">
//             {[1, 2].map((i) => (
//               <div key={i} className="bg-gray-100 rounded-2xl p-8 animate-pulse">
//                 <div className="h-48 bg-gray-200 rounded-xl mb-6"></div>
//                 <div className="space-y-4">
//                   <div className="h-6 bg-gray-200 rounded w-3/4"></div>
//                   <div className="h-4 bg-gray-200 rounded"></div>
//                   <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section 
//       className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//             Proven Software Solutions
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Industry-leading software systems designed for regulated environments 
//             with built-in compliance features.
//           </p>
//         </motion.div>
        
//         <motion.div 
//           className="grid lg:grid-cols-2 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {products?.map((product, index) => {
//             const icons = productIcons[product.name as keyof typeof productIcons] || [];
            
//             return (
//               <motion.div 
//                 key={product.id}
//                 variants={itemVariants}
//               >
//                 <Card className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden relative">
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <CardContent className="p-0 relative z-10">
//                     <div className="mb-6 overflow-hidden rounded-xl">
//                       <img 
//                         src={product.imageUrl || ""} 
//                         alt={product.name}
//                         className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>
                    
//                     <div className="space-y-4">
//                       <div className="flex items-center justify-between">
//                         <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
//                         <Badge className="bg-green-100 text-green-800 border-0 font-semibold">
//                           {product.complianceLevel}
//                         </Badge>
//                       </div>
                      
//                       <p className="text-gray-600 leading-relaxed">
//                         {product.description}
//                       </p>
                      
//                       <div className="grid grid-cols-2 gap-3">
//                         {Array.isArray(product.features) ? product.features.slice(0, 4).map((feature, featureIndex) => {
//                           const IconComponent = icons[featureIndex];
//                           return (
//                             <div key={featureIndex} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg group-hover:bg-white/80 transition-colors duration-300">
//                               {IconComponent && <IconComponent className="h-4 w-4 text-blue-600" />}
//                               <span className="text-sm text-gray-700">{feature}</span>
//                             </div>
//                           );
//                         }) : null}
//                       </div>
                      
//                       <div className="flex space-x-4 pt-4">
//                         <Link href={`/products/${product.slug}`}>
//                           <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white group/btn">
//                             <ExternalLink className="h-4 w-4 mr-2" />
//                             Learn More
//                             <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
//                           </Button>
//                         </Link>
//                         <Button 
//                           variant="outline" 
//                           className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
//                         >
//                           <Download className="h-4 w-4 mr-2" />
//                           Datasheet
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Thermometer, Droplets, Wind, TrendingUp, Microscope, Calculator, FileText, Database, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { Product } from "@shared/schema";

const productIcons = {
  "Environmental Monitoring System": [Thermometer, Droplets, Wind, TrendingUp],
  "Microbial Assay Zone Reader": [Microscope, Calculator, FileText, Database]
};

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function ProductHighlights() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"]
  });

  if (isLoading) {
    return (
      <section
        className="py-20 relative overflow-hidden"
              style={{
        background:
          "linear-gradient(135deg, #0f2027, #000000ff, #000000ff)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 18s ease infinite",
        }}
      >
        {/* Background blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "6s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200/40 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200/40 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 animate-pulse">
                <div className="h-48 bg-gray-200/40 rounded-xl mb-6"></div>
                <div className="space-y-4">
                  <div className="h-6 bg-gray-200/40 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200/40 rounded"></div>
                  <div className="h-4 bg-gray-200/40 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 18s ease infinite"
      }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "6s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Proven Software Solutions
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Industry-leading software systems designed for regulated environments 
            with built-in compliance features.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products?.map((product, index) => {
            const icons = productIcons[product.name as keyof typeof productIcons] || [];
            
            return (
              <motion.div 
                key={product.id}
                variants={itemVariants}
              >
                <Card className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-0 relative z-10">
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <img 
                        src={product.imageUrl || ""} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white drop-shadow">{product.name}</h3>
                        <Badge className="bg-green-400/20 text-green-200 border-0 font-semibold">
                          {product.complianceLevel}
                        </Badge>
                      </div>
                      
                      <p className="text-blue-100 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {Array.isArray(product.features) ? product.features.slice(0, 4).map((feature, featureIndex) => {
                          const IconComponent = icons[featureIndex];
                          return (
                            <div key={featureIndex} className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                              {IconComponent && <IconComponent className="h-4 w-4 text-cyan-300" />}
                              <span className="text-sm text-blue-100">{feature}</span>
                            </div>
                          );
                        }) : null}
                      </div>
                      
                      <div className="flex space-x-4 pt-4">
                        <Link href={`/products/${product.slug}`}>
                          <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white group/btn">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Learn More
                            <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
                          </Button>
                        </Link>
                        <Button 
                          variant="outline" 
                          className="border border-white text-white hover:bg-white/10 transition-colors duration-300"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Datasheet
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
