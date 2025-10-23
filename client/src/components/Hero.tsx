// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Shield, Play, Download } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="bg-gradient-to-br from-light-grey to-white py-40 lg:py-60" style={{ background: "linear-gradient(to bottom, #000000, #434343)" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             className="space-y-8 justify-self-start lg:max-w-xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="space-y-4">
//               <Badge variant="secondary" className="inline-flex items-center px-3 py-1 bg-primary-green/10 text-white border-0">
//                 <Shield className="h-4 w-4 mr-2" />
//                 FDA 21 CFR Part 11 Compliant
//               </Badge>
//               <h1 className="text-4xl lg:text-6xl font-bold text-dark-grey leading-tight">
//                 Regulatory-Grade{" "}
//                 <span className="text-primary-blue">Software Solutions</span>
//               </h1>
//               <p className="text-xl text-medium-grey leading-relaxed">
//                 Trusted by regulated industries worldwide. Our FDA 21 CFR Part 11-compliant
//                 software systems ensure audit-ready documentation, secure data integrity,
//                 and seamless regulatory compliance.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 size="lg"
//                 className="bg-accent-green hover:bg-green-600 text-white px-8 py-4 text-lg"
//               >
//                 <Play className="h-5 w-5 mr-3" />
//                 Request Demo
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 text-lg"
//               >
//                 <Download className="h-5 w-5 mr-3" />
//                 Download Brochure
//               </Button>
//             </div>

//             <div className="flex items-center space-x-8 pt-4">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary-blue">500+</div>
//                 <div className="text-sm text-medium-grey">Validated Deployments</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary-blue">15+</div>
//                 <div className="text-sm text-medium-grey">Years in Compliance</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary-blue">25</div>
//                 <div className="text-sm text-medium-grey">Regulated Industries</div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="relative flex items-center justify-center"
//             initial={{ opacity: 0, x: 35 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1.0, delay: 0.1 }}
//           >
//             <img
//               className="slow-rotate w-full max-w-md"
//               src="https://fleekbiz.com/wp-content/uploads/2025/01/dispersion-glass-5-1-1.png"
//               alt="Slow Rotating Image"
//             />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Shield, Play, Download } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       className="relative bg-gradient-to-br from-light-grey to-white py-40 lg:py-60"
//       // style={{ background: "linear-gradient(to bottom, #000000, #434343)" }}
//       style={{ background: "linear-gradient(to bottom, #141e30, #243b55)" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Grid with equal alignment */}
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* LEFT SECTION */}
//           <motion.div
//             className="space-y-8 lg:max-w-xl flex flex-col justify-start h-full"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="space-y-4">
//               <Badge
//                 variant="secondary"
//                 className="inline-flex items-center px-3 py-1 bg-primary-green/10 text-white border-0"
//               >
//                 <Shield className="h-4 w-4 mr-2" />
//                 FDA 21 CFR Part 11 Compliant
//               </Badge>

//               <h1 className="text-4xl lg:text-6xl font-bold text-primary-blue leading-tight">
//                 Regulatory-Grade{" "}
//                 <span className="text-white">Software Solutions</span>
//               </h1>

//               <p className="text-xl text-medium-grey leading-relaxed">
//                 Trusted by regulated industries worldwide. Our FDA 21 CFR Part
//                 11-compliant software systems ensure audit-ready documentation,
//                 secure data integrity, and seamless regulatory compliance.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 size="lg"
//                 className="bg-accent-green hover:bg-green-600 text-white px-8 py-4 text-lg"
//               >
//                 <Play className="h-5 w-5 mr-3" />
//                 Request Demo
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 text-lg"
//               >
//                 <Download className="h-5 w-5 mr-3" />
//                 Download Brochure
//               </Button>
//             </div>

//             <div className="flex items-center space-x-8 pt-4">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary-blue">500+</div>
//                 <div className="text-sm text-medium-grey">
//                   Validated Deployments
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary-blue">15+</div>
//                 <div className="text-sm text-medium-grey">
//                   Years in Compliance
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary-blue">25</div>
//                 <div className="text-sm text-medium-grey">
//                   Regulated Industries
//                 </div>
//               </div>
//             </div>
//           </motion.div>


//           {/* RIGHT SECTION */}
//           <motion.div
//             className="relative flex items-start justify-center "
//             initial={{ opacity: 0, x: 35 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1.0, delay: 0.1 }}
//           >
//             <img
//               className="slow-rotate max-w-md w-full"
//               src="https://fleekbiz.com/wp-content/uploads/2025/01/dispersion-glass-5-1-1.png"
//               alt="Slow Rotating Image"
//             />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }


// Hero.tsx - Enhanced with better visuals and animations

// import { motion, useScroll, useTransform } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { useRef } from "react";
// import { Shield, Play, Download, ArrowRight } from "lucide-react";

// export default function Hero() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"], 
//   });

//   // Map scroll progress (0 → 1) to rotation (0 → 360deg)
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

//   return (
//      <section
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       style={{ 
//         background: "linear-gradient(135deg, #0f2b46 0%, #1a3e6a 50%, #0f2b46 100%)",
//         backgroundSize: "400% 400%",
//         animation: "gradientShift 15s ease infinite"
//       }}
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-400 rounded-full filter blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
//       </div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* LEFT SECTION */}
//           <motion.div
//             className="space-y-8 lg:max-w-xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="space-y-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Badge
//                   variant="secondary"
//                   className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-white border-0 rounded-full text-sm font-semibold"
//                 >
//                   <Shield className="h-4 w-4 mr-2" />
//                   FDA 21 CFR Part 11 Compliant
//                 </Badge>
//               </motion.div>

//               <motion.h1 
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//               >
//                 Regulatory-Grade{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Software Solutions</span>
//               </motion.h1>

//               <motion.p 
//                 className="text-xl text-blue-100 leading-relaxed"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//               >
//                 Trusted by regulated industries worldwide. Our FDA 21 CFR Part
//                 11-compliant software systems ensure audit-ready documentation,
//                 secure data integrity, and seamless regulatory compliance.
//               </motion.p>
//             </div>

//             <motion.div 
//               className="flex flex-col sm:flex-row gap-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//             >
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center group"
//               >
//                 <Play className="h-5 w-5 mr-3 group-hover:animate-pulse" />
//                 Request Demo
//                 <ArrowRight className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
//               >
//                 <Download className="h-5 w-5 mr-3" />
//                 Download Brochure
//               </Button>
//             </motion.div>

//             <motion.div 
//               className="flex items-center space-x-8 pt-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.0 }}
//             >
//               {[
//                 { value: "500+", label: "Validated Deployments" },
//                 { value: "15+", label: "Years in Compliance" },
//                 { value: "25", label: "Regulated Industries" }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-2xl font-bold text-white">{stat.value}</div>
//                   <div className="text-sm text-blue-200">{stat.label}</div>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>

//               {/* RIGHT SECTION - Combined Animation */}
//           <motion.div
//             className="relative flex items-center justify-center"
//             initial={{ opacity: 0, x: 35, scale: 0.9 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ 
//               duration: 1.2, 
//               delay: 0.3,
//               ease: "easeOut"
//             }}
//           >
//             <div className="relative">
//               {/* Glowing background effect */}
//               <div className="absolute -inset-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-3xl blur-2xl opacity-20 animate-pulse-slow"></div>
              
//               {/* Outer ring that rotates slowly */}
//               <div className="absolute -inset-12 border-2 border-green-400/30 rounded-full animate-combined-rotate-slow"></div>
              
//               {/* Middle ring that rotates medium speed */}
//               <div className="absolute -inset-8 border border-cyan-400/20 rounded-full animate-combined-rotate-medium"></div>
              
//               {/* Main image with floating and subtle rotation */}
//               <motion.img
//                 className="relative max-w-md w-full z-10"
//                 src="https://fleekbiz.com/wp-content/uploads/2025/01/dispersion-glass-5-1-1.png"
//                 alt="FDA Compliance Software Visualization"
//                 animate={{
//                   y: [0, -15, 0],
//                   rotate: [0, 2, 0, -2, 0],
//                 }}
//                 transition={{
//                   y: {
//                     duration: 6,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   },
//                   rotate: {
//                     duration: 15,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }
//                 }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Shield, Play, Download, ArrowRight } from "lucide-react";

// export default function Hero() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   // Map scroll progress (0 → 1) to rotation (0 → 360 degrees)
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       style={{
//         background:
//           "linear-gradient(135deg, #0f2b46 0%, #1a3e6a 50%, #0f2b46 100%)",
//         backgroundSize: "400% 400%",
//         animation: "gradientShift 15s ease infinite",
//       }}
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse-slow"></div>
//         <div
//           className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-400 rounded-full filter blur-3xl animate-pulse-slow"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* LEFT SECTION */}
//           <motion.div
//             className="space-y-8 lg:max-w-xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="space-y-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Badge
//                   variant="secondary"
//                   className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-white border-0 rounded-full text-sm font-semibold"
//                 >
//                   <Shield className="h-4 w-4 mr-2" />
//                   FDA 21 CFR Part 11 Compliant
//                 </Badge>
//               </motion.div>

//               <motion.h1
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//               >
//                 Regulatory-Grade{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
//                   Software Solutions
//                 </span>
//               </motion.h1>

//               <motion.p
//                 className="text-xl text-blue-100 leading-relaxed"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//               >
//                 Trusted by regulated industries worldwide. Our FDA 21 CFR Part
//                 11-compliant software systems ensure audit-ready documentation,
//                 secure data integrity, and seamless regulatory compliance.
//               </motion.p>
//             </div>

//             <motion.div
//               className="flex flex-col sm:flex-row gap-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//             >
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center group"
//               >
//                 <Play className="h-5 w-5 mr-3 group-hover:animate-pulse" />
//                 Request Demo
//                 <ArrowRight className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
//               >
//                 <Download className="h-5 w-5 mr-3" />
//                 Download Brochure
//               </Button>
//             </motion.div>

//             <motion.div
//               className="flex items-center space-x-8 pt-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.0 }}
//             >
//               {[
//                 { value: "500+", label: "Validated Deployments" },
//                 { value: "15+", label: "Years in Compliance" },
//                 { value: "25", label: "Regulated Industries" },
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-2xl font-bold text-white">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-blue-200">{stat.label}</div>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SECTION - SCROLL ROTATION */}
//           <motion.div
//             className="relative flex items-center justify-center"
//             initial={{ opacity: 0, x: 35, scale: 0.9 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{
//               duration: 1.2,
//               delay: 0.3,
//               ease: "easeOut",
//             }}
//           >
//             <div className="relative">
//               {/* Glowing background effect */}
//               <div className="absolute -inset-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-3xl blur-2xl opacity-20 animate-pulse-slow"></div>

//               {/* Outer rings */}
//               <div className="absolute -inset-12 border-2 border-green-400/30 rounded-full animate-combined-rotate-slow"></div>
//               <div className="absolute -inset-8 border border-cyan-400/20 rounded-full animate-combined-rotate-medium"></div>

//               {/* Main image rotates on scroll */}
//               <motion.img
//                 className="relative max-w-md w-full z-10"
//                 src="https://fleekbiz.com/wp-content/uploads/2025/01/dispersion-glass-5-1-1.png"
//                 alt="FDA Compliance Software Visualization"
//                 style={{ rotate }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Play, Download, ArrowRight } from "lucide-react";
import banner from './images/header.png';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [ "end start","end end"],
  });

  // Rotate with scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f2027, #000000ff, #000000ff)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 18s ease infinite"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SECTION */}
          <motion.div
            className="space-y-8 lg:max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge
                  variant="secondary"
                  className="inline-flex items-center px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-white border border-white/10 rounded-full text-sm font-semibold shadow-md"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  FDA 21 CFR Part 11 Compliant
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Regulatory-Grade{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 animate-gradient">
                  Software Solutions
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Trusted by regulated industries worldwide. Our FDA 21 CFR Part
                11-compliant software systems ensure audit-ready documentation,
                secure data integrity, and seamless regulatory compliance.
              </motion.p>
            </div>

            {/* CTA BUTTONS */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></span>
                <Play className="h-5 w-5 mr-3 group-hover:animate-pulse" />
                Request Demo
                <ArrowRight className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-3" />
                Download Brochure
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center space-x-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {[
                { value: "500+", label: "Validated Deployments" },
                { value: "15+", label: "Years in Compliance" },
                { value: "25", label: "Regulated Industries" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white drop-shadow-md">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 35, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <div className="relative">
              {/* Glow aura */}
              <div className="absolute -inset-8  rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

              {/* Outer rings */}
              <div className="absolute -inset-16 border-2 border-green-400/20 rounded-full animate-combined-rotate-slow"></div>
              <div className="absolute -inset-10 border border-cyan-400/30 rounded-full animate-combined-rotate-medium"></div>

              {/* Floating particles */}
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping delay-700"></div>

              {/* Main rotating image */}
              <motion.img
                className="relative max-w-md w-full z-10 drop-shadow-2xl"
                src={banner}
                alt="FDA Compliance Software Visualization"
                // style={{ rotate }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

