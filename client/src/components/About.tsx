// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Award, Users, Globe } from "lucide-react";

// const aboutFeatures = [
//   {
//     icon: Award,
//     title: "ISO 27001 Certified",
//     description: "Information security management systems"
//   },
//   {
//     icon: Users,
//     title: "Expert Team",
//     description: "Former FDA validators and compliance specialists"
//   },
//   {
//     icon: Globe,
//     title: "Global Reach",
//     description: "Supporting regulated industries worldwide"
//   }
// ];

// export default function About() {
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
//               <h2 className="text-3xl lg:text-4xl font-bold text-dark-grey">
//                 15+ Years of Regulatory Excellence
//               </h2>
//               <p className="text-xl text-medium-grey leading-relaxed">
//                 Founded by regulatory compliance experts, 4D Solutions has been at the 
//                 forefront of FDA 21 CFR Part 11 software development since 2008.
//               </p>
//             </div>
            
//             <div className="space-y-6">
//               {aboutFeatures.map((feature, index) => (
//                 <motion.div 
//                   key={index}
//                   className="flex items-center space-x-4"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
//                     <feature.icon className="text-primary-blue h-6 w-6" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-dark-grey">{feature.title}</h3>
//                     <p className="text-medium-grey">{feature.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             <div className="flex space-x-4">
//               <Button className="bg-primary-blue hover:bg-blue-700 text-white">
//                 Our Team
//               </Button>
//               <Button 
//                 variant="outline" 
//                 className="border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
//               >
//                 Certifications
//               </Button>
//             </div>
//           </motion.div>
          
//           <motion.div 
//             className="relative"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
//               alt="Professional team meeting discussing compliance strategies" 
//               className="rounded-2xl shadow-2xl w-full"
//             />
            
//             <motion.div 
//               className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary-blue mb-2">500+</div>
//                 <div className="text-sm text-medium-grey">Successful Validations</div>
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
// import { Award, Users, Globe, ChevronRight, Star } from "lucide-react";

// const aboutFeatures = [
//   {
//     icon: Award,
//     title: "ISO 27001 Certified",
//     description: "Information security management systems"
//   },
//   {
//     icon: Users,
//     title: "Expert Team",
//     description: "Former FDA validators and compliance specialists"
//   },
//   {
//     icon: Globe,
//     title: "Global Reach",
//     description: "Supporting regulated industries worldwide"
//   }
// ];

// const stats = [
//   { value: "15+", label: "Years Experience" },
//   { value: "500+", label: "Successful Validations" },
//   { value: "98%", label: "Client Retention" },
//   { value: "24/7", label: "Support Available" }
// ];

// export default function About() {
//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-[0.03] z-0">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, #059669 1px, transparent 0)`,
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
//               <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 mb-2">
//                 <Star className="h-4 w-4 mr-2 fill-green-500 text-green-500" />
//                 Trusted Since 2008
//               </div>
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
//                 15+ Years of Regulatory Excellence
//               </h2>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 Founded by regulatory compliance experts, 4D Solutions has been at the 
//                 forefront of FDA 21 CFR Part 11 software development since 2008.
//               </p>
//             </div>
            
//             <div className="space-y-6">
//               {aboutFeatures.map((feature, index) => (
//                 <motion.div 
//                   key={index}
//                   className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300 group"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                 >
//                   <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
//                     <feature.icon className="text-green-600 h-6 w-6" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">{feature.title}</h3>
//                     <p className="text-gray-600">{feature.description}</p>
//                   </div>
//                   <ChevronRight className="h-5 w-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </motion.div>
//               ))}
//             </div>

//             {/* Stats grid */}
//             <div className="grid grid-cols-2 gap-4 pt-4">
//               {stats.map((stat, index) => (
//                 <motion.div 
//                   key={index}
//                   className="text-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                 >
//                   <div className="text-2xl font-bold text-green-600 mb-1">{stat.value}</div>
//                   <div className="text-sm text-gray-600">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
            
//             <div className="flex space-x-4 pt-4">
//               <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 group">
//                 Our Team
//                 <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
//               </Button>
//               <Button 
//                 variant="outline" 
//                 className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full px-6 transition-colors duration-300"
//               >
//                 Certifications
//               </Button>
//             </div>
//           </motion.div>
          
//           <motion.div 
//             className="relative"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 z-10"></div>
//               <img 
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
//                 alt="Professional team meeting discussing compliance strategies" 
//                 className="w-full h-auto"
//               />
//             </div>
            
//             <motion.div 
//               className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
//                 <div className="text-sm text-gray-600">Successful Validations</div>
//               </div>
//             </motion.div>

//             <motion.div 
//               className="absolute -bottom-6 left-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 rounded-xl shadow-lg flex items-center space-x-2"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               <div className="flex items-center">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <span className="text-sm font-medium">4.9/5 Rating</span>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, ChevronRight, Star } from "lucide-react";

const aboutFeatures = [
  {
    icon: Award,
    title: "ISO 27001 Certified",
    description: "Information security management systems",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Former FDA validators and compliance specialists",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Supporting regulated industries worldwide",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Successful Validations" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Support Available" },
];

export default function About() {
  return (
    <section
      className="py-20 relative overflow-hidden"
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-200 mb-2 backdrop-blur-sm border border-white/10">
                <Star className="h-4 w-4 mr-2 fill-green-400 text-green-400" />
                Trusted Since 2008
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                15+ Years of Regulatory Excellence
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Founded by regulatory compliance experts, 4D Solutions has been
                at the forefront of FDA 21 CFR Part 11 software development
                since 2008.
              </p>
            </div>

            <div className="space-y-6">
              {aboutFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-green-500/10 transition-colors duration-300 group backdrop-blur-md border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 transition-colors duration-300">
                    <feature.icon className="text-green-300 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-blue-100">{feature.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/10 border border-white/10 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="text-2xl font-bold text-green-300 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex space-x-4 pt-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 group">
                Our Team
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                className="border-green-400 text-green-300 hover:bg-green-500/20 hover:text-white rounded-full px-6 transition-colors duration-300"
              >
                Certifications
              </Button>
            </div>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=600"
                alt="Professional team meeting"
                className="w-full h-auto"
              />
            </div>

            <motion.div
              className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">
                  500+
                </div>
                <div className="text-sm text-blue-100">
                  Successful Validations
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 left-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 rounded-xl shadow-lg flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
