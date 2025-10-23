import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import logo from "./images/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Compliance", href: "/compliance" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // 50px threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex">
            <img src={logo} alt="Company Logo" height={50} width={50} />
            <Link href="/">
              <span
                className={`text-2xl font-bold cursor-pointer transition-colors ${
                  isScrolled ? "text-accent-green" : "text-white"
                }`}
              >
                Solutions.io
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      location === item.href
                        ? "text-primary-blue"
                        : isScrolled
                        ? "text-dark-grey hover:text-primary-blue"
                        : "text-white hover:text-primary-blue"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <Button
                  className={`${
                    isScrolled
                      ? "bg-accent-green hover:bg-green-600 text-white"
                      : "bg-white text-primary-blue hover:bg-gray-200"
                  }`}
                >
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu
                    className={`h-6 w-6 ${
                      isScrolled ? "text-dark-grey" : "text-white"
                    }`}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-bold text-primary-blue">
                    4D Solutions
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span
                        className={`block px-3 py-2 text-base font-medium transition-colors cursor-pointer ${
                          location === item.href
                            ? "text-primary-blue"
                            : "text-dark-grey hover:text-primary-blue"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button
                      className="w-full bg-accent-green hover:bg-green-600 text-white mt-4"
                      onClick={() => setIsOpen(false)}
                    >
                      Request Demo
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
