// import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Download, ExternalLink } from "lucide-react";
// import { Link } from "wouter";
// import type { Product } from "@shared/schema";

// export default function Products() {
//   const { data: products, isLoading } = useQuery<Product[]>({
//     queryKey: ["/api/products"]
//   });

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Products - FDA 21 CFR Part 11 Compliant Software Systems</title>
//         <meta 
//           name="description" 
//           content="Explore our comprehensive range of FDA 21 CFR Part 11 compliant software systems including Environmental Monitoring and Microbial Assay Zone Reader." 
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
//                 Our Products
//               </h1>
//               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//                 Industry-leading software systems designed for regulated environments 
//                 with built-in FDA 21 CFR Part 11 compliance features.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Products Grid */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {products?.map((product, index) => (
//                 <motion.div 
//                   key={product.id}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="bg-light-grey rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full">
//                     <CardContent className="p-0">
//                       <div className="mb-6">
//                         <img 
//                           src={product.imageUrl || ""} 
//                           alt={product.name}
//                           className="w-full h-64 object-cover rounded-xl"
//                         />
//                       </div>
                      
//                       <div className="space-y-4">
//                         <div className="flex items-center justify-between">
//                           <h2 className="text-2xl font-bold text-dark-grey">{product.name}</h2>
//                           <Badge className="bg-accent-green/10 text-accent-green border-0">
//                             {product.complianceLevel}
//                           </Badge>
//                         </div>
                        
//                         <p className="text-medium-grey leading-relaxed">
//                           {product.description}
//                         </p>
                        
//                         <div className="grid grid-cols-2 gap-2">
//                           {Array.isArray(product.features) ? product.features.map((feature, featureIndex) => (
//                             <div key={featureIndex} className="text-sm text-dark-grey">
//                               • {feature}
//                             </div>
//                           )) : null}
//                         </div>
                        
//                         <div className="flex space-x-4 pt-4">
//                           <Link href={`/products/${product.slug}`}>
//                             <Button className="flex-1 bg-primary-blue hover:bg-blue-700 text-white">
//                               <ExternalLink className="h-4 w-4 mr-2" />
//                               Learn More
//                             </Button>
//                           </Link>
//                           <Button 
//                             variant="outline" 
//                             className="border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
//                           >
//                             <Download className="h-4 w-4 mr-2" />
//                             Datasheet
//                           </Button>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Shield } from "lucide-react";
import { Link } from "wouter";
import type { Product } from "@shared/schema";

export default function Products() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"]
  });

  if (isLoading) {
    return (
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="h-8 bg-white/20 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-white/20 rounded w-96 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="h-48 bg-white/20 rounded-xl mb-6"></div>
                <div className="space-y-4">
                  <div className="h-6 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Products - FDA 21 CFR Part 11 Compliant Software Systems</title>
        <meta 
          name="description" 
          content="Explore our comprehensive range of FDA 21 CFR Part 11 compliant software systems including Environmental Monitoring and Microbial Assay Zone Reader." 
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
                Our Products
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Industry-leading software systems designed for regulated environments 
                with built-in FDA 21 CFR Part 11 compliance features.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {products?.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:shadow-lg transition-all duration-300 h-full hover:border-white/20">
                    <CardContent className="p-0">
                      <div className="mb-6">
                        <img 
                          src={product.imageUrl || ""} 
                          alt={product.name}
                          className="w-full h-64 object-cover rounded-xl border border-white/10"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                          <Badge className="bg-green-500/20 text-green-300 border-0 backdrop-blur-sm">
                            {product.complianceLevel}
                          </Badge>
                        </div>
                        
                        <p className="text-blue-100 leading-relaxed">
                          {product.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {Array.isArray(product.features) ? product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="text-sm text-white">
                              • {feature}
                            </div>
                          )) : null}
                        </div>
                        
                        <div className="flex space-x-4 pt-4">
                          <Link href={`/products/${product.slug}`}>
                            <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Learn More
                            </Button>
                          </Link>
                          <Button 
                            variant="outline" 
                            className="border border-white/30 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Datasheet
                          </Button>
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