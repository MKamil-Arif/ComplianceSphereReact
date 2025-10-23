"use client";
import { motion } from "framer-motion";
import { Rocket, Zap, Cpu } from "lucide-react";

const features = [
  { title: "AI-Powered", icon: Rocket },
  { title: "Next-Gen Hardware", icon: Cpu },
  { title: "Ultra Fast", icon: Zap },
];

export default function NextGenBanner() {
  return (
    <section
      className="bg-white relative min-h-screen flex flex-col items-center justify-center text-white px-6 py-24 bg-fixed bg-cover bg-center"
      // style={{
      //   // backgroundImage:
      //   //   "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')", // Unsplash tech abstract
      // }}
      style={{
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 18s ease infinite",}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          The Future is <span className="text-blue-400">Now</span>
        </motion.h2>

        {/* Marquee Scrolling Text */}
        <div className="overflow-hidden relative">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="whitespace-nowrap text-2xl text-blue-300 font-semibold"
          >
            🚀 AI • Cloud • Cybersecurity • Metaverse • AR/VR • Quantum • SaaS • Startups 🚀
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10 pt-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl hover:shadow-blue-500/40 transition"
            >
              <f.icon className="h-12 w-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold">{f.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 px-8 py-4 bg-blue-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 hover:shadow-blue-500/50 transition"
        >
          Join the Revolution 🚀
        </motion.button>
      </div>
    </section>
  );
}
