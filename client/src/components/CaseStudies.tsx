import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { CaseStudy } from "@shared/schema";

export default function CaseStudies() {
  const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"]
  });

  if (isLoading) {
    return (
      <section
        className="relative py-20 flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 18s ease infinite",
        }}
      >
        {/* Animated blobs background */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <div className="h-8 bg-white/20 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-white/10 rounded w-96 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <div className="h-40 bg-white/20 rounded-lg mb-6"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-white/20 rounded w-1/2"></div>
                  <div className="h-6 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded"></div>
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
      className="relative py-20 flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 18s ease infinite",
      }}
    >
      {/* Animated blobs background */}
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-md">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how leading pharmaceutical and biotech companies achieve 
            regulatory compliance with our solutions.
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
                <CardContent className="p-0">
                  <div className="mb-6">
                    <img 
                      src={caseStudy.imageUrl || ""} 
                      alt={caseStudy.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm text-cyan-300 font-medium">
                      {caseStudy.industry}
                    </div>
                    <h3 className="text-xl font-bold text-white">{caseStudy.title}</h3>
                    <p className="text-blue-100">{caseStudy.description}</p>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-4">
                        {typeof caseStudy.metrics === 'object' && caseStudy.metrics && (
                          Object.entries(caseStudy.metrics).slice(0, 2).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-lg font-bold text-green-400">{value}</div>
                              <div className="text-xs text-blue-200 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                      <Link href={`/case-studies`}>
                        <Button variant="ghost" className="text-cyan-300 hover:text-green-400 p-0">
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
