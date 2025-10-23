// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";

// export default function CookieBanner() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const consent = localStorage.getItem("cookieConsent");
//     if (!consent) {
//       setIsVisible(true);
//     }
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleAccept = () => {
//     localStorage.setItem("cookieConsent", "accepted");
//     setIsVisible(false);
//   };

//   const handleDecline = () => {
//     localStorage.setItem("cookieConsent", "declined");
//     setIsVisible(false);
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 100 }}
//           className={`fixed bottom-0 left-0 right-0 p-4 shadow-lg z-50 transition-colors duration-300 
//             ${scrolled ? "bg-white text-dark-grey" : "bg-dark-grey text-white"}`}
//         >
//           <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
//             <div className="flex-1">
//               <p className="text-sm">
//                 We use cookies to ensure you get the best experience on our website{" "}
//                 <a
//                   href="#"
//                   className={`underline hover:no-underline ${
//                     scrolled ? "text-blue-600" : "text-accent-green"
//                   }`}
//                 >
//                   Learn more
//                 </a>
//               </p>
//             </div>
//             <div className="flex space-x-4">
//               <Button
//                 onClick={handleAccept}
//                 className={`text-sm transition-colors duration-300
//                   ${scrolled 
//                     ? "bg-accent-green hover:bg-green-600 text-white" 
//                     : "bg-accent-green hover:bg-green-600 text-white"}`}
//               >
//                 Accept All
//               </Button>
//               <Button
//                 onClick={handleDecline}
//                 variant="outline"
//                 className={`text-sm border transition-colors duration-300
//                   ${scrolled 
//                     ? "border-dark-grey text-dark-grey hover:bg-dark-grey hover:text-white" 
//                     : "border-white text-white hover:bg-white hover:text-dark-grey"}`}
//               >
//                 Decline
//               </Button>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }



import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className={`fixed bottom-0 left-0 right-0 p-4 shadow-lg z-50 transition-all duration-500 backdrop-blur-md
            ${scrolled 
              ? "bg-white/95 text-dark-grey" 
              : "bg-black/30 text-white border-t border-white/20"}`}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <p className="text-sm">
                We use cookies to ensure you get the best experience on our website.{" "}
                <a
                  href="#"
                  className={`underline hover:no-underline transition-colors duration-300
                    ${scrolled ? "text-blue-600" : "text-accent-green"}`}
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex space-x-4">
              <Button
                onClick={handleAccept}
                className={`text-sm transition-all duration-300
                  ${scrolled 
                    ? "bg-accent-green hover:bg-green-600 text-white" 
                    : "bg-accent-green/90 hover:bg-accent-green text-white backdrop-blur-sm"}`}
              >
                Accept All
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className={`text-sm border transition-all duration-300
                  ${scrolled 
                    ? "border-dark-grey text-dark-grey hover:bg-dark-grey hover:text-white" 
                    : "border-white/50 text-white hover:bg-white/20 hover:border-white"}`}
              >
                Decline
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}