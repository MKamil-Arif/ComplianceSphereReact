import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Download, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import type { Product } from "@shared/schema";

export default function ProductDetail() {
  const { slug } = useParams();
  
  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: [`/api/products/${slug}`],
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-8"></div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="h-96 bg-gray-200 rounded-xl"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-grey mb-4">Product Not Found</h1>
          <p className="text-medium-grey mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/products">
            <Button className="bg-primary-blue hover:bg-blue-700 text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <section className="bg-light-grey py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-medium-grey">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/products">Products</Link>
              <span>/</span>
              <span className="text-dark-grey">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Detail */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                  <img 
                    src={product.imageUrl || ""} 
                    alt={product.name}
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-accent-green/10 text-accent-green border-0">
                        {product.complianceLevel}
                      </Badge>
                      <Badge variant="outline" className="text-primary-blue border-primary-blue">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-bold text-dark-grey">
                      {product.name}
                    </h1>
                    
                    <p className="text-xl text-medium-grey leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      size="lg"
                      className="bg-accent-green hover:bg-green-600 text-white px-8 py-4"
                    >
                      Request Demo
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline" 
                      className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Datasheet
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-dark-grey text-center mb-12">
                Key Features
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.isArray(product.features) ? product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white p-6 h-full">
                      <CardContent className="p-0 flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0" />
                        <span className="text-dark-grey font-medium">{feature}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                )) : null}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to implement {product.name}?
              </h2>
              <p className="text-xl text-blue-200 mb-8">
                Contact our experts to discuss your specific requirements and schedule a demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent-green hover:bg-green-600 text-white">
                    Contact Sales
                  </Button>
                </Link>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-secondary-blue"
                >
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
