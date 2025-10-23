// import { Helmet } from "react-helmet-async";
// import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { ArrowRight, Calendar, Clock, Search, Tag } from "lucide-react";
// import { useState } from "react";
// import type { BlogPost } from "@shared/schema";

// const categories = [
//   "All",
//   "Compliance",
//   "Pharmaceutical",
//   "Biotech",
//   "Medical Devices",
//   "Regulatory Updates",
//   "Best Practices"
// ];

// const categoryColors = {
//   "compliance": "bg-blue-100 text-blue-800",
//   "pharmaceutical": "bg-green-100 text-green-800",
//   "biotech": "bg-purple-100 text-purple-800",
//   "medical devices": "bg-orange-100 text-orange-800",
//   "regulatory updates": "bg-red-100 text-red-800",
//   "best practices": "bg-yellow-100 text-yellow-800"
// };

// export default function Blog() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
//     queryKey: ["/api/blog"]
//   });

//   // Filter blog posts based on category and search term
//   const filteredPosts = blogPosts?.filter(post => {
//     const matchesCategory = selectedCategory === "All" || 
//       post.category.toLowerCase() === selectedCategory.toLowerCase();
//     const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   }) || [];

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

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
//               <div key={i} className="bg-light-grey rounded-xl p-6">
//                 <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
//                 <div className="space-y-2">
//                   <div className="h-4 bg-gray-200 rounded w-1/3"></div>
//                   <div className="h-6 bg-gray-200 rounded w-5/6"></div>
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
//         <title>Blog - Regulatory Compliance Insights and Best Practices</title>
//         <meta 
//           name="description" 
//           content="Stay informed with the latest regulatory compliance insights, FDA updates, and best practices from 4D Solutions. Expert guidance for pharmaceutical, biotech, and medical device industries." 
//         />
//         <meta 
//           name="keywords" 
//           content="regulatory compliance blog, FDA updates, pharmaceutical compliance, biotech regulations, medical device compliance, 21 CFR Part 11" 
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
//                 Compliance Insights & Updates
//               </h1>
//               <p className="text-xl text-medium-grey max-w-3xl mx-auto">
//                 Stay ahead of regulatory changes with expert insights, best practices, 
//                 and industry updates from our compliance specialists.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Search and Filter */}
//         <section className="py-12 bg-white border-b border-gray-100">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
//               {/* Search */}
//               <motion.div 
//                 className="relative flex-1 max-w-md"
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey h-4 w-4" />
//                 <Input
//                   placeholder="Search articles..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-transparent"
//                 />
//               </motion.div>

//               {/* Category Filters */}
//               <motion.div 
//                 className="flex flex-wrap gap-2"
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 {categories.map((category) => (
//                   <Button
//                     key={category}
//                     variant={selectedCategory === category ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setSelectedCategory(category)}
//                     className={
//                       selectedCategory === category
//                         ? "bg-primary-blue hover:bg-blue-700 text-white"
//                         : "border-gray-300 text-dark-grey hover:bg-light-grey"
//                     }
//                   >
//                     {category}
//                   </Button>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Featured Article */}
//         {filteredPosts.length > 0 && (
//           <section className="py-20 bg-light-grey">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="bg-white rounded-2xl overflow-hidden shadow-lg">
//                   <div className="grid lg:grid-cols-2 gap-0">
//                     <div className="lg:order-2">
//                       <img 
//                         src={filteredPosts[0].imageUrl || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"} 
//                         alt={filteredPosts[0].title}
//                         className="w-full h-64 lg:h-full object-cover"
//                       />
//                     </div>
//                     <div className="p-8 lg:p-12 lg:order-1">
//                       <Badge 
//                         className={`mb-4 ${
//                           categoryColors[filteredPosts[0].category.toLowerCase() as keyof typeof categoryColors] || 
//                           "bg-gray-100 text-gray-800"
//                         } border-0`}
//                       >
//                         Featured Article
//                       </Badge>
//                       <h2 className="text-3xl font-bold text-dark-grey mb-4">
//                         {filteredPosts[0].title}
//                       </h2>
//                       <p className="text-lg text-medium-grey mb-6">
//                         {filteredPosts[0].excerpt}
//                       </p>
//                       <div className="flex items-center space-x-4 text-sm text-medium-grey mb-6">
//                         <div className="flex items-center space-x-1">
//                           <Calendar className="h-4 w-4" />
//                           <span>{formatDate(filteredPosts[0].createdAt)}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <Clock className="h-4 w-4" />
//                           <span>5 min read</span>
//                         </div>
//                       </div>
//                       <Button className="bg-primary-blue hover:bg-blue-700 text-white">
//                         Read Article <ArrowRight className="h-4 w-4 ml-2" />
//                       </Button>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             </div>
//           </section>
//         )}

//         {/* Articles Grid */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             {filteredPosts.length === 0 ? (
//               <div className="text-center py-12">
//                 <h3 className="text-xl font-semibold text-dark-grey mb-2">No articles found</h3>
//                 <p className="text-medium-grey">Try adjusting your search or filter criteria.</p>
//               </div>
//             ) : (
//               <div className="grid lg:grid-cols-3 gap-8">
//                 {filteredPosts.slice(1).map((post, index) => (
//                   <motion.div
//                     key={post.id}
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
//                       <CardContent className="p-0">
//                         <img 
//                           src={post.imageUrl || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"} 
//                           alt={post.title}
//                           className="w-full h-48 object-cover rounded-t-xl"
//                         />
//                         <div className="p-6">
//                           <div className="flex items-center justify-between mb-3">
//                             <Badge 
//                               className={`text-xs ${
//                                 categoryColors[post.category.toLowerCase() as keyof typeof categoryColors] || 
//                                 "bg-gray-100 text-gray-800"
//                               } border-0`}
//                             >
//                               {post.category}
//                             </Badge>
//                             <div className="flex items-center space-x-1 text-xs text-medium-grey">
//                               <Clock className="h-3 w-3" />
//                               <span>5 min read</span>
//                             </div>
//                           </div>
                          
//                           <h3 className="text-lg font-bold text-dark-grey mb-3 line-clamp-2">
//                             {post.title}
//                           </h3>
                          
//                           <p className="text-medium-grey text-sm mb-4 line-clamp-3">
//                             {post.excerpt}
//                           </p>
                          
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center space-x-1 text-xs text-medium-grey">
//                               <Calendar className="h-3 w-3" />
//                               <span>{formatDate(post.createdAt)}</span>
//                             </div>
                            
//                             <Button 
//                               variant="ghost" 
//                               size="sm"
//                               className="text-primary-blue hover:text-blue-700 p-0 h-auto"
//                             >
//                               Read More <ArrowRight className="h-3 w-3 ml-1" />
//                             </Button>
//                           </div>
                          
//                           {/* Tags */}
//                           {Array.isArray(post.tags) && post.tags.length > 0 && (
//                             <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-100">
//                               <Tag className="h-3 w-3 text-medium-grey" />
//                               <div className="flex flex-wrap gap-1">
//                                 {post.tags.slice(0, 3).map((tag, tagIndex) => (
//                                   <span 
//                                     key={tagIndex}
//                                     className="text-xs text-medium-grey bg-light-grey px-2 py-1 rounded"
//                                   >
//                                     {tag}
//                                   </span>
//                                 ))}
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Newsletter Signup */}
//         <section className="py-20 bg-secondary-blue text-white">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl font-bold mb-4">
//                 Stay Updated on Regulatory Changes
//               </h2>
//               <p className="text-xl text-blue-200 mb-8">
//                 Subscribe to our newsletter for the latest compliance insights, 
//                 regulatory updates, and industry best practices.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="bg-white text-dark-grey border-white"
//                 />
//                 <Button className="bg-accent-green hover:bg-green-600 text-white whitespace-nowrap">
//                   Subscribe Now
//                 </Button>
//               </div>
//               <p className="text-sm text-blue-200 mt-4">
//                 No spam, unsubscribe at any time.
//               </p>
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
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Clock, Search, Tag } from "lucide-react";
import { useState } from "react";
import type { BlogPost } from "@shared/schema";

const categories = [
  "All",
  "Compliance",
  "Pharmaceutical",
  "Biotech",
  "Medical Devices",
  "Regulatory Updates",
  "Best Practices"
];

const categoryColors = {
  compliance: "bg-blue-500/20 text-blue-300",
  pharmaceutical: "bg-green-500/20 text-green-300",
  biotech: "bg-purple-500/20 text-purple-300",
  "medical devices": "bg-orange-500/20 text-orange-300",
  "regulatory updates": "bg-red-500/20 text-red-300",
  "best practices": "bg-yellow-500/20 text-yellow-300",
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const filteredPosts =
    blogPosts?.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    }) || [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-slate-800 to-cyan-900 animate-gradientShift"></div>
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-400 rounded-full filter blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
          <div className="text-center mb-16">
            <div className="h-8 bg-white/20 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-white/20 rounded w-96 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6">
                <div className="h-48 bg-white/20 rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-white/20 rounded w-1/3"></div>
                  <div className="h-6 bg-white/20 rounded w-5/6"></div>
                  <div className="h-4 bg-white/20 rounded"></div>
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
        <title>Blog - Regulatory Compliance Insights and Best Practices</title>
        <meta
          name="description"
          content="Stay informed with the latest regulatory compliance insights, FDA updates, and best practices from 4D Solutions. Expert guidance for pharmaceutical, biotech, and medical device industries."
        />
        <meta
          name="keywords"
          content="regulatory compliance blog, FDA updates, pharmaceutical compliance, biotech regulations, medical device compliance, 21 CFR Part 11"
        />
      </Helmet>

      <div
        className="relative min-h-screen flex flex-col"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 18s ease infinite",
        }}
      >
        {/* Floating blobs */}
        <div className="absolute inset-0 opacity-25">
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

        <div className="relative z-10 text-white">
          {/* Header */}
          <section className="py-20 text-center">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Compliance Insights & Updates
                </h1>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Stay ahead of regulatory changes with expert insights, best
                  practices, and industry updates from our compliance
                  specialists.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Search + Filter */}
          <section className="py-12 bg-white/5 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-6 items-center justify-between">
              <motion.div
                className="relative flex-1 max-w-md"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200 h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 text-white placeholder-blue-200 border-0 focus:ring-2 focus:ring-cyan-400"
                />
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-cyan-500 text-white"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Featured Article */}
          {filteredPosts.length > 0 && (
            <section className="py-20">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-lg border-0 rounded-2xl overflow-hidden shadow-xl">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="lg:order-2">
                        <img
                          src={
                            filteredPosts[0].imageUrl ||
                            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
                          }
                          alt={filteredPosts[0].title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                      <div className="p-8 lg:p-12 lg:order-1 text-white">
                        <Badge
                          className={`mb-4 ${
                            categoryColors[
                              filteredPosts[0].category.toLowerCase() as keyof typeof categoryColors
                            ] || "bg-white/20 text-white"
                          } border-0`}
                        >
                          Featured Article
                        </Badge>
                        <h2 className="text-3xl font-bold mb-4">
                          {filteredPosts[0].title}
                        </h2>
                        <p className="text-lg text-blue-200 mb-6">
                          {filteredPosts[0].excerpt}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-blue-200 mb-6">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(filteredPosts[0].createdAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>5 min read</span>
                          </div>
                        </div>
                        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                          Read Article <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </section>
          )}

          {/* Articles Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-blue-200">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                  {filteredPosts.slice(1).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-white/10 backdrop-blur-lg border-0 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full text-white">
                        <CardContent className="p-0">
                          <img
                            src={
                              post.imageUrl ||
                              "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
                            }
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-t-xl"
                          />
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <Badge
                                className={`text-xs ${
                                  categoryColors[
                                    post.category.toLowerCase() as keyof typeof categoryColors
                                  ] || "bg-white/20 text-white"
                                } border-0`}
                              >
                                {post.category}
                              </Badge>
                              <div className="flex items-center space-x-1 text-xs text-blue-200">
                                <Clock className="h-3 w-3" />
                                <span>5 min read</span>
                              </div>
                            </div>

                            <h3 className="text-lg font-bold mb-3 line-clamp-2">
                              {post.title}
                            </h3>

                            <p className="text-blue-200 text-sm mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-1 text-xs text-blue-200">
                                <Calendar className="h-3 w-3" />
                                <span>{formatDate(post.createdAt)}</span>
                              </div>

                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-cyan-400 hover:text-cyan-300 p-0 h-auto"
                              >
                                Read More <ArrowRight className="h-3 w-3 ml-1" />
                              </Button>
                            </div>

                            {/* Tags */}
                            {Array.isArray(post.tags) && post.tags.length > 0 && (
                              <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-white/10">
                                <Tag className="h-3 w-3 text-blue-200" />
                                <div className="flex flex-wrap gap-1">
                                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className="text-xs text-blue-200 bg-white/10 px-2 py-1 rounded"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-20 bg-white/10 backdrop-blur-lg text-center">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Stay Updated on Regulatory Changes
                </h2>
                <p className="text-xl text-blue-200 mb-8">
                  Subscribe to our newsletter for the latest compliance insights,
                  regulatory updates, and industry best practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 text-white placeholder-blue-200 border-0"
                  />
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white whitespace-nowrap">
                    Subscribe Now
                  </Button>
                </div>
                <p className="text-sm text-blue-200 mt-4">
                  No spam, unsubscribe at any time.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
